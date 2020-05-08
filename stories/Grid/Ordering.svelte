<script>
  import {MDBContainer, MDBRow, MDBCol} from "mdbsvelte";
</script>

<MDBContainer>
  <MDBRow>
    <MDBCol>First, but unordered</MDBCol>
    <MDBCol class="order-12">Second, but last</MDBCol>
    <MDBCol class="order-1">Third, but second</MDBCol>
  </MDBRow>
</MDBContainer>
