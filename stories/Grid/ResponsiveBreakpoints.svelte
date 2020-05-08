<script>
  import {MDBContainer, MDBRow, MDBCol} from "mdbsvelte";
</script>

<MDBContainer>
  <MDBRow>
    <MDBCol sm="5" md="6">
      .col-sm-5 .col-md-6
    </MDBCol>
    <MDBCol sm="5" md="6" class="offset-sm-2 offset-md-0">
      .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
    </MDBCol>
  </MDBRow>

  <MDBRow>
    <MDBCol sm="6" md="5" lg="6">
      .col-sm-6 .col-md-5 .col-lg-6
    </MDBCol>
    <MDBCol sm="6" md="5" lg="6" class="offset-md-2 offset-lg-0">
      .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
    </MDBCol>
  </MDBRow>
</MDBContainer>
