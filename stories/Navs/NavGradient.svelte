<script>

  import {MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol} from "mdbsvelte";

</script>
<MDBContainer>
  <MDBRow>
    <MDBCol size="6">
      <MDBNav color="peach-gradient" class="font-weight-bold py-4 px-2 mb-4">
        <MDBNavLink class="white-text" active href="#!">Active</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 1</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 2</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 3</MDBNavLink>
      </MDBNav>

      <MDBNav color="purple-gradient" class="font-weight-bold py-4 px-2 mb-4">
        <MDBNavLink class="white-text" active href="#!">Active</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 1</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 2</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 3</MDBNavLink>
      </MDBNav>
    </MDBCol>

    <MDBCol size="6">
      <MDBNav color="aqua-gradient" class="font-weight-bold py-4 px-2 mb-4">
        <MDBNavLink class="white-text" active href="#!">Active</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 1</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 2</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 3</MDBNavLink>
      </MDBNav>

      <MDBNav color="blue-gradient" class="font-weight-bold py-4 px-2 mb-4">
        <MDBNavLink class="white-text" active href="#!">Active</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 1</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 2</MDBNavLink>
        <MDBNavLink class="white-text" href="#!">Link 3</MDBNavLink>
      </MDBNav>
    </MDBCol>
  </MDBRow>
</MDBContainer>
