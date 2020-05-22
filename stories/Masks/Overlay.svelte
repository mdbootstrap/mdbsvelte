<script>

  import { MDBMask, MDBView, MDBContainer } from "mdbsvelte";
</script>
<MDBContainer class="mt-5">
  <MDBView>
    <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid" alt="sample image" />
    <MDBMask class="flex-center" overlay="green-strong" >
      <p class="white-text">text</p>
    </MDBMask>
  </MDBView>
</MDBContainer>
