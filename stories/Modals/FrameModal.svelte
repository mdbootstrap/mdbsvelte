<script>

  import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbsvelte";

  let isOpen = false;

  let state={
    modal10: false,
    modal11: false
  };

  function toggle(i) {
    state[`modal${i}`] = !state[`modal${i}`]
  }
</script>
<MDBContainer>
  <MDBBtn color="warning" on:click={()=>toggle(10)}>Bottom</MDBBtn>
  <MDBModal isOpen={state.modal10} toggle={()=>toggle(10)} frame position="bottom">
    <MDBModalBody className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      <MDBBtn color="secondary" on:click={()=>toggle(10)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalBody>
  </MDBModal>
  <MDBBtn color="warning" on:click={()=>toggle(11)}>Top</MDBBtn>
  <MDBModal isOpen={state.modal11} toggle={()=>toggle(11)} frame position="top">
    <MDBModalBody className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      <MDBBtn color="secondary" on:click={()=>toggle(11)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalBody>
  </MDBModal>
</MDBContainer>
