import {Team} from "../../model/team";
import {Card} from "primereact/card";
import {Button} from "primereact/button";

type TeamOverviewProps = {
    teams: Team[]
    showTeam: (teamId:number) => void
};

function TeamOverview(props: TeamOverviewProps) {
    return (
        <div className="c-teams-list">
            {props.teams.map((team,index)=>{
                return (
                    <Card className={"c-team m-3"} title={team.name} key={"team-card-" + index}>
                    <p>{team.description}</p>
                        <Button onClick={() => props.showTeam(team.id)}>Öffnen</Button>
                    </Card>
                )
            })}
        </div>
    );
}

export default TeamOverview;