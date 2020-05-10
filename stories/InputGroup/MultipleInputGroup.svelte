<script>
  import {MDBInputGroup, MDBInput} from 'mdbsvelte';
</script>
<MDBInputGroup
  material
  class="m-0"
  prepend="First and last name">
  <div slot="input" class="row">
    <MDBInput type="text" class="col" hint="Type sth 1" />
    <MDBInput type="text" class="col" hint="Type sth 2" />
  </div>
</MDBInputGroup>
