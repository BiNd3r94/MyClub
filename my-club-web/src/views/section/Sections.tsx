import {Section} from "../../model/section";
import SectionOverview from "./SectionOverview";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {sectionsState} from "../../util/state/sectionsState";
import {useAtomValue} from "jotai/react/useAtomValue";

type SectionsProps = {}
const Sections = (props: SectionsProps) => {
    const {t} = useTranslation();
    const sections = useAtomValue(sectionsState)
    const [showSections] = useState<boolean>(true);
    const [showSection] = useState<boolean>(false);
    const [sectionId] = useState<number>(null);
    const params = useParams();

    const getSections = () => {
        return sections.map((section: Section) => {
            return <SectionOverview key={`section-${section.id}`} section={section}/>
        })
    }

    return (
        <div className={"c-sections"}>
            {showSections && getSections()}

            <div className="actions mt-3">
                <a className="p-button"
                   href={"/clubs/" + params.clubId + "/sections/create/"}>{t("Add Section")}</a>
            </div>
        </div>
    )
}

export default Sections;