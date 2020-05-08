<script>
  import {MDBBtnGroup, MDBBtn, MDBRow, MDBCol} from "mdbsvelte";
</script>
<MDBRow>
  <MDBCol md='12' class="mb-4">
    <MDBBtnGroup size="lg">
      <MDBBtn color="unique">Left</MDBBtn>
      <MDBBtn color="unique">Middle</MDBBtn>
      <MDBBtn color="unique">Right</MDBBtn>
    </MDBBtnGroup>
  </MDBCol>
  <MDBCol md='12' class="mb-4">
    <MDBBtnGroup>
      <MDBBtn color="unique">Left</MDBBtn>
      <MDBBtn color="unique">Middle</MDBBtn>
      <MDBBtn color="unique">Right</MDBBtn>
    </MDBBtnGroup>
  </MDBCol>
  <MDBCol md='12' class="mb-4">
    <MDBBtnGroup size="sm">
      <MDBBtn color="unique">Left</MDBBtn>
      <MDBBtn color="unique">Middle</MDBBtn>
      <MDBBtn color="unique">Right</MDBBtn>
    </MDBBtnGroup>
  </MDBCol>
</MDBRow>
