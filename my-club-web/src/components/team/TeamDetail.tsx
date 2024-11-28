import {Team} from "../../model/team";
import {useEffect, useState} from "react";
import TeamInformation from "./TeamInformation";
import {Link, useParams} from "react-router-dom";
import {Card} from "primereact/card";

type TeamDetailProps = {
  teamId?: number
  showOverview?: () => void
};

function TeamDetail(props: TeamDetailProps) {
  const [team, setTeam] = useState<Team>(null)
  const params = useParams();

  useEffect(() => {
    let teamFetchingURL = getTeamFetchingURL();

    fetch(teamFetchingURL).then((res) => {
      res.json().then((team: Team) => {
        setTeam(team);
      })
    })
  }, [params.teamId]);

  const getTeamFetchingURL = () => {
    let teamFetchingURL = `/api/team`

    if (params.teamId) {
      teamFetchingURL += "/" + params.teamId;
    } else if (team?.id) {
      teamFetchingURL += "/" + team.id;
    }

    return teamFetchingURL;
  }

  return (
      <div className="c-team m-3">
        <Card>
          <h2>{team && team.name}</h2>
          <p>{team && team.description}</p>
          <TeamInformation team={team}/>
          <Link
              className={"p-component p-button mt-3"}
              to={"/teams"}
          >Zurück</Link>
        </Card>
      </div>
  );
}

export default TeamDetail;