<script>
  import {MDBProgress} from 'mdbsvelte';
</script>

<MDBProgress value="25">25%</MDBProgress>
<MDBProgress value={50}>1/2</MDBProgress>
<MDBProgress value={75}>You're almost there!</MDBProgress>
<MDBProgress color="success" value="100">You did it!</MDBProgress>
<MDBProgress multi>
  <MDBProgress bar value="15">Meh</MDBProgress>
  <MDBProgress bar color="success" value="30">Wow!</MDBProgress>
  <MDBProgress bar color="info" value="25">Cool</MDBProgress>
  <MDBProgress bar color="warning" value="20">20%</MDBProgress>
  <MDBProgress bar color="danger" value="5">!!</MDBProgress>
</MDBProgress>
