<script>
  import PrismCode from './PrismCode.svelte';

  export let source;
  export let title;
  export let output = true;
  export let textCenter=false;
</script>

<div class="py-3">
  {#if title}
    <h2>{title}</h2>
  {/if}
  <slot name="info"/>
  <div class="border p-3">
    {#if output}
      <div class="output mb-5 {textCenter?'text-center':''}" >
        <slot/>
      </div>
    {/if}
    {#if source}
      <PrismCode class="language-html h-100">{source}</PrismCode>
    {/if}
  </div>
</div>
