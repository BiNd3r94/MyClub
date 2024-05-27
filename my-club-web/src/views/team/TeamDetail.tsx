import {Team} from "../../model/team";
import {useEffect, useState} from "react";
import {Button} from "primereact/button";
import TeamInformation from "./TeamInformation";
import {useParams} from "react-router-dom";

type TeamDetailProps = {
  teamId?: number
  showOverview?: () => void
};

function TeamDetail(props: TeamDetailProps) {
  const [team, setTeam] = useState<Team>(null)
  const params = useParams()

  useEffect(() => {
    let teamFetchingURL = getTeamFetchingURL();

    fetch(teamFetchingURL).then((res) => {
      res.json().then((team: Team) => {
        setTeam(team);
      })
    })
  }, [params.teamId]);

  const getTeamFetchingURL = () => {
    let teamFetchingURL = `/api/teams`

    if (params.teamId) {
      teamFetchingURL += "/" + params.teamId;
    } else if (team?.id) {
      teamFetchingURL += "/" + team.id;
    }

    return teamFetchingURL;
  }

  return (
      <div className="c-team">
        <h2>{team && team.name}</h2>
        <p>{team && team.description}</p>
        <TeamInformation team={team}/>
        <Button className={"mt-3"}
                onClick={props.showOverview ? props.showOverview : window.history.back}>Zurück</Button>
      </div>
  );
}

export default TeamDetail;