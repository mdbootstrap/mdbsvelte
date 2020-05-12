<script>
  import MDBIcon from "../../src/MDBIcon.svelte";
  export let size = "1x";
  export let type = "fas";
  export let icon = "500px";
  export let title;
  title = title ? title : icon;
</script>
<div class="text-center">
  <MDBIcon type={type} size={size} icon={icon}/>
  <h5 class="w-100 h5 mt-2 text-muted">
    {title}
  </h5>
</div>
