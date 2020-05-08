<script>
  import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbsvelte";
</script>
<MDBDropdown dropup>
  <MDBDropdownToggle caret color="primary">
    Dropup
  </MDBDropdownToggle>
  <MDBDropdownMenu>
    <MDBDropdownItem>Action</MDBDropdownItem>
    <MDBDropdownItem>Another Action</MDBDropdownItem>
    <MDBDropdownItem>Something else here</MDBDropdownItem>
    <MDBDropdownItem divider />
    <MDBDropdownItem>Separated link</MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>
