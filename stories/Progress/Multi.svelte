<script>
  import { MDBProgress } from 'mdbsvelte';
</script>

<div class="text-center">Plain</div>
<MDBProgress multi>
  <MDBProgress bar value="15" />
  <MDBProgress bar color="success" value="20" />
  <MDBProgress bar color="info" value="25" />
  <MDBProgress bar color="warning" value="20" />
  <MDBProgress bar color="danger" value="15" />
</MDBProgress>
<div class="text-center">With Labels</div>
<MDBProgress multi>
  <MDBProgress bar value="15">Meh</MDBProgress>
  <MDBProgress bar color="success" value="35">Wow!</MDBProgress>
  <MDBProgress bar color="warning" value="25">25%</MDBProgress>
  <MDBProgress bar color="danger" value="25">LOOK OUT!!</MDBProgress>
</MDBProgress>
<div class="text-center">Stripes and Animations</div>
<MDBProgress multi>
  <MDBProgress bar striped value="15">Stripes</MDBProgress>
  <MDBProgress bar animated color="success" value="30">Animated Stripes</MDBProgress>
  <MDBProgress bar color="info" value="25">Plain</MDBProgress>
</MDBProgress>
