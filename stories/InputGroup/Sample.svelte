<script>
  import {MDBContainer, MDBInputGroup, MDBRow, MDBCol} from 'mdbsvelte';
</script>
<MDBContainer>
  <MDBRow>
    <MDBCol>
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
    </MDBCol>
    <MDBCol>
      <MDBInputGroup material class="mb-3 mt-0" prepend="@" hint="Username"/>
      <MDBInputGroup
        material
        hint="Recipient's username"
        class="mb-3 mt-0"
        append="@example.com"
      />
      <MDBInputGroup
        material
        label="Your vanity URL"
        labelclass="mb-0 ml-2"
        class="mb-3 mt-0"
        prepend="https://example.com/users/"
        id="basic-url-material"
      />
      <MDBInputGroup
        material
        class="mb-3"
        prepend="$"
        append=".00"
      />
      <MDBInputGroup
        material
        class="mb-0"
        prepend="With textarea"
        type="textarea"
      />
    </MDBCol>
  </MDBRow>
</MDBContainer>
