import {useEffect, useState} from "react";
import {Section} from "../../model/section";
import {Team} from "../../model/team";
import Teams from "../team/Teams";

type SectionDetailProps = {
  sectionId: number
  openOverview: () => void
}
const SectionDetail = (props: SectionDetailProps) => {
  const [section, setSection] = useState<Section>(null)
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/sections/" + props.sectionId).then((res) => {
      res.json().then((section: Section) => {
        setSection(section);
      })
    })
    fetch("http://localhost:8080/sections/" + props.sectionId + "/teams").then((res) => {
      res.json().then((teams: Team[]) => {
        setTeams(teams);
      })
    })
  }, []);

  return (
      <div className="c-club-details">
        <h2>{section?.name && section.name}</h2>
        <p>{section?.description && section.description}</p>

        <h3>Abteilungen</h3>
        <Teams teams={teams}/>
      </div>
  )
}

export default SectionDetail;