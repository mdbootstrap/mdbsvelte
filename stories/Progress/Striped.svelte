<script>
  import {MDBProgress} from 'mdbsvelte';
</script>

<MDBProgress striped value={2 * 5}/>
<MDBProgress striped color="success" value="25"/>
<MDBProgress striped color="info" value={50}/>
<MDBProgress striped color="warning" value={75}/>
<MDBProgress striped color="danger" value="100"/>
<MDBProgress multi>
  <MDBProgress striped bar value="10"/>
  <MDBProgress striped bar color="success" value="30"/>
  <MDBProgress striped bar color="warning" value="20"/>
  <MDBProgress striped bar color="danger" value="20"/>
</MDBProgress>
