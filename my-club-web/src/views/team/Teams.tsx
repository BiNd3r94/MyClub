import {Team} from "../../model/team";

type TeamsProps = {
  teams: Team[]
}
const Teams = (props: TeamsProps) => {
  // const [showSections, setShowSections] = useState<boolean>(true)
  // const [showSection, setShowSection] = useState<boolean>(false)
  // const [sectionId, setSectionId] = useState<number>(null)
  //
  // const getSections = () => {
  //   return props.sections.map((section: Section) => {
  //     return <SectionOverview key={`section-${section.id}`} section={section}
  //                             showSection={showSection}/>
  //   })
  // }

  // const showSections = (sectionId: number) => {
  //   setShowSection(false);
  //   setShowSections(true);
  //   setSectionId(null);
  // }
  //
  // const showSection = (sectionId: number) => {
  //   setShowSections(false);
  //   setShowSection(true);
  //   setSectionId(sectionId);
  // }

  return (
      <div className={"c-sections"}>

      </div>
  )
}

export default Teams;