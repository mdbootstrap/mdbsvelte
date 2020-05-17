<script>

  import {MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol} from "mdbsvelte";

</script>
<MDBContainer>
  <MDBRow>
    <MDBCol>
      <MDBNav color="grey" class="flex-column font-weight-bold">
        <MDBNavLink class="white-text" active href="#!">Active</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 1</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 2</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 3</MDBNavLink>
      </MDBNav>
    </MDBCol>

    <MDBCol>
      <MDBNav color="amber" class="flex-column font-weight-bold">
        <MDBNavLink active href="#!" class="dark-grey-text">Active</MDBNavLink>
        <MDBNavLink href="#!" class="dark-grey-text">Link 1</MDBNavLink>
        <MDBNavLink href="#!" class="dark-grey-text">Link 2</MDBNavLink>
        <MDBNavLink href="#!" class="dark-grey-text">Link 3</MDBNavLink>
      </MDBNav>
    </MDBCol>

    <MDBCol>
      <MDBNav color="cyan" class="flex-column font-weight-bold">
        <MDBNavLink active href="#!" class="indigo-text">Active</MDBNavLink>
        <MDBNavLink href="#!">Link 1</MDBNavLink>
        <MDBNavLink href="#!">Link 2</MDBNavLink>
        <MDBNavLink href="#!">Link 3</MDBNavLink>
      </MDBNav>
    </MDBCol>
  </MDBRow>
</MDBContainer>
