<script>

  import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbsvelte";


</script>
<MDBFooter color="blue" class="font-small pt-4 mt-4">
  <MDBContainer fluid class="text-center text-md-left">
    <MDBRow>
      <MDBCol md="6">
        <h5 class="title">Footer Content</h5>
        <p>
          Here you can use rows and columns here to organize your footer
          content.
        </p>
      </MDBCol>
      <MDBCol md="3">
        <h5 class="title">Links</h5>
        <ul class="list-unstyled">
          <li class="list-unstyled">
            <a href="#!">Link 1</a>
          </li>
          <li class="list-unstyled">
            <a href="#!">Link 2</a>
          </li>
          <li class="list-unstyled">
            <a href="#!">Link 3</a>
          </li>
          <li class="list-unstyled">
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </MDBCol>
      <MDBCol md="3">
        <h5 class="title">Links</h5>
        <ul class="list-unstyled">
          <li class="list-unstyled">
            <a href="#!">Link 1</a>
          </li>
          <li class="list-unstyled">
            <a href="#!">Link 2</a>
          </li>
          <li class="list-unstyled">
            <a href="#!">Link 3</a>
          </li>
          <li class="list-unstyled">
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <div class="footer-copyright text-center py-3">
    <MDBContainer fluid>
      &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
    </MDBContainer>
  </div>
</MDBFooter>
