import {Game} from "../../model/game";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

type GamesProps = { games: Game[] };

function Games(props: Readonly<GamesProps>) {
  return (
      <DataTable value={props.games}>
        <Column field="homeTeam" header="Heimteam"/>
        <Column field="awayTeam" header="Auswärtsteam"/>
      </DataTable>
  )
}

export default Games;