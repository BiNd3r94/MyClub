import {Team} from "../../model/team";
import {useEffect, useState} from "react";
import {Button} from "primereact/button";
import TeamInformation from "./TeamInformation";

type TeamDetailProps = {
    teamId: number
    showOverview: () => void
};

function TeamDetail(props: TeamDetailProps) {
    const[team, setTeam] = useState<Team>(null)

    useEffect(() => {
        fetch("/api/teams/" + props.teamId ).then((res) => {
            res.json().then((team: Team) => {
                setTeam(team);
            })
        })
    }, []);

    return (
        <div className="c-team">
            <h2>{team && team.name}</h2>
            <p>{ team && team.description}</p>
            <TeamInformation team={team} />
            <Button className={"mt-3"} onClick={props.showOverview}>Zurück</Button>
        </div>
    );
}

export default TeamDetail;