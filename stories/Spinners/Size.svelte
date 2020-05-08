<script>
  import {MDBRow, MDBCol, MDBSpinner} from "mdbsvelte";
</script>
<MDBRow>
  <MDBCol>
    <MDBSpinner size="sm"/>
  </MDBCol>
  <MDBCol>
    <MDBSpinner size="sm" type="grow"/>
  </MDBCol>

  <MDBCol>
    <MDBSpinner/>
  </MDBCol>
  <MDBCol>
    <MDBSpinner type="grow"/>
  </MDBCol>
</MDBRow>
