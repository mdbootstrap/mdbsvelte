<script>
  import {MDBInputGroup, MDBInput, fragment, MDBBtn, MDBRow, MDBCol} from 'mdbsvelte';
</script>
<MDBRow>
  <MDBCol md="6" class="offset-md-3">
    <MDBInputGroup material class="mb-3 mt-0">
      <template use:fragment slot="prepend">
        <MDBBtn class="m-0 px-3 py-2 z-depth-0">
          BUTTON
        </MDBBtn>
      </template>
    </MDBInputGroup>

    <MDBInputGroup material class="mb-3 mt-0" hint="Recipient's username">
      <template use:fragment slot="append">
        <MDBBtn
          color="secondary"
          class="m-0 px-3 py-2 z-depth-0">
          BUTTON
        </MDBBtn>
      </template>
    </MDBInputGroup>

    <MDBInputGroup material class="mb-3 mt-0">
      <template use:fragment slot="prepend">
        <MDBBtn
          color="info"
          class="m-0 px-3 py-2 z-depth-1">
          BUTTON
        </MDBBtn>
        <MDBBtn
          color="info"
          class="m-0 px-3 py-2 z-depth-1">
          BUTTON
        </MDBBtn>
      </template>
    </MDBInputGroup>


    <MDBInputGroup material hint="Recipient's username" class="mb-4 mt-0">
      <template use:fragment slot="append">
        <MDBBtn color="primary" class="m-0 px-3 py-2 z-depth-1">
          BUTTON
        </MDBBtn>
        <MDBBtn
          color="primary"
          class="m-0 px-3 py-2 z-depth-1">
          BUTTON
        </MDBBtn>
      </template>
    </MDBInputGroup>
  </MDBCol>
</MDBRow>
