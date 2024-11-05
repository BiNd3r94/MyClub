import {useContext, useEffect, useState} from "react";
import {Section, sectionsPath} from "../../model/section";
import TeamsOfSection from "../team/TeamsOfSection";
import {useParams} from "react-router-dom";
import {HTTPClient} from "../../api/HttpClient";
import {KeycloakContext} from "../../auth/KeycloakProvider";

type SectionDetailProps = {
  sectionId?: number
  openOverview?: () => void
}
const SectionDetail = (props: SectionDetailProps) => {
  const [section, setSection] = useState<Section>(null)
  const params = useParams()
  const keycloak = useContext(KeycloakContext)

  useEffect(() => {

    let httpClient = new HTTPClient(keycloak);
    httpClient.get(sectionsPath + params.sectionId).then((section: Section) => {
      setSection(section);
    })
  }, [params.sectionId]);

  return (
      <div className="c-club-details m-3">
        <h2>{section?.name && section.name}</h2>
        <p>{section?.description && section.description}</p>

        <h3>Teams</h3>
        {section &&
            <TeamsOfSection section={section}/>
        }
      </div>
  )
}

export default SectionDetail;