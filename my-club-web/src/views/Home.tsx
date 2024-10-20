import {useContext, useEffect, useState} from "react";
import Clubs from "./club/Clubs";
import ClubDetail from "./club/ClubDetail";
import {useSetRecoilState} from "recoil";
import {clubsState} from "../state/clubsState";
import {clubsPath} from "../model/club";
import {HTTPClient} from "../api/HttpClient";
import {KeycloakContext} from "../auth/KeycloakProvider";

const Home = () => {
  const setClubs = useSetRecoilState(clubsState);
  const [showClubs] = useState<boolean>(true)
  const [showClub] = useState<boolean>(false)
  const [clubId] = useState<number>(null)
  const keycloak = useContext(KeycloakContext);

  useEffect(() => {
    initHome()
  })

  const initHome = () => {
    fetchClubs()
  }

  const fetchClubs = () => {
    if (keycloak.token) {
      let httpClient = new HTTPClient(keycloak);
      try {
        httpClient.get(clubsPath).then((clubsFetchResult) => {
          setClubs(clubsFetchResult);
        })
      } catch (error) {
        setClubs([]);
      }
    }
  }

  return (
      <div className={"container p-3"}>
        {showClubs && <Clubs/>}
        {showClub && <ClubDetail clubId={clubId}/>}
      </div>
  )
}

export default Home;