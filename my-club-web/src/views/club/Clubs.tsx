import {Club} from "../../model/club";
import {ClubOverview} from "./ClubOverview";
import {useRecoilValue} from "recoil";
import {clubsState} from "../../state/clubsState";

type ClubsProps = {}
const Clubs = (props: ClubsProps) => {
  const clubs = useRecoilValue(clubsState);
  const getMyClubs = () => {
    return clubs ? clubs.map((club: Club) => {
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