import {Team, teamsPath} from "../../model/team";
import {Card} from "primereact/card";
import {useContext, useEffect, useState} from "react";
import {HTTPClient} from "../../api/HttpClient";
import {KeycloakContext} from "../../auth/KeycloakProvider";

type TeamOverviewProps = {
  teams?: Team[]
};

function TeamOverview(props: TeamOverviewProps) {
  const [teams, setTeams] = useState(props.teams ? props.teams : [])
  const keycloak = useContext(KeycloakContext);

  useEffect(() => {
    let httpClient = new HTTPClient(keycloak);
    httpClient.get(teamsPath).then((teams: Team[]) => setTeams(teams))
  }, []);

  return (
      <div className="c-teams-list grid">
        {teams.map((team, index) => {
          return (
              <Card className={"c-team col-3 m-3"} title={team.name} key={"team-card-" + index}>
                <p>{team.description}</p>
                <a href={"/teams/" + team.id} className={"p-button"}>Öffnen</a>
              </Card>
          )
        })}
      </div>
  );
}

export default TeamOverview;