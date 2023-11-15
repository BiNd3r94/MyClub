import {useState} from "react";
import {Event} from "../../model/event";
import EventDetail from "./EventDetail";
import EventOverview from "./EventOverview";

type SectionsProps = {
    events: Event[]
}
const Events = (props: SectionsProps) => {
    const [showEvents, setShowEvents] = useState<boolean>(true)
    const [showEvent, setShowEvent] = useState<boolean>(false)
    const [eventId, setEventId] = useState<number>(null)

    const getSections = () => {
        return props.events.map((event: Event) => {
            return <EventOverview key={`event-${event.id}`} event={event}
                                  showSection={openEvent}/>
        })
    }

    const openEvents = () => {
        setShowEvent(false);
        setShowEvents(true);
        setEventId(null);
    }

    const openEvent = (sectionId: number) => {
        setShowEvents(false);
        setShowEvent(true);
        setEventId(sectionId);
    }

    return (
        <div className={"c-sections"}>
            {showEvents && getSections()}
            {showEvent &&
                <EventDetail eventId={eventId} openOverview={openEvents}/>
            }
        </div>
    )
}

export default Events;