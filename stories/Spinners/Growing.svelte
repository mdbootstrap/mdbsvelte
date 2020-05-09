<script>
  import {MDBRow, MDBCol, MDBSpinner} from "mdbsvelte";

  const colors = [
    "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"
  ];
</script>
<MDBRow>
  {#each colors as color}
    <MDBCol>
      <MDBSpinner {color} type="grow"/>
    </MDBCol>
  {/each}
</MDBRow>
