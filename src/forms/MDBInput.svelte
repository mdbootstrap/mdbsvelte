<script>
  import MDBRawInput from "./MDBRawInput.svelte";

  export let formGroup;

</script>
{#if !formGroup}
  <div class="md-form">
    <MDBRawInput {...$$props}>
      <slot/>
    </MDBRawInput>
  </div>
{:else}
  <MDBRawInput {...$$props}>
    <slot/>
  </MDBRawInput>
{/if}
