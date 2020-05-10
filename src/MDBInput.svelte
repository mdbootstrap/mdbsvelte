<script>
  import MDBRawInput from "./MDBRawInput.svelte";

  export let formGroup;

</script>
{#if !formGroup}
  <div class="md-form">
    <MDBRawInput {...$$props}/>
  </div>
{:else}
  <MDBRawInput {...$$props}/>
{/if}
