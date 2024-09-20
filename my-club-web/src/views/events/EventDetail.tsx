import {Card} from "primereact/card";
import {Event} from "../../model/event";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


type EventDetailProps = {
  eventId: number
  openOverview: () => void
}
const EventDetail = (props: EventDetailProps) => {
  const [clubEvent, setClubEvent] = useState<Event>();
  const params = useParams();

  useEffect(() => {
    let eventId = params.eventId ? params.eventId : props.eventId
    fetch("/api/event/" + eventId)
    .then((res) => res.json())
    .then((event: Event) => setClubEvent(event))
  }, []);

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