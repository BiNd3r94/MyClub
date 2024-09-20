import {Team} from "../../model/team";
import {Accordion, AccordionTab} from "primereact/accordion";
import {useEffect, useState} from "react";
import Games from "../game/Games";
import Members from "../member/Members";
import {Game} from "../../model/game";

type TeamInformationProps = { team: Team };

function TeamInformation(props: Readonly<TeamInformationProps>) {
  const [team, setTeam] = useState(props.team);
  useEffect(() => {
    if (props.team?.id) {
      fetch("/api/team/" + props.team.id).then((res) => {
        res.json().then((team: Team) => {
          setTeam(team);
        })
      })
    }
  }, [props.team]);

  const getTeamGames = (): Game[] => {
    return []
  }

  return (
      <Accordion multiple>
        <AccordionTab header={"Spieler"}>
          {team?.members &&
              <Members members={team.members}/>
          }
        </AccordionTab>
        <AccordionTab header={"Spiele"}>
          <Games games={getTeamGames()}/>
        </AccordionTab>
      </Accordion>
  );
}

export default TeamInformation;