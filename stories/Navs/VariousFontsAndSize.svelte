<script>

  import {MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol} from "mdbsvelte";

</script>
<MDBContainer>
  <MDBRow>
    <MDBCol>
      <MDBNav color="grey" class="flex-column font-weight-bold">
        <MDBNavLink class="white-text" active to="#!">Active</MDBNavLink>
        <MDBNavLink class="white-text" to="#!">Link 1</MDBNavLink>
        <MDBNavLink class="white-text" to="#!">Link 2</MDBNavLink>
        <MDBNavLink class="white-text" to="#!">Link 3</MDBNavLink>
      </MDBNav>
    </MDBCol>

    <MDBCol>
      <MDBNav color="amber" class="flex-column font-weight-bold">
        <MDBNavLink active to="#!" class="dark-grey-text">Active</MDBNavLink>
        <MDBNavLink to="#!" class="dark-grey-text">Link 1</MDBNavLink>
        <MDBNavLink to="#!" class="dark-grey-text">Link 2</MDBNavLink>
        <MDBNavLink to="#!" class="dark-grey-text">Link 3</MDBNavLink>
      </MDBNav>
    </MDBCol>

    <MDBCol>
      <MDBNav color="cyan" class="flex-column font-weight-bold">
        <MDBNavLink active to="#!" class="indigo-text">Active</MDBNavLink>
        <MDBNavLink to="#!">Link 1</MDBNavLink>
        <MDBNavLink to="#!">Link 2</MDBNavLink>
        <MDBNavLink to="#!">Link 3</MDBNavLink>
      </MDBNav>
    </MDBCol>
  </MDBRow>
</MDBContainer>
