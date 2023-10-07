import {Section} from "../../model/section";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Event} from "../../model/event";

type SectionOverviewProps = {
  event: Event
  showSection: (sectionId: number) => void
}
const EventOverview = (props: SectionOverviewProps) => {
  return (
      <Card className={"c-event m-3"} title={props.event.name}>
        <p>{props.event.description}</p>
        <Button onClick={() => props.showSection(props.event.id)}>Öffnen</Button>
      </Card>
  )
}

export default EventOverview;