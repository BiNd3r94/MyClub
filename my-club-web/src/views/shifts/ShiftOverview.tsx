import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Event} from "../../model/event";

type SectionOverviewProps = {
    shift: Event
    showShift: (shiftId: number) => void
}
const ShiftOverview = (props: SectionOverviewProps) => {
    return (
        <Card className={"c-event m-3"} title={props.shift.name}>
            <p>{props.shift.description}</p>
            <Button onClick={() => props.showShift(props.shift.id)}>Öffnen</Button>
        </Card>
    )
}

export default ShiftOverview;