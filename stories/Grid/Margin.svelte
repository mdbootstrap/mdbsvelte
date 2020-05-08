<script>
  import {MDBContainer, MDBRow, MDBCol} from "mdbsvelte";
</script>

<MDBContainer>
  <MDBRow>
    <MDBCol md="4">.col-md-4</MDBCol>
    <MDBCol md="4" class="ml-auto">
      .col-md-4 .ml-auto
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol md="3" class="ml-md-auto">
      .col-md-3 .ml-md-auto
    </MDBCol>
    <MDBCol md="3" class="ml-md-auto">
      .col-md-3 .ml-md-auto
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol size="auto" class="mr-auto">
      .col-auto .mr-auto
    </MDBCol>
    <MDBCol size="auto">.col-auto</MDBCol>
  </MDBRow>
</MDBContainer>
