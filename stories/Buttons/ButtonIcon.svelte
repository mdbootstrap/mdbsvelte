<script>
  import {MDBBtn, MDBContainer, MDBIcon} from "mdbsvelte";
</script>
<MDBContainer>
  <MDBBtn color="primary">
    <MDBIcon icon="magic" class="mr-1"/>
    Left
  </MDBBtn>
  <MDBBtn color="default">
    Right
    <MDBIcon icon="magic" class="ml-1"/>
  </MDBBtn>
</MDBContainer>
