<script>
  import PrismCode from './PrismCode.svelte';

  export let source;
  export let title;
  export let output = true;
  export let textCenter = false;
  export let description;
</script>

<div class="py-3">
  {#if title}
    <h2 class="secondary-heading">{title}</h2>
  {/if}
  {#if description}
    <div>
      {@html description}
    </div>
  {/if}
  <slot name="info"/>
  <div class="border p-3">
    {#if output}
      <div class="output {textCenter?'text-center':''}">
        <slot/>
      </div>
    {/if}
    {#if source}
      <div class="mt-3">
        <PrismCode class="language-html h-100">{source}</PrismCode>
      </div>
    {/if}
  </div>
</div>
