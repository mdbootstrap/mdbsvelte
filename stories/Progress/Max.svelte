<script>
  import { MDBProgress } from 'mdbsvelte';
</script>

<div class="text-center">1 of 5</div>
<MDBProgress value="1" max="5" />
<div class="text-center">50 of 135</div>
<MDBProgress value={50} max="135" />
<div class="text-center">75 of 111</div>
<MDBProgress value={75} max={111} />
<div class="text-center">463 of 500</div>
<MDBProgress value="463" max={500} />

<div class="text-center">Various (40) of 55</div>
<MDBProgress multi>
  <MDBProgress bar value="5" max={55}>5</MDBProgress>
  <MDBProgress bar color="success" value="15" max={55}>15</MDBProgress>
  <MDBProgress bar color="warning" value="10" max={55}>10</MDBProgress>
  <MDBProgress bar color="danger" value="10" max={55}>10</MDBProgress>
</MDBProgress>
