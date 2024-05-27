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


  const openTeams = () => {
    setShowTeam(false);
    setShowTeams(true);
    setTeamId(null);
  }

  const openTeam = (teamId: number) => {
    setTeamId(teamId);
    setShowTeams(false);
    setShowTeam(true);
  }


  return (
      <div className={"c-teams"}>
        {showTeams && <TeamOverview teams={props.teams} showTeam={openTeam}/>}
        {showTeam && <TeamDetail teamId={teamId} showOverview={openTeams}/>}
      </div>
  )
}

export default Teams;