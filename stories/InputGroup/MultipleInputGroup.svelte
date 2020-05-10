<script>
  import {MDBInputGroup, MDBInput, fragment} from 'mdbsvelte';

</script>
<MDBInputGroup
  material
  class="m-0"
  prepend="First and last name">
  <template use:fragment slot="input">
    <MDBInput type="text" class="col" hint="Type sth 1"/>
    <MDBInput type="text" class="col" hint="Type sth 2"/>
  </template>
</MDBInputGroup>
