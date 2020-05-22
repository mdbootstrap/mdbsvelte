<script>

  import { MDBMask, MDBView, MDBContainer } from "mdbsvelte";
</script>
<MDBContainer class="mt-5">
  <MDBView>
    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img (132).jpg" class="img-fluid" alt="Image of ballons flying over canyons with mask pattern one." />
    <MDBMask class="flex-center" pattern={8} overlay="red-strong" >
      <p class="white-text">Strong overlay</p>
    </MDBMask>
  </MDBView>
</MDBContainer>
