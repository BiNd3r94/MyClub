import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Member} from "../../model/member";

type MembersProps = { members: Member[] };

function Members(props: Readonly<MembersProps>) {
  return (
      <DataTable value={props.members}>
        <Column field="firstName" header="Vorname"/>
        <Column field="lastName" header="Nachname"/>
      </DataTable>
  )
}

export default Members;