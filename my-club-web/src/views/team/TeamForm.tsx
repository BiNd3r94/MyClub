import React, {useContext, useState} from "react";
import {Message} from "primereact/message";
import {KeycloakContext} from "../../auth/KeycloakProvider";
import {useTranslation} from "react-i18next";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {Link, useParams} from "react-router-dom";
import {HTTPClient} from "../../api/HttpClient";
import {Team} from "../../model/team";
import {teamsState} from "../../util/state/teamsState";
import {useAtom} from "jotai";

const TeamForm = () => {
    const params = useParams();
    const keycloak = useContext(KeycloakContext);
    const [teams, setTeams] = useAtom(teamsState);
    const {t} = useTranslation();
    const [team, setTeam] = useState(new Team());
    const [status, setStatus] = useState("");

    const createTeam = () => {
        let httpClient = new HTTPClient(keycloak);
        let tmpTeam = {...team, section: {id:params.sectionId}}
        httpClient.create("/api/team/", JSON.stringify(tmpTeam)).then((res) => {
            if (res.ok) {
                setStatus(successStatus)
                return res.json()
            }
        }).then((team: Team) => {
            setTeams([...teams, team])
        })
    }

    return (
        <div className={"c-team-create flex flex-column m-3"}>
            <h1>{t('create-team')}</h1>

            {status === successStatus &&
                <React.Fragment>
                    <Message text={t("team-created")}/>
                    <Link className="p-button mt-3 flex justify-content-center"
                       to={"/sections/" + params.sectionId}>{t("to-teams")}</Link>
                </React.Fragment>
            }
            {status !== successStatus &&
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-column">
                    <label className="mt-3 mb-1" htmlFor={"team-name"}>Name</label>
                    <InputText
                        id={"team-name"}
                        value={team.name}
                        onChange={(changeEvent) => setTeam({
                            ...team,
                            name: changeEvent.target.value
                        })}
                    ></InputText>

                    <label className="mt-3 mb-1" htmlFor={"team-description"}>{t("description")}</label>
                    <InputTextarea
                        id={"team-description"}
                        value={team.description}
                        onChange={(changeEvent) => setTeam({
                            ...team,
                            description: changeEvent.target.value
                        })}
                    ></InputTextarea>
                    <Button className="flex justify-content-center mt-4"
                            onClick={() => createTeam()}>{t("create")}</Button>
                </form>
            }
        </div>
    );
}

const successStatus: string = "success"

export default TeamForm;