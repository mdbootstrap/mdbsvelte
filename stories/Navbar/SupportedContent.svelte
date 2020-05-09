<script>

  import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
  } from "mdbsvelte";

  let isOpen = true;

  function toggleCollapse() {
    isOpen = !isOpen;
  }
</script>
<MDBNavbar color="default-color" dark expand="md">
  <MDBNavbarBrand>
    <strong class="white-text">Navbar</strong>
  </MDBNavbarBrand>
  <MDBNavbarToggler on:click={toggleCollapse}/>
  <MDBCollapse id="navbarCollapse3" {isOpen} navbar>
    <MDBNavbarNav left>
      <MDBNavItem active>
        <MDBNavLink to="#!">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Features</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Pricing</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <div class="d-none d-md-inline">Dropdown</div>
          </MDBDropdownToggle>
          <MDBDropdownMenu class="dropdown-default">
            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    </MDBNavbarNav>
    <MDBNavbarNav right>
      <MDBNavItem>
        <MDBNavLink class="waves-effect waves-light" to="#!">
          <MDBIcon fab icon="twitter"/>
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink class="waves-effect waves-light" to="#!">
          <MDBIcon fab icon="google-plus-g"/>
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <MDBIcon icon="user"/>
          </MDBDropdownToggle>
          <MDBDropdownMenu right class="dropdown-default">
            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    </MDBNavbarNav>
  </MDBCollapse>
</MDBNavbar>
