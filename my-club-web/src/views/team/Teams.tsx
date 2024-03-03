import {Team} from "../../model/team";
import {useEffect, useState} from "react";
import TeamDetail from "./TeamDetail";
import TeamOverview from "./TeamOverview";

type TeamsProps = {
    sectionId: number
}

const Teams = (props: TeamsProps) => {
    const [showTeams, setShowTeams] = useState<boolean>(true)
    const [showTeam, setShowTeam] = useState<boolean>(false)
    const [teamId, setTeamId] = useState<number>(null)
    const [teams, setTeams] = useState<Team[]>([])

    useEffect(() => {
        fetch("/api/teams").then((res) => {
            res.json().then((teams: Team[]) => {
                setTeams(teams);
            })
        })
    }, []);

    const openTeams = () => {
        setShowTeam(false);
        setShowTeams(true);
        setTeamId(null);
    }

    const openTeam = (sectionId: number) => {
        setShowTeams(false);
        setShowTeam(true);
        setTeamId(sectionId);
    }


    return (
        <div className={"c-teams"}>
            {showTeams && <TeamOverview teams={teams} showTeam={openTeam} /> }
            {showTeam && <TeamDetail teamId={teamId} showOverview={openTeams} /> }
        </div>
    )
}

export default Teams;