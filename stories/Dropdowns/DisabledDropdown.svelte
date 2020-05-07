<script>
  import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "../../src/index";
</script>
<MDBDropdown>
  <MDBDropdownToggle caret color="primary">
    MDBDropdown
  </MDBDropdownToggle>
  <MDBDropdownMenu>
    <MDBDropdownItem>Regular link</MDBDropdownItem>
    <MDBDropdownItem disabled href="#">
      Disabled link
    </MDBDropdownItem>
    <MDBDropdownItem href="#">Another link</MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>
