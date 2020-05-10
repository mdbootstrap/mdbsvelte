<script>
  import {MDBInputGroup, MDBInput, fragment} from 'mdbsvelte';
</script>
<MDBInputGroup class="mt-0 mb-3" material>
  <template use:fragment slot="append">
    <span class="input-group-text md-addon">$</span>
    <span class="input-group-text md-addon">0.00</span>
  </template>
</MDBInputGroup>
<MDBInputGroup class="my-0" material>
  <template use:fragment slot="prepend">
    <span class="input-group-text md-addon">$</span>
    <span class="input-group-text md-addon">0.00</span>
  </template>
</MDBInputGroup>
