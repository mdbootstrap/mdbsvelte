<script>
  import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbsvelte";
</script>
<MDBContainer>
  <MDBRow>
    <MDBCol>
      <MDBJumbotron style="padding: 0">
        <MDBCol class="text-white text-center py-5 px-4 my-5" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)">
          <MDBCol class="py-5">
            <MDBCardTitle class="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
            <p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
            </p>
            <MDBBtn outline color="white" class="mb-5"><MDBIcon icon="clone" class="mr-2"></MDBIcon> View project</MDBBtn>
          </MDBCol>
        </MDBCol>
      </MDBJumbotron>
    </MDBCol>
  </MDBRow>
</MDBContainer>
