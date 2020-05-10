<script>
  import {MDBInputGroup} from 'mdbsvelte';
</script>
<MDBInputGroup class="mb-3" prepend="@" hint="Username"/>
<MDBInputGroup class="mb-3" append="@example.com" hint="Recipient's username"/>
<MDBInputGroup
  label="Your vanity URL"
  class="mb-3"
  prepend="https://example.com/users/"
  id="basic-url"
/>
<MDBInputGroup class="mb-3" prepend="$" append=".00"/>
<MDBInputGroup prepend="With textarea" type="textarea"/>
