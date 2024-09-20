import {Section} from "../../model/section";
import {Card} from "primereact/card";
import {Link} from "react-router-dom";


type SectionOverviewProps = {
  section?: Section
}
const SectionOverview = (props: SectionOverviewProps) => {
  return (
      <Card className={"c-section m-3"} title={props.section.name}>
        <p>{props.section.description}</p>
        <Link className={"p-component p-button"} to={"/sections/" + props.section.id}>Öffnen</Link>
      </Card>
  )
}

export default SectionOverview;