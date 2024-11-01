import {Club, clubsCreatePath} from "../../model/club";
import {ClubOverview} from "./ClubOverview";
import {useRecoilValue} from "recoil";
import {clubsState} from "../../state/clubsState";
import React from "react";
import {LinkButton} from "../../components/LinkButton";
import {useTranslation} from "react-i18next";

type ClubsProps = {}
const Clubs = (props: ClubsProps) => {
  const {t} = useTranslation();
  const clubs = useRecoilValue(clubsState);
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