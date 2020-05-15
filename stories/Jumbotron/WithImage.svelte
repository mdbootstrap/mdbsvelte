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
  } from "mdbsvelte";
</script>
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
                        fab
                  icon="linkedin-in"
                  class="grey-text"
                  size="lg"
                />
              </a>
              <a href="#">
                <MDBIcon
                        fab
                  icon="twitter"
                  class="grey-text"
                  size="lg"
                />
              </a>
              <a href="#">
                <MDBIcon
                        fab
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
