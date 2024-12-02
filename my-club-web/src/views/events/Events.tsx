import {useState} from "react";
import {Event} from "../../model/event";
import EventDetail from "./EventDetail";
import EventOverview from "./EventOverview";
import {Link, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

type SectionsProps = {
  events: Event[]
}
const Events = (props: SectionsProps) => {
  const [showEvents, setShowEvents] = useState<boolean>(true);
  const params = useParams();
  const {t} = useTranslation();

  const getSections = () => {
    return props.events.map((event: Event) => {
      return <EventOverview key={`event-${event.id}`} event={event}/>
    })
  }

  return (
      <div className={"c-sections"}>
        {showEvents && getSections()}

        <div className="actions mt-3">
          <Link className="p-button"
                to={"/sections/" + params.sectionId + "/teams/create/"}>{t("create-team")}</Link>
        </div>
      </div>
  )
}

export default Events;