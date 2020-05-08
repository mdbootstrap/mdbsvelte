<script>
  import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbsvelte";
</script>
<MDBDropdown dropleft>
  <MDBDropdownToggle caret color="primary">
    Dropleft
  </MDBDropdownToggle>
  <MDBDropdownMenu>
    <MDBDropdownItem>Action</MDBDropdownItem>
    <MDBDropdownItem>Another Action</MDBDropdownItem>
    <MDBDropdownItem>Something else here</MDBDropdownItem>
    <MDBDropdownItem divider />
    <MDBDropdownItem>Separated link</MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>
