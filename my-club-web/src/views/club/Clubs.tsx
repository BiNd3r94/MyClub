import {Club} from "../../model/club";
import {ClubOverview} from "./ClubOverview";

type ClubsProps = {
    myClubs: Club[]
    showClub: (id: number) => void
}
const Clubs = (props: ClubsProps) => {
    const getMyClubs = () => {
        return props.myClubs ? props.myClubs.map((club: Club) => {
            return <ClubOverview key={`club-${club.id}`} club={club} showClub={props.showClub}/>
        }) : [];
    }

    return (
        <div>
            {getMyClubs()}
        </div>
    )
}
export default Clubs;