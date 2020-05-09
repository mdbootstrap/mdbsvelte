<script>
  import {MDBProgress} from 'mdbsvelte';
</script>

<MDBProgress animated value={2 * 5}/>
<MDBProgress animated color="success" value="25"/>
<MDBProgress animated color="info" value={50}/>
<MDBProgress animated color="warning" value={75}/>
<MDBProgress animated color="danger" value="100"/>
<MDBProgress multi>
  <MDBProgress animated bar value="10"/>
  <MDBProgress animated bar color="success" value="30"/>
  <MDBProgress animated bar color="warning" value="20"/>
  <MDBProgress animated bar color="danger" value="20"/>
</MDBProgress>
