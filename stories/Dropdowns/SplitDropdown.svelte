<script>
  import {MDBBtnGroup, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "../../src/index";
</script>
<MDBBtnGroup>
  <MDBBtn color="danger" class="m-0">
    DANGER
  </MDBBtn>
  <MDBDropdown>
    <MDBDropdownToggle caret color="danger" class="m-0" />
    <MDBDropdownMenu color="danger">
      <MDBDropdownItem>Action</MDBDropdownItem>
      <MDBDropdownItem>Another Action</MDBDropdownItem>
      <MDBDropdownItem>Something else here</MDBDropdownItem>
      <MDBDropdownItem>Something else here</MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
</MDBBtnGroup>
