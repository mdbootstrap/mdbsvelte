<script>

  import {MDBNav, MDBNavItem, MDBNavLink} from "mdbsvelte";

</script>
<MDBNav class="nav-pills nav-fill">
  <MDBNavItem>
    <MDBNavLink active to="#!">Active</MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink to="#!">Longer nav link</MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink to="#!">Link</MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
  </MDBNavItem>
</MDBNav>
