<script>
  import {
    MDBBtn,
    MDBBtnGroup,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBRow,
    MDBCol
  } from "../../src/index";
</script>
<MDBRow center>
  <MDBCol xl="2" lg="3" md="4" class="mb-md-0 mb-4">
    <MDBBtnGroup vertical>
      <MDBBtn color="amber" class="ml-0">Button</MDBBtn>
      <MDBBtn color="amber">Button</MDBBtn>
      <MDBBtn color="amber">Button</MDBBtn>
      <MDBBtn color="amber">Button</MDBBtn>
      <MDBBtn color="amber">Button</MDBBtn>
      <MDBBtn color="amber">Button</MDBBtn>
    </MDBBtnGroup>
  </MDBCol>
  <MDBCol xl="2" lg="3" md="4">
    <MDBBtnGroup vertical>
      <MDBBtn color="indigo" class="ml-0">Button</MDBBtn>
      <MDBBtn color="indigo">Button</MDBBtn>

      <MDBDropdown class="w-100">
        <MDBDropdownToggle caret color="indigo" class="m-0">
          Dropdown
        </MDBDropdownToggle>
        <MDBDropdownMenu color="info">
          <MDBDropdownItem>Dropdown link</MDBDropdownItem>
          <MDBDropdownItem>Dropdown link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBBtn color="indigo">Button</MDBBtn>
      <MDBBtn color="indigo">Button</MDBBtn>

      <MDBDropdown class="w-100">
        <MDBDropdownToggle caret color="indigo" class="m-0 rounded-0">
          Dropdown
        </MDBDropdownToggle>
        <MDBDropdownMenu color="indigo">
          <MDBDropdownItem>Dropdown link</MDBDropdownItem>
          <MDBDropdownItem>Dropdown link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <MDBDropdown class="w-100">
        <MDBDropdownToggle caret color="indigo" class="m-0 rounded-0">
          Dropdown
        </MDBDropdownToggle>
        <MDBDropdownMenu color="indigo">
          <MDBDropdownItem>Dropdown link</MDBDropdownItem>
          <MDBDropdownItem>Dropdown link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <MDBDropdown class="w-100">
        <MDBDropdownToggle caret color="indigo" class="m-0 rounded-0">
          Dropdown
        </MDBDropdownToggle>
        <MDBDropdownMenu color="indigo">
          <MDBDropdownItem>Dropdown link</MDBDropdownItem>
          <MDBDropdownItem>Dropdown link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

    </MDBBtnGroup>
  </MDBCol>
</MDBRow>
