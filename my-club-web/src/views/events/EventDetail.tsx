import {Card} from "primereact/card";
import {Event} from "../../model/event";
import React, {useState} from "react";


type EventDetailProps = {
  eventId: number
  openOverview: () => void
}
const EventDetail = (props: EventDetailProps) => {
  const [clubEvent] = useState<Event>()
  // TODO event fetching (add set Event)

  return (
      <React.Fragment>
        {clubEvent &&
            <Card className={"c-event m-3"} title={clubEvent.name}>
              <p>{clubEvent.description}</p>
              <p>{clubEvent.date}</p>
            </Card>
        }
      </React.Fragment>
  )
}

export default EventDetail;