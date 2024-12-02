import {Section} from "../../model/section";
import SectionOverview from "./SectionOverview";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, useParams} from "react-router-dom";
import {sectionsState} from "../../util/state/sectionsState";
import {useAtomValue} from "jotai";
import {currentClubState} from "../../util/state/clubsState";

type SectionsProps = {}
const Sections = (props: SectionsProps) => {
    const {t} = useTranslation();
    const currentClub = useAtomValue(currentClubState);
    const sections = useAtomValue(sectionsState)
    const [showSections] = useState<boolean>(true);
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
                <Link className="p-button"
                      to={"/clubs/" + params.clubId + "/sections/create/"}>{t("create-section")}</Link>
            </div>
        </div>
    )
}

export default Sections;