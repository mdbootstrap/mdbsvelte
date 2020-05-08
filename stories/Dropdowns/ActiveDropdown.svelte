<script>
  import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbsvelte";
</script>
<MDBDropdown>
  <MDBDropdownToggle caret color="primary">
    MDBDropdown
  </MDBDropdownToggle>
  <MDBDropdownMenu>
    <MDBDropdownItem>Regular link</MDBDropdownItem>
    <MDBDropdownItem active href="#">
      Acrive link
    </MDBDropdownItem>
    <MDBDropdownItem href="#">Another link</MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>
