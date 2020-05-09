<script>
  import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbsvelte';
</script>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6" class="offset-md-3">
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
  </MDBRow>
</MDBContainer>
