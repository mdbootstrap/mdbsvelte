<script>

  import {MDBNav, MDBNavItem, MDBNavLink, MDBRow, MDBCol} from "mdbsvelte";

</script>
<MDBRow>
  <MDBCol>
    <MDBNav class="font-weight-bold">
      <MDBNavLink active to="#!">Active</MDBNavLink>
      <MDBNavLink to="#!">Link</MDBNavLink>
      <MDBNavLink to="#!">Link</MDBNavLink>
      <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
    </MDBNav>
  </MDBCol>

  <MDBCol>
    <MDBNav class="flex-column font-weight-bold">
      <MDBNavLink active to="#!">Active</MDBNavLink>
      <MDBNavLink to="#!">Link</MDBNavLink>
      <MDBNavLink to="#!">Link</MDBNavLink>
      <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
    </MDBNav>
  </MDBCol>
</MDBRow>
