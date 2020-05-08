<script>
  import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbsvelte";
</script>
<MDBDropdown>
  <MDBDropdownToggle caret color="primary">
    This dropdown&apos;s menu is right-aligned
  </MDBDropdownToggle>
  <MDBDropdownMenu right basic>
    <MDBDropdownItem>Action</MDBDropdownItem>
    <MDBDropdownItem>Another Action</MDBDropdownItem>
    <MDBDropdownItem>Something else here</MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>
