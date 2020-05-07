<script>
  import {MDBBtn, MDBBtnGroup, MDBIcon, MDBCol, MDBRow} from "../../src/index";
</script>
<MDBRow>
  <MDBCol xl="5" md="6" class="mb-xl-0 mb-4">

    <MDBBtnGroup size="lg" class="mb-4">
      <MDBBtn color="primary">Left</MDBBtn>
      <MDBBtn color="warning">Left</MDBBtn>
      <MDBBtn color="danger">Left</MDBBtn>
    </MDBBtnGroup>

    <MDBBtnGroup class="mb-4">
      <MDBBtn color="primary">Left</MDBBtn>
      <MDBBtn color="warning">Left</MDBBtn>
      <MDBBtn color="danger">Left</MDBBtn>
    </MDBBtnGroup>

    <MDBBtnGroup size="sm" class="mb-4">
      <MDBBtn color="primary">Left</MDBBtn>
      <MDBBtn color="warning">Left</MDBBtn>
      <MDBBtn color="danger">Left</MDBBtn>
    </MDBBtnGroup>

  </MDBCol>

  <MDBCol xl="3" md="12" class="mb-xl-0 mb-4">
    <MDBBtnGroup vertical>
      <MDBBtn color="primary" class="ml-0">1</MDBBtn>
      <MDBBtn color="pink">2</MDBBtn>
      <MDBBtn color="success">3</MDBBtn>
      <MDBBtn color="amber">4</MDBBtn>
      <MDBBtn color="red">5</MDBBtn>
    </MDBBtnGroup>
  </MDBCol>

  <MDBCol xl="4" md="12">
    <div class="btn-toolbar mb-4" role="toolbar">
      <MDBBtnGroup class="mr-2">
        <MDBBtn color="mdb-color lighten-2">1</MDBBtn>
        <MDBBtn color="indigo lighten-2">2</MDBBtn>
        <MDBBtn color="blue lighten-2">3</MDBBtn>
        <MDBBtn color="light-blue lighten-2">4</MDBBtn>
        <MDBBtn color="cyan lighten-2">5</MDBBtn>
      </MDBBtnGroup>
    </div>
    <div class="btn-toolbar" role="toolbar">
      <MDBBtnGroup class="mr-2">
        <MDBBtn color="indigo lighten-2">
          <MDBIcon icon="star"/>
        </MDBBtn>
        <MDBBtn color="blue lighten-2">
          <MDBIcon icon="heart"/>
        </MDBBtn>
        <MDBBtn color="light-blue lighten-2">
          <MDBIcon icon="user"/>
        </MDBBtn>
        <MDBBtn color="cyan lighten-2">
          <MDBIcon fab icon="twitter"/>
        </MDBBtn>
      </MDBBtnGroup>
    </div>
  </MDBCol>
</MDBRow>
