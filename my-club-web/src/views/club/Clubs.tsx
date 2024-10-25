import {Club, clubsCreatePath} from "../../model/club";
import {ClubOverview} from "./ClubOverview";
import {useRecoilValue} from "recoil";
import {clubsState} from "../../state/clubsState";
import React from "react";

type ClubsProps = {}
const Clubs = (props: ClubsProps) => {
  const clubs = useRecoilValue(clubsState);
  const getMyClubs = () => {
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

        <a className="p-button mt-3" href={clubsCreatePath}>Neuen Club hinzufügen</a>
      </React.Fragment>

  )
}
export default Clubs;