import Teams from "./Teams";
import {useState} from "react";
import {Team} from "../../model/team";
import {Section} from "../../model/section";

type  TeamsOfSectionProps = {
  section: Section
}

function TeamsOfSection(props: TeamsOfSectionProps) {
  const [teams, setTeams] = useState<Team[]>(props.section.teams)


  return (<Teams teams={teams}/>)
}

export default TeamsOfSection;