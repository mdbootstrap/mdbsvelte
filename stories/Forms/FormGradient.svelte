<script>
  import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody} from 'mdbsvelte';
</script>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6" class="offset-md-3">
      <MDBCard>
        <div class="header pt-3 peach-gradient">
          <MDBRow class="d-flex justify-content-center">
            <h3 class="white-text mb-3 pt-3 font-weight-bold">
              Log in
            </h3>
          </MDBRow>
          <MDBRow class="mt-2 mb-3 d-flex justify-content-center">
            <a href="#!" class="fa-lg p-2 m-2 fb-ic">
              <MDBIcon fab icon="facebook-f" size="lg" class="white-text" />
            </a>
            <a href="#!" class="fa-lg p-2 m-2 tw-ic">
              <MDBIcon fab class="fa-twitter white-text fa-lg" />
            </a>
            <a href="#!" class="fa-lg p-2 m-2 gplus-ic">
              <MDBIcon fab class="fa-google-plus-g white-text fa-lg" />
            </a>
          </MDBRow>
        </div>
        <MDBCardBody class="mx-4 mt-4">
          <MDBInput label="Your email" group type="text" validate />
          <MDBInput
            label="Your password"
            group
            type="password"
            validate
            containerClass="mb-0"
          />
          <p class="font-small grey-text d-flex justify-content-end">
            Forgot
            <a
              href="#!"
              class="dark-grey-text ml-1 font-weight-bold"
            >
              Password?
            </a>
          </p>
          <MDBRow class="d-flex align-items-center mb-4 mt-5">
            <MDBCol md="5" class="d-flex align-items-start">
              <div class="text-center">
                <MDBBtn
                  color="grey"
                  rounded
                  type="button"
                  class="z-depth-1a"
                >
                  Log in
                </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol md="7" class="d-flex justify-content-end">
              <p class="font-small grey-text mt-3">
                Don't have an account?
                <a
                  href="#!"
                  class="dark-grey-text ml-1 font-weight-bold"
                >
                  Sign up
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
