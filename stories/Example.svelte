<script>
  import { Col, Row } from 'sveltestrap';
  import PrismCode from './PrismCode.svelte';
  export let stacked = false;
  export let source;
  export let title;

  console.log($$props.$$slots)
</script>

<div class="py-3">
  {#if title}
    <h2>{title}</h2>
  {/if}
  <slot name="info" />
  <div class="border p-3">
    <Row>
      {#if source}
        <Col xs={stacked ? 12 : undefined}>
          <PrismCode class="language-html h-100">{source}</PrismCode>
        </Col>
      {/if}
      <Col><h2>Output:</h2></Col>
      <Col>
        <slot/>
      </Col>
    </Row>
  </div>
</div>
