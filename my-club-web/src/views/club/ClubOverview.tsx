import {Card} from "primereact/card";
import {Club} from "../../model/club";

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
        <a className="p-button mt-3 flex justify-content-center"
           href={"/clubs/" + props.club.id}>Öffnen</a>
      </Card>
  )
}