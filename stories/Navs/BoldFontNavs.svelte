<script>

  import {MDBNav, MDBNavItem, MDBNavLink, MDBRow, MDBCol} from "mdbsvelte";

</script>
<MDBRow>
  <MDBCol>
    <MDBNav class="font-weight-bold">
      <MDBNavLink active href="#!">Active</MDBNavLink>
      <MDBNavLink href="#!">Link</MDBNavLink>
      <MDBNavLink href="#!">Link</MDBNavLink>
      <MDBNavLink disabled href="#!">Disabled</MDBNavLink>
    </MDBNav>
  </MDBCol>

  <MDBCol>
    <MDBNav class="flex-column font-weight-bold">
      <MDBNavLink active href="#!">Active</MDBNavLink>
      <MDBNavLink href="#!">Link</MDBNavLink>
      <MDBNavLink href="#!">Link</MDBNavLink>
      <MDBNavLink disabled href="#!">Disabled</MDBNavLink>
    </MDBNav>
  </MDBCol>
</MDBRow>
