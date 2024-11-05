import {Card} from "primereact/card";
import {Event} from "../../model/event";
import {Link} from "react-router-dom";

type SectionOverviewProps = {
  event: Event
}
const EventOverview = (props: SectionOverviewProps) => {
  return (
      <Card className={"c-event m-3"} title={props.event.name}>
        <p>{props.event.description}</p>
        <Link className={"p-component p-button"} to={"/events/" + props.event.id}>Öffnen</Link>
      </Card>
  )
}

export default EventOverview;