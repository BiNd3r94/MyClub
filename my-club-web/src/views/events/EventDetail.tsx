import {Card} from "primereact/card";
import {Event} from "../../model/event";
import {useState} from "react";


type EventDetailProps = {
    eventId: number
    openOverview: () => void
}
const EventDetail = (props: EventDetailProps) => {
    const [event] = useState<Event>(null)
  // TODO event fetching (add set Event)

    return (
        <Card className={"c-event m-3"} title={event.name}>
            <p>{event.description}</p>
            <p>{event.date}</p>
        </Card>
    )
}

export default EventDetail;