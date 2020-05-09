<script>
  import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbsvelte';
</script>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p class="h5 text-center mb-4">Sign up</p>
        <div class="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                    success="right"/>
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                    success="right"/>
          <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                    error="wrong" success="right"/>
          <MDBInput label="Your password" icon="lock" group type="password" validate/>
        </div>
        <div class="text-center">
          <MDBBtn color="primary">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
    <MDBCol md="6">
      <form>
        <p class="h4 text-center mb-4">Sign up</p>
        <label for="defaultFormRegisterNameEx" class="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" class="form-control" />
        <br />
        <label for="defaultFormRegisterEmailEx" class="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" class="form-control" />
        <br />
        <label for="defaultFormRegisterConfirmEx" class="grey-text">
          Confirm your email
        </label>
        <input type="email" id="defaultFormRegisterConfirmEx" class="form-control" />
        <br />
        <label for="defaultFormRegisterPasswordEx" class="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormRegisterPasswordEx" class="form-control" />
        <div class="text-center mt-4">
          <MDBBtn color="unique" type="submit">
            Register
          </MDBBtn>
        </div>
      </form>
    </MDBCol>

  </MDBRow>
</MDBContainer>
