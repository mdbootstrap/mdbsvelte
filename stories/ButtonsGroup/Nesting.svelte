<script>
  import {MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "../../src/index";
</script>

<MDBBtnGroup>
  <MDBBtn color="info" size="lg">1</MDBBtn>
  <MDBBtn color="info" size="lg">2</MDBBtn>
  <MDBBtnGroup>
    <MDBDropdown>
      <MDBDropdownToggle caret color="info" className="h-100">
        Dropdown
      </MDBDropdownToggle>
      <MDBDropdownMenu color="info">
        <MDBDropdownItem>Dropdown link</MDBDropdownItem>
        <MDBDropdownItem>Dropdown link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  </MDBBtnGroup>
</MDBBtnGroup>
