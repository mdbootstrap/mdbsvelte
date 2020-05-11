<script>
  import {MDBTable, MDBTableBody, MDBTableHead} from "mdbsvelte";

  let button = `<button type="button" class="btn btn-indigo btn-sm m-0 waves-effect waves-light">Button</button>`;
  let columns = ["id", "First", "Last", button];
  let data = [
    {
      id: 1,
      first: button,
      last: "Otto",
      handle: "@mdo"
    }, {
      id: 2,
      first: "Jacob",
      last: button,
      handle: "@fat"
    },
    {
      id: 3,
      first: "Larry",
      last: "the Bird",
      handle: button
    }
  ]
</script>
<MDBTable>
  <MDBTableHead columns={columns}/>
  <MDBTableBody data={data}/>
</MDBTable>
