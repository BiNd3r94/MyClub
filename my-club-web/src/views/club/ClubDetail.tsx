import {useEffect, useState} from "react";
import {Club} from "../../model/club";
import {Section} from "../../model/section";
import {Event} from "../../model/event";
import Sections from "../section/Sections";
import {TabPanel, TabView} from "primereact/tabview";
import Events from "../events/Events";

type ClubDetailProps = {
  clubId: number
  openOverview: () => void
}
const ClubDetail = (props: ClubDetailProps) => {
  const [club, setClub] = useState<Club>(null)
  const [sections, setSections] = useState<Section[]>([])
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/clubs/" + props.clubId).then((res) => {
      res.json().then((club: Club) => {
        setClub(club);
      })
    })
    fetch("http://localhost:8080/clubs/" + props.clubId + "/sections").then((res) => {
      res.json().then((sections: Section[]) => {
        setSections(sections);
      })
    })
    fetch("http://localhost:8080/clubs/" + props.clubId + "/events").then((res) => {
      res.json().then((events: Event[]) => {
        setEvents(events);
      })
    })
  }, []);

  return (
      <div className="c-club-details">
        <h2>{club?.name && club.name}</h2>
        <p>{club?.description && club.description}</p>

        <TabView>
          <TabPanel header={"Abteilungen"} >
            <Sections sections={sections}/>
          </TabPanel>
          <TabPanel header={"Veranstaltungen"}>
            <Events events={events} />
          </TabPanel>
        </TabView>

      </div>
  )
}

export default ClubDetail;