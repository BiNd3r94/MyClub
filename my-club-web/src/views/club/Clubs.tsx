import {Club, clubsCreatePath} from "../../model/club";
import {ClubOverview} from "./ClubOverview";
import {LinkButton} from "../../components/base/LinkButton";
import {useTranslation} from "react-i18next";
import {clubsState} from "../../util/state/clubsState";
import React from "react";
import {useAtomValue} from "jotai/react/useAtomValue";

type ClubsProps = {}
const Clubs = (props: ClubsProps) => {
    const {t} = useTranslation();
    const clubs = useAtomValue(clubsState);
    const getMyClubs = () => {
        console.log(clubs)
        return clubs ? clubs.map((club: Club) => {
            return <div className={"col-4 p-3"} key={`club-${club.id}`}>
                <ClubOverview club={club}/>
            </div>
        }) : [];
    }

    return (
        <React.Fragment>
            <div className={"grid"}>
                {getMyClubs()}
            </div>

            <LinkButton link={clubsCreatePath}>{t("create-club")}</LinkButton>
        </React.Fragment>

    )
}
export default Clubs;