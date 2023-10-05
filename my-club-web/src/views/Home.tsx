import {useEffect, useState} from "react";
import {Club} from "../model/club";
import Clubs from "./club/Clubs";
import ClubDetail from "./club/ClubDetail";

const Home = () => {
  const [myClubs, setMyClubs] = useState<Club[]>();
  const [showClubs, setShowClubs] = useState<boolean>(true)
  const [showClub, setShowClub] = useState<boolean>(false)
  const [clubId, setClubId] = useState<number>(null)
  const [sectionId, setSectionId] = useState<number>(null)
  const [showSections, setShowSections] = useState<boolean>(false)

  useEffect(() => {
    fetch("http://localhost:8080/clubs").then((res) => {
      res.json().then((data) => {
        setMyClubs(data)
      })

    })
  }, [])

  const openSection = (sectionId: number) => {
    setSectionId(sectionId);
    setShowClubs(false);
    setShowSections(true);
  }

  const openClub = (clubId: number) => {
    setClubId(clubId);
    setShowClubs(false);
    setShowSections(false);
    setShowClub(true);
  }

  const openClubs = () => {
    setShowClub(false);
    setShowSections(false);
    setShowClubs(true);
  }

  return (
      <div className={"container p-3"}>
        {showClubs && <Clubs myClubs={myClubs} showClub={openClub}/>}
        {showClub && <ClubDetail clubId={clubId} openOverview={openClubs}/>}
      </div>
  )
}

export default Home;