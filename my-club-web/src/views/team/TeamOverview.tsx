import {Team} from "../../model/team";
import {Card} from "primereact/card";
import {useEffect, useState} from "react";

type TeamOverviewProps = {
  teams?: Team[]
};

function TeamOverview(props: TeamOverviewProps) {
  const [teams, setTeams] = useState(props.teams ? props.teams : [])

  useEffect(() => {
    fetch("/api/team/")
    .then((res) => res.json())
    .then((teams: Team[]) => setTeams(teams))
  }, []);

  return (
      <div className="c-teams-list grid">
        {teams.map((team, index) => {
          return (
              <Card className={"c-team col-3 m-3"} title={team.name} key={"team-card-" + index}>
                <p>{team.description}</p>
                <a href={"/teams/" + team.id} className={"p-button"}>Öffnen</a>
                {/*<Button onClick={() => props.showTeam(team.id)}>Öffnen</Button>*/}
              </Card>
          )
        })}
      </div>
  );
}

export default TeamOverview;