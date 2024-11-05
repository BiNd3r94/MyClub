import {Card} from "primereact/card";
import {Event} from "../../model/event";
import {useState} from "react";


type ShiftDetailProps = {
    shiftId: number
    openOverview: () => void
}
const ShiftDetail = (props: ShiftDetailProps) => {
    const [shift, setShift] = useState<Event>(null)

    return (
        <Card className={"c-shift m-3"} title={shift.name}>
            <p>{shift.description}</p>
            <p>{shift.date}</p>
        </Card>
    )
}

export default ShiftDetail;