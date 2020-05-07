<script>
  import {MDBContainer, MDBRow, MDBCol} from "../../src/index";
</script>

<MDBContainer>
  <MDBRow>
    <MDBCol md="4">.col-md-4</MDBCol>
    <MDBCol md="4" class="offset-md-4">
      .col-md-4 .offset-md-4
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol md="3" class="offset-md-3">
      .col-md-3 .offset-md-3
    </MDBCol>
    <MDBCol md="3" class="offset-md-3">
      .col-md-3 .offset-md-3
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol md="6" class="offset-md-3">.col-md-6 .offset-md-3</MDBCol>
  </MDBRow>
</MDBContainer>
