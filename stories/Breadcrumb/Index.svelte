<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
</script>
<Title title="Breadcrumb">
  <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>
</Title>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
