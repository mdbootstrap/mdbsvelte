<script>

  import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbsvelte";

  let isOpen = false;

  function toggleCollapse() {
    isOpen = !isOpen;
  }

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

</script>
<MDBNavbar color="primary-color" dark expand="md">
  <MDBNavbarBrand>
    <strong class="white-text">Navbar</strong>
  </MDBNavbarBrand>
  <MDBNavbarToggler on:click={toggleCollapse}/>
  <MDBCollapse id="navbarCollapse3" {isOpen} navbar expand="md" on:update={handleUpdate}>
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
            <span class="mr-2">Dropdown</span>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
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

        <MDBFormInline waves>
          <div class="md-form my-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          </div>
        </MDBFormInline>
      </MDBNavItem>
    </MDBNavbarNav>
  </MDBCollapse>
</MDBNavbar>
