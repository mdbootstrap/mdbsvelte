<script>
  import {
    MDBJumbotron,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCardTitle,
    MDBCardImage,
    MDBCardBody,
    MDBCardText
  } from "../../src/index";
</script>
<MDBJumbotron fluid>
  <MDBContainer>
    <h2 class="display-4">Fluid jumbotron</h2>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </MDBContainer>
</MDBJumbotron>
<MDBContainer class="mt-5 text-center">
  <MDBRow>
    <MDBCol>
      <MDBJumbotron class="text-center">
        <MDBCardTitle class="card-title h4 pb-2">
          <strong>My adventure</strong>
        </MDBCardTitle>

        <MDBCardImage
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
          class="img-fluid"
        />
        <MDBCardBody>
          <MDBCardTitle class="indigo-text h5 m-4">
            Photography
          </MDBCardTitle>
          <MDBCardText>
            Sed ut perspiciatis unde omnis iste natus sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </MDBCardText>

          <MDBCol class="d-flex justify-content-center mt-4" md="12">
            <MDBCol md="3" class="d-flex justify-content-around">
              <a href="#">
                <MDBIcon
                  icon="linkedin-in"
                  class="grey-text"
                  size="lg"
                />
              </a>
              <a href="#">
                <MDBIcon
                  icon="twitter"
                  class="grey-text"
                  size="lg"
                />
              </a>
              <a href="#">
                <MDBIcon
                  icon="facebook-f"
                  class="grey-text"
                  size="lg"
                />
              </a>
            </MDBCol>
          </MDBCol>

        </MDBCardBody>
      </MDBJumbotron>
    </MDBCol>
  </MDBRow>
</MDBContainer>
