import React, {useContext, useState} from "react";
import {Message} from "primereact/message";
import {KeycloakContext} from "../../auth/KeycloakProvider";
import {useTranslation} from "react-i18next";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {useParams} from "react-router-dom";
import {HTTPClient} from "../../api/HttpClient";
import {Section} from "../../model/section";
import {sectionsState} from "../../util/state/sectionsState";
import {useAtom} from "jotai/react/useAtom";

const SectionForm = () => {
    const params = useParams();
    const keycloak = useContext(KeycloakContext);
    const [sections, setSections] = useAtom(sectionsState);
    const {t} = useTranslation();
    const [section, setSection] = useState(new Section());
    const [status, setStatus] = useState("");

    const createSection = () => {
        let httpClient = new HTTPClient(keycloak);
        let tmpSection = {...section, clubId: params.clubId}
        httpClient.create("/api/section/", JSON.stringify(tmpSection)).then((res) => {
            if (res.ok) {
                setStatus(successStatus)
                return res.json()
            }
        }).then((section: Section) => {
            setSections([...sections, section])
        })
    }

    return (
        <div className={"c-section-create flex flex-column m-3"}>
            <h1>{t('create-section')}</h1>

            {status === successStatus &&
                <React.Fragment>
                    <Message text={t("section-created")}/>
                    <a className="p-button mt-3 flex justify-content-center"
                       href={"/clubs/" + params.clubId}>{t("to-sections")}</a>
                </React.Fragment>
            }
            {status !== successStatus &&
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-column">
                    <label className="mt-3 mb-1" htmlFor={"section-name"}>Name</label>
                    <InputText
                        id={"section-name"}
                        value={section.name}
                        onChange={(changeEvent) => setSection({
                            ...section,
                            name: changeEvent.target.value
                        })}
                    ></InputText>

                    <label className="mt-3 mb-1" htmlFor={"section-description"}>Beschreibung</label>
                    <InputTextarea
                        id={"section-description"}
                        value={section.description}
                        onChange={(changeEvent) => setSection({
                            ...section,
                            description: changeEvent.target.value
                        })}
                    ></InputTextarea>
                    <Button className="flex justify-content-center mt-4"
                            onClick={() => createSection()}>{t("create")}</Button>
                </form>
            }
        </div>
    );
}

const successStatus: string = "success"

export default SectionForm;