<script>

  import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbsvelte";

  let isOpen = false;

  let state={
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false
  };

  function toggle(i) {
    state[`modal${i}`] = !state[`modal${i}`]
  }
</script>
<MDBContainer>
  <MDBBtn color="info" on:click={()=>toggle(8)}>Right</MDBBtn>
  <MDBModal isOpen={state.modal8} toggle={()=>toggle(8)} fullHeight position="right">
    <MDBModalHeader toggle={()=>toggle(8)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={()=>toggle(8)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
  <MDBBtn color="info" on:click={()=>toggle(9)}>Bottom</MDBBtn>
  <MDBModal isOpen={state.modal9} toggle={()=>toggle(9)} fullHeight position="bottom">
    <MDBModalHeader toggle={()=>toggle(9)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={()=>toggle(9)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</MDBContainer>
