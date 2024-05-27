import {useEffect, useState} from "react";
import {Section} from "../../model/section";
import TeamsOfSection from "../team/TeamsOfSection";
import {useParams} from "react-router-dom";

type SectionDetailProps = {
  sectionId?: number
  openOverview?: () => void
}
const SectionDetail = (props: SectionDetailProps) => {
  const [section, setSection] = useState<Section>(null)
  const params = useParams()

  useEffect(() => {
    let sectionFetchingURL = getSectionFetchingURL();

    fetch(sectionFetchingURL).then((res) => {
      res.json().then((section: Section) => {
        setSection(section);
      })
    })
  }, [params.sectionId]);

  const getSectionFetchingURL = () => {
    let sectionFetchingURL = `/api/sections`

    if (params.sectionId) {
      sectionFetchingURL += "/" + params.sectionId;
    } else if (props.sectionId) {
      sectionFetchingURL += "/" + props.sectionId;
    }

    return sectionFetchingURL;
  }

  return (
      <div className="c-club-details">
        <h2>{section?.name && section.name}</h2>
        <p>{section?.description && section.description}</p>

        <h3>Teams</h3>
        {section &&
            <TeamsOfSection section={section}/>
        }
      </div>
  )
}

export default SectionDetail;