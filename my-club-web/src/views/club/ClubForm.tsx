import {InputText} from "primereact/inputtext";
import {useContext, useState} from "react";
import {Club} from "../../model/club";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {HTTPClient} from "../../api/HttpClient";
import {KeycloakContext} from "../../auth/KeycloakProvider";
import {Message} from "primereact/message";
import {useTranslation} from "react-i18next";

export const ClubForm = () => {
  const keycloak = useContext(KeycloakContext);
  const {t} = useTranslation();
  const [club, setClub] = useState(new Club());
  const [status, setStatus] = useState("");

  const createClub = () => {
    let httpClient = new HTTPClient(keycloak);
    httpClient.create("/api/club/", JSON.stringify(club)).then(() => {
      setStatus("Club erstellt")
    })
  }

  return (
      <div className="c-club-creation">
        <h1>{t('Create Club')}</h1>
        {status != "" && <Message>{status}</Message>}

        <label htmlFor={"club-name"}>Name</label>
        <InputText
            id={"club-name"}
            value={club.name}
            onChange={(changeEvent) => setClub({...club, name: changeEvent.target.value})}
        ></InputText>

        <label htmlFor={"club-description"}>Beschreibung</label>
        <InputTextarea
            id={"club-description"}
            value={club.description}
            onChange={(changeEvent) => setClub({...club, description: changeEvent.target.value})}
        ></InputTextarea>

        <Button onClick={() => createClub()}>{t("create")}</Button>

      </div>
  )
}