<script>

  import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbsvelte";

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen
  }

</script>
<MDBContainer>
  <MDBBtn on:click={toggle}>Modal</MDBBtn>
  <MDBModal isOpen={isOpen} toggle={toggle} backdrop={false}>
    <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      (...)
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={toggle}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</MDBContainer>
