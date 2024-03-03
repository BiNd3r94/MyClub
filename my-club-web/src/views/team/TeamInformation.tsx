import {Team} from "../../model/team";
import {TabPanel, TabView} from "primereact/tabview";
import {Accordion, AccordionTab} from "primereact/accordion";

type TeamInformationProps = { team: Team };

function TeamInformation(props: TeamInformationProps) {
    return (
        <Accordion multiple>
            <AccordionTab header={"Spieler"}>Players</AccordionTab>
            <AccordionTab header={"Spiele"}>Games</AccordionTab>
        </Accordion>
    );
}

export default TeamInformation;