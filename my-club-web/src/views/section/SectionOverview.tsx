import {Section} from "../../model/section";
import {Card} from "primereact/card";
import {Button} from "primereact/button";


type SectionOverviewProps = {
  section: Section
  showSection: (sectionId: number) => void
}
const SectionOverview = (props: SectionOverviewProps) => {
  return (
      <Card className={"c-section m-3"} title={props.section.name}>
        <p>{props.section.description}</p>
        <Button onClick={() => props.showSection(props.section.id)}>Öffnen</Button>
      </Card>
  )
}

export default SectionOverview;