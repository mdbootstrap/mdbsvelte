<script>
  import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbsvelte";
</script>
<MDBDropdown dropright>
  <MDBDropdownToggle caret color="primary">
    Dropright
  </MDBDropdownToggle>
  <MDBDropdownMenu>
    <MDBDropdownItem>Action</MDBDropdownItem>
    <MDBDropdownItem>Another Action</MDBDropdownItem>
    <MDBDropdownItem>Something else here</MDBDropdownItem>
    <MDBDropdownItem divider />
    <MDBDropdownItem>Separated link</MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>
