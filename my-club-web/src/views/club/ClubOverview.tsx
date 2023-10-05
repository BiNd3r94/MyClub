import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Club} from "../../model/club";

type ClubOverviewProps = {
  club: Club
  showClub: (id: number) => void
}
export const ClubOverview = (props: ClubOverviewProps) => {
  const getClubName = (): string => {
    if (props.club) {
      return props.club.name
    }
    return ""
  }
  return (
      <Card title={getClubName()} className="m-3">
        <p>{props.club.description}</p>
        <Button onClick={() => props.showClub(props.club.id)}>Öffnen</Button>
      </Card>
  )
}