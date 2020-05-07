<script>
  import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "../../src/index";
</script>
<MDBContainer className="mt-5 text-center">
  <MDBRow>
    <MDBCol>
      <MDBJumbotron>
        <h2 className="h1 display-3">Hello, world!</h2>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typgraphy and spacing to space content out
          within the larger container.
        </p>
        <p className="lead">
          <MDBBtn color="primary">Learn More</MDBBtn>
        </p>
      </MDBJumbotron>
    </MDBCol>
  </MDBRow>
</MDBContainer>
