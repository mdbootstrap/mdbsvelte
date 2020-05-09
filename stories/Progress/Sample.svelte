<script>
  import { MDBProgress } from 'mdbsvelte';
</script>

<div class="text-center">0%</div>
<MDBProgress />
<div class="text-center">25%</div>
<MDBProgress value="25" />
<div class="text-center">50%</div>
<MDBProgress value={50} />
<div class="text-center">75%</div>
<MDBProgress value={75} />
<div class="text-center">100%</div>
<MDBProgress value="100" />
<div class="text-center">Multiple bars</div>
<MDBProgress multi>
  <MDBProgress bar value="15" />
  <MDBProgress bar color="success" value="30" />
  <MDBProgress bar color="info" value="25" />
  <MDBProgress bar color="warning" value="20" />
  <MDBProgress bar color="danger" value="5" />
</MDBProgress>
