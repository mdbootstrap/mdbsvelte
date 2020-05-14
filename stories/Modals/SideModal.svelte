<script>

  import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbsvelte";

  let isOpen = false;

  let state = {
    modal16: false,
    modal17: false,
    modal18: false,
    modal19: false
  };

  function toggle(i) {
    state[`modal${i}`] = !state[`modal${i}`]
  }

</script>
<MDBContainer>
  <MDBBtn color="primary" on:click={()=>toggle(16)}>Top right</MDBBtn>
  <MDBModal isOpen={state.modal16} toggle={()=>toggle(16)} side position="top-right">
    <MDBModalHeader toggle={()=>toggle(16)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={()=>toggle(16)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

  <MDBBtn color="primary" on:click={()=>toggle(17)}>Bottom left</MDBBtn>
  <MDBModal isOpen={state.modal17} toggle={()=>toggle(17)} side position="bottom-left">
    <MDBModalHeader toggle={()=>toggle(17)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Bottom left
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={()=>toggle(17)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

  <MDBBtn color="primary" on:click={()=>toggle(18)}>Bottom Right</MDBBtn>
  <MDBModal isOpen={state.modal18} toggle={()=>toggle(18)} side position="bottom-right">
    <MDBModalHeader toggle={()=>toggle(18)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={()=>toggle(18)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

  <MDBBtn color="primary" on:click={()=>toggle(19)}>Top left</MDBBtn>
  <MDBModal isOpen={state.modal19} toggle={()=>toggle(19)} side position="top-left">
    <MDBModalHeader toggle={()=>toggle(19)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={()=>toggle(19)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</MDBContainer>
