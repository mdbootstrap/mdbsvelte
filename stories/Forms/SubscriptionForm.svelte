<script>
  import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon} from 'mdbsvelte';
</script>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p class="h5 text-center mb-4">Subscribe</p>
        <div class="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                    success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                    success="right" />
        </div>
        <div class="text-center">
          <MDBBtn outline color="info">
            Send
            <MDBIcon far icon="paper-plane" class="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
    <MDBCol md="6">
      <form>
        <p class="h4 text-center py-4">Subscribe</p>
        <label for="defaultFormCardNameEx" class="grey-text font-weight-light">
          Your name
        </label>
        <input type="text" id="defaultFormCardNameEx" class="form-control" />
        <br />
        <label for="defaultFormCardEmailEx" class="grey-text font-weight-light">
          Your email
        </label>
        <input type="email" id="defaultFormCardEmailEx" class="form-control" />
        <div class="text-center py-4 mt-3">
          <MDBBtn class="btn btn-outline-purple" type="submit">
            Send
            <MDBIcon far icon="paper-plane" class="ml-2" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
