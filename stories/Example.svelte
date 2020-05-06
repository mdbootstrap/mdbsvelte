<script>
  import {Col, Row} from 'sveltestrap';
  import PrismCode from './PrismCode.svelte';

  export let stacked = false;
  export let source;
  export let title;
  export let output = true;

</script>

<div class="py-3">
  {#if title}
    <h2>{title}</h2>
  {/if}
  <slot name="info"/>
  <div class="border p-3">
      {#if source}
          <PrismCode class="language-html h-100">{source}</PrismCode>
      {/if}
      {#if output}
        <div class="output" md="12">
          <slot/>
        </div>
      {/if}
  </div>
</div>
