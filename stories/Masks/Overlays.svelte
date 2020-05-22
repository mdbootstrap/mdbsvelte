<script>

  import {MDBMask, MDBView, MDBContainer, MDBRow, MDBCol} from "mdbsvelte";
</script>
<MDBRow>
  <MDBCol md="12" class="p-4">
    <MDBView>
      <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" class="img-fluid" alt="sample image" />
      <MDBMask class="flex-center" overlay="teal-slight" >
        <h2 class="white-text">slight overlay</h2>
      </MDBMask>
    </MDBView>
  </MDBCol>
  <MDBCol md="6" class="p-4">
    <MDBView>
      <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" class="img-fluid" alt="sample image" />
      <MDBMask class="flex-center" overlay="teal-light" >
        <p class="white-text">light overlay</p>
      </MDBMask>
    </MDBView>
  </MDBCol>
  <MDBCol md="6" class="p-4">
    <MDBView>
      <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" class="img-fluid" alt="sample image" />
      <MDBMask class="flex-center" overlay="teal-strong" >
        <p class="white-text">strong overlay</p>
      </MDBMask>
    </MDBView>
  </MDBCol>
</MDBRow>
