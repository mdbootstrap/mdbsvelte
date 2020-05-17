<script>

  import {MDBNav, MDBNavItem, MDBNavLink} from "mdbsvelte";

</script>
<MDBNav class="nav-pills nav-fill">
  <MDBNavItem>
    <MDBNavLink active href="#!">Active</MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink href="#!">Longer nav link</MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink href="#!">Link</MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink disabled href="#!">Disabled</MDBNavLink>
  </MDBNavItem>
</MDBNav>
