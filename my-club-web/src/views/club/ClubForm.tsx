import React, {useContext, useState} from "react";
import {InputText} from "primereact/inputtext";
import {Club} from "../../model/club";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {HTTPClient} from "../../api/HttpClient";
import {KeycloakContext} from "../../auth/KeycloakProvider";
import {Message} from "primereact/message";
import {useTranslation} from "react-i18next";
import {clubsState} from "../../util/state/clubsState";
import {LinkButton} from "../../components/base/LinkButton";
import {useAtom} from "jotai";

export const ClubForm = () => {
    const keycloak = useContext(KeycloakContext);
    const [clubs, setClubs] = useAtom(clubsState);
    const {t} = useTranslation();
    const [club, setClub] = useState(new Club());
    const [status, setStatus] = useState("");

    const createClub = () => {
        let httpClient = new HTTPClient(keycloak);
        httpClient.create("/api/club/", JSON.stringify(club)).then((res) => {
            if (res.ok) {
                setStatus(successStatus)
                return res.json()
            }
        }).then((club: Club) => {
            console.log("Setting Club" + club.id)
            setClubs([...clubs, club])
        })
    }

    return (
        <div className="c-club-creation flex flex-column m-3">
            <h1>{t('Create Club')}</h1>
            {status === successStatus &&
                <React.Fragment>
                    <Message text={t("club-created")}/>
                    <LinkButton link="/clubs">{t("to-clubs")}</LinkButton>
                </React.Fragment>
            }
            {status !== successStatus &&
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-column">
                    <label className="mt-3 mb-1" htmlFor={"club-name"}>Name</label>
                    <InputText
                        id={"club-name"}
                        value={club.name}
                        onChange={(changeEvent) => setClub({...club, name: changeEvent.target.value})}
                    ></InputText>

                    <label className="mt-3 mb-1" htmlFor={"club-description"}>Beschreibung</label>
                    <InputTextarea
                        id={"club-description"}
                        value={club.description}
                        onChange={(changeEvent) => setClub({
                            ...club,
                            description: changeEvent.target.value
                        })}
                    ></InputTextarea>
                    <Button className="flex justify-content-center mt-4"
                            onClick={() => createClub()}>{t("create")}</Button>
                </form>
            }
        </div>
    )
}

const successStatus: string = "success"