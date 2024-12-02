import {teamsState} from "../../util/state/teamsState";
import Teams from "../../components/team/Teams";
import {useSetAtom} from "jotai";

export const TeamsView = () => {
    const setTeams = useSetAtom(teamsState);

    return (
        <div className="c-teams">
            <Teams/>
        </div>
    )
}