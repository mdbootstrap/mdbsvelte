<script>
  import MDBContainer from "../../src/MDBContainer.svelte";
  import MDBRow from "../../src/MDBRow.svelte";
  import MDBCol from "../../src/MDBCol.svelte";
  import Example from "../Example.svelte";
  import MDBView from "../../src/MDBView.svelte";
  import MDBMask from "../../src/MDBMask.svelte";
  import MDBBtn from "../../src/MDBBtn.svelte";
  import MDBIcon from "../../src/MDBIcon.svelte";

  let image = require('./preview.png');
</script>
<MDBContainer>
  <MDBRow>
    <MDBCol md="8" class="mx-auto">
      <img src={image} class="img-fluid" alt="preview"/>
    </MDBCol>
  </MDBRow>
  <div class="text-center">
    <h1 class="primary-heading mt-2">Admin Dashboard</h1>
    <MDBBtn color="dark" href="https://github.com/SauravKanchan/mdbsvelte-dashboard" target="_blank">Github
      <MDBIcon fab icon="github" class="mr-2"/>
    </MDBBtn>
    <MDBBtn color="primary" href="https://mdbsvelte.netlify.app/" target="_blank">Live Preview
      <MDBIcon fas icon="image" class="mr-2"/>
    </MDBBtn>
    <MDBBtn color="danger" href="https://github.com/SauravKanchan/mdbsvelte-dashboard/archive/master.zip">
      Free Download
      <MDBIcon fas icon="download"/>
    </MDBBtn>
    <p class="mt-3">Free, responsive Admin Dashboard svelte template containing different styles of data presentations,
      and numerous insightful components. Built with the newest Bootstrap 4, svelte JS and Material Design. MIT license –
      free for personal and commercial use.</p>
  </div>

</MDBContainer>
