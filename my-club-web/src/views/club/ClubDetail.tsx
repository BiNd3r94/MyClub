import {useContext, useEffect, useState} from "react";
import {Club, clubsPath} from "../../model/club";
import {Section} from "../../model/section";
import {Event} from "../../model/event";
import Sections from "../section/Sections";
import {TabPanel, TabView} from "primereact/tabview";
import Events from "../events/Events";
import {useParams} from "react-router-dom";
import {HTTPClient} from "../../api/HttpClient";
import {KeycloakContext} from "../../auth/KeycloakProvider";
import {useSetRecoilState} from "recoil";
import {sectionsState} from "../../state/sectionState";

type ClubDetailProps = {
  clubId?: number
}
const ClubDetail = (props: ClubDetailProps) => {
  const [club, setClub] = useState<Club>(null)
  const setSections = useSetRecoilState(sectionsState)
  const [events, setEvents] = useState<Event[]>([])
  const params = useParams()
  const keycloak = useContext(KeycloakContext)

  useEffect(() => {
    initClub()
  }, []);

  const initClub = () => {
    let clubId = params.clubId ? params.clubId : props.clubId;
    let httpClient = new HTTPClient(keycloak)

    httpClient.get(clubsPath + clubId).then((club) => {
      setClub(club);
    })

    httpClient.get(clubsPath + clubId + "/section").then((sections: Section[]) => {
      setSections(sections);
    })

    httpClient.get(clubsPath + clubId + "/event").then((res) => {
      setEvents(events);
    })
  }

  return (
      <div className="c-club-details m-3">
        <h2>{club?.name && club.name}</h2>
        <p>{club?.description && club.description}</p>

        <TabView>
          <TabPanel header={"Abteilungen"}>
            <Sections/>
          </TabPanel>
          <TabPanel header={"Veranstaltungen"}>
            <Events events={events}/>
          </TabPanel>
          <TabPanel header={"Mitglieder"}>
            <span>TODO</span>
          </TabPanel>
        </TabView>

      </div>
  )
}

export default ClubDetail;