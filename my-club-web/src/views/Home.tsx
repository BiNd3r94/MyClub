import {useEffect, useState} from "react";
import {Club} from "../model/club";
import Clubs from "./club/Clubs";
import ClubDetail from "./club/ClubDetail";
import keycloak from "../util/keycloak";

const Home = () => {
  const [myClubs, setMyClubs] = useState<Club[]>();
  const [showClubs, setShowClubs] = useState<boolean>(true)
  const [showClub, setShowClub] = useState<boolean>(false)
  const [clubId, setClubId] = useState<number>(null)

  useEffect(() => {
    let token = keycloak.token;
    fetch("/api/club", {
      headers: {
        "Authorization": "Bearer " + token
      }
    }).then((res) => {
      res.json().then((data) => {
        setMyClubs(data)
      })

    })
  }, [])

  return (
      <div className={"container p-3"}>
        {showClubs && <Clubs myClubs={myClubs}/>}
        {showClub && <ClubDetail clubId={clubId}/>}
      </div>
  )
}

export default Home;