<script>

  import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbsvelte";

  let state = {
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false
  };

  function toggle(i) {
    state[`modal${i}`] = !state[`modal${i}`]
  }

</script>
<MDBContainer>
  <MDBBtn color="primary" on:click={()=>toggle(2)}>Medium modal</MDBBtn>
  <MDBModal isOpen={state.modal2} toggle={()=>toggle(2)}>
    <MDBModalHeader toggle={()=>toggle(2)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={()=>toggle(2)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
  <MDBBtn color="primary" on:click={()=>toggle(3)}>Small modal</MDBBtn>
  <MDBModal isOpen={state.modal3} toggle={()=>toggle(3)} size="sm">
    <MDBModalHeader toggle={()=>toggle(3)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" size="sm" on:click={()=>toggle(3)}>Close</MDBBtn>
      <MDBBtn color="primary" size="sm">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
  <MDBBtn color="primary" on:click={()=>toggle(4)}>Large modal</MDBBtn>
  <MDBModal isOpen={state.modal4} toggle={()=>toggle(4)} size="lg">
    <MDBModalHeader toggle={()=>toggle(4)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={()=>toggle(4)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
  <MDBBtn color="primary" on:click={()=>toggle(5)}>Fluid modal</MDBBtn>
  <MDBModal isOpen={state.modal5} toggle={()=>toggle(5)} size="fluid">
    <MDBModalHeader toggle={()=>toggle(5)}>MDBModal title</MDBModalHeader>
    <MDBModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" on:click={()=>toggle(5)}>Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</MDBContainer>
