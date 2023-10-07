import {useState} from "react";
import {Event} from "../../model/event";
import ShiftDetail from "./ShiftDetail";
import ShiftOverview from "./ShiftOverview";

type SectionsProps = {
  events: Event[]
}
const Shifts = (props: SectionsProps) => {
  const [showShifts, setShowShifts] = useState<boolean>(true)
  const [showShift, setShowShift] = useState<boolean>(false)
  const [shiftId, setShiftId] = useState<number>(null)

  const getSections = () => {
    return props.events.map((event: Event) => {
      return <ShiftOverview key={`event-${event.id}`} shift={event}
                              showShift={openEvent}/>
    })
  }

  const openEvents = () => {
    setShowShift(false);
    setShowShifts(true);
    setShiftId(null);
  }

  const openEvent = (sectionId: number) => {
    setShowShifts(false);
    setShowShift(true);
    setShiftId(sectionId);
  }

  return (
      <div className={"c-sections"}>
        {showShifts && getSections()}
        {showShift &&
            <ShiftDetail shiftId={shiftId} openOverview={openEvents}/>
        }
      </div>
  )
}

export default Shifts;