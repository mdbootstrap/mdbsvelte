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
    <Row>
      {#if source}
        <Col xs={stacked ? 12 : undefined}>
          <PrismCode class="language-html h-100">{source}</PrismCode>
        </Col>
      {/if}
      {#if output}
        <Col><h2>Output:</h2></Col>
        <Col>
          <slot/>
        </Col>
      {/if}
    </Row>
  </div>
</div>
