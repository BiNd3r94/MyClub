import {Card} from "primereact/card";
import {Club} from "../../model/club";
import {useAtomValue, useSetAtom} from "jotai";
import {currentClubState} from "../../util/state/clubsState";
import {Link} from "react-router-dom";

type ClubOverviewProps = {
  club: Club
}
export const ClubOverview = (props: ClubOverviewProps) => {
    const setCurrentClub = useSetAtom(currentClubState);
    const getClubName = (): string => {
      if (props.club) {
      return props.club.name
    }
    return ""
  }
  return (
      <Card title={getClubName()} className="">
        <p>{props.club.description}</p>
        <Link className="p-button mt-3 flex justify-content-center"
           to={"/clubs/" + props.club.id}
           onClick={()=> setCurrentClub(props.club)}
        >Öffnen</Link>
      </Card>
  )
}