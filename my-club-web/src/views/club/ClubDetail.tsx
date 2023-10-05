import {useEffect, useState} from "react";
import {Club} from "../../model/club";
import {Section} from "../../model/section";
import Sections from "../section/Sections";

type ClubDetailProps = {
  clubId: number
  openOverview: () => void
}
const ClubDetail = (props: ClubDetailProps) => {
  const [club, setClub] = useState<Club>(null)
  const [sections, setSections] = useState<Section[]>([])

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
  }, []);

  return (
      <div className="c-club-details">
        <h2>{club?.name && club.name}</h2>
        <p>{club?.description && club.description}</p>

        <h3>Abteilungen</h3>
        <Sections sections={sections}/>
      </div>
  )
}

export default ClubDetail;