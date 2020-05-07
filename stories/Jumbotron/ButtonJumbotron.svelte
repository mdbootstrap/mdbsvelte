<script>
  import {
    MDBJumbotron,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle
  } from "../../src/index";
</script>
<MDBContainer class="mt-5 text-center">
  <MDBRow>
    <MDBCol>
      <MDBJumbotron>
        <MDBCardBody>
          <MDBCardTitle class="h2">
            Material Design for Bootstrap
          </MDBCardTitle>
          <p class="blue-text my-4 font-weight-bold">
            Powerful and free Material Design UI KIT
          </p>
          <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            aliquid dolorem ea distinctio exercitationem delectus qui, quas
            eum architecto, amet quasi accusantium, fugit consequatur
            ducimus obcaecati numquam molestias hic itaque accusantium
            doloremque laudantium, totam rem aperiam.
          </MDBCardText>
          <hr class="my-4"/>
          <div class="pt-2">
            <MDBBtn
              color="primary"
              class="waves-effect"
            >
              Buy now
              <MDBIcon far icon="gem"/>
            </MDBBtn>
            <MDBBtn
              outline
              color="primary"
              class="waves-effect"
            >
              Download
              <MDBIcon icon="download"/>
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBJumbotron>
    </MDBCol>
  </MDBRow>
</MDBContainer>
