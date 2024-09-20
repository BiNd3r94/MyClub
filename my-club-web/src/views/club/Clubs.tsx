import {Club} from "../../model/club";
import {ClubOverview} from "./ClubOverview";

type ClubsProps = {
  myClubs: Club[]
}
const Clubs = (props: ClubsProps) => {
  const getMyClubs = () => {
    return props.myClubs ? props.myClubs.map((club: Club) => {
      return <div className={"col-4 xl:col-2 p-3"} key={`club-${club.id}`}>
        <ClubOverview club={club}/>
      </div>
    }) : [];
  }

  return (
      <div className={"grid"}>
        {getMyClubs()}
      </div>
  )
}
export default Clubs;