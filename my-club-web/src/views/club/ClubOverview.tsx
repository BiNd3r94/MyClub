import {Card} from "primereact/card";
import {Club} from "../../model/club";
import {Link} from "react-router-dom";

type ClubOverviewProps = {
  club: Club
}
export const ClubOverview = (props: ClubOverviewProps) => {
  const getClubName = (): string => {
    if (props.club) {
      return props.club.name
    }
    return ""
  }
  return (
      <Card title={getClubName()} className="">
        <p>{props.club.description}</p>
        <Link className={"p-component p-button"} to={"/clubs/" + props.club.id}>Öffnen</Link>
      </Card>
  )
}