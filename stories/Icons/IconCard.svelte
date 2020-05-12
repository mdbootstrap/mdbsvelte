<script>
  import MDBIcon from "../../src/MDBIcon.svelte";
  import MDBRow from "../../src/Layout/MDBRow.svelte";
  import MDBCol from "../../src/Layout/MDBCol.svelte";

  export let size = "1x";
  export let type = "fas";
  export let icon = "500px";
  export let title;
  title = title?title:icon;
</script>
<MDBRow class="text-center">
  <MDBCol md="12">
    <MDBIcon type={type} size={size} icon={icon} />
  </MDBCol>
  <MDBCol md="12" class="h5 mt-2 text-muted">
    {title}
  </MDBCol>
</MDBRow>
