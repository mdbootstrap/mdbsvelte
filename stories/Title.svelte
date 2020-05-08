<script>
  export let title;
  export let description;
</script>
<h2 class="primary-heading">Svelte Bootstrap {title}</h2>
<h1 class="secondary-heading mb-4">Svelte {title} - Bootstrap 4 &amp; Material Design</h1>
{#if description}
  <div>
    {@html description}
  </div>
{/if}
