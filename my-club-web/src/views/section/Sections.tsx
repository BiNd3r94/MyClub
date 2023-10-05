import {Section} from "../../model/section";
import SectionOverview from "./SectionOverview";
import {useState} from "react";
import SectionDetail from "./SectionDetail";

type SectionsProps = {
  sections: Section[]
}
const Sections = (props: SectionsProps) => {
  const [showSections, setShowSections] = useState<boolean>(true)
  const [showSection, setShowSection] = useState<boolean>(false)
  const [sectionId, setSectionId] = useState<number>(null)

  const getSections = () => {
    return props.sections.map((section: Section) => {
      return <SectionOverview key={`section-${section.id}`} section={section}
                              showSection={openSection}/>
    })
  }

  const openSections = () => {
    setShowSection(false);
    setShowSections(true);
    setSectionId(null);
  }

  const openSection = (sectionId: number) => {
    setShowSections(false);
    setShowSection(true);
    setSectionId(sectionId);
  }

  return (
      <div className={"c-sections"}>
        {showSections && getSections()}
        {showSection &&
            <SectionDetail sectionId={sectionId} openOverview={openSections}/>
        }
      </div>
  )
}

export default Sections;