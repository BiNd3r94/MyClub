import {Section} from "../../model/section";
import SectionOverview from "./SectionOverview";
import {useState} from "react";

type SectionsProps = {
  sections: Section[]
}
const Sections = (props: SectionsProps) => {
  const [showSections] = useState<boolean>(true)
  const [showSection] = useState<boolean>(false)
  const [sectionId] = useState<number>(null)

  const getSections = () => {
    return props.sections.map((section: Section) => {
      return <SectionOverview key={`section-${section.id}`} section={section}/>
    })
  }

  return (
      <div className={"c-sections"}>
        {showSections && getSections()}
      </div>
  )
}

export default Sections;