import {Team} from "../../model/team";
import {useState} from "react";
import TeamDetail from "./TeamDetail";
import TeamOverview from "./TeamOverview";

type TeamsProps = {
  teams: Team[]
}

const Teams = (props: TeamsProps) => {
  const [showTeams, setShowTeams] = useState<boolean>(true)
  const [showTeam, setShowTeam] = useState<boolean>(false)
  const [teamId, setTeamId] = useState<number>(null)

  return (
      <div className={"c-teams"}>
        {showTeams && <TeamOverview teams={props.teams}/>}
        {showTeam && <TeamDetail teamId={teamId}/>}
      </div>
  )
}

export default Teams;