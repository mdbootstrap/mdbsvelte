<script>
  import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbsvelte';
</script>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p class="h5 text-center mb-4">Sign in</p>
        <div class="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                    success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <div class="text-center">
          <MDBBtn>Login</MDBBtn>
        </div>
      </form>
    </MDBCol>

    <MDBCol md="6">
      <form>
        <p class="h4 text-center mb-4">Sign in</p>
        <label for="defaultFormLoginEmailEx" class="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormLoginEmailEx" class="form-control" />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormLoginPasswordEx" class="form-control" />
        <div class="text-center mt-4">
          <MDBBtn color="indigo" type="submit">Login</MDBBtn>
        </div>
      </form>
    </MDBCol>

  </MDBRow>
</MDBContainer>
