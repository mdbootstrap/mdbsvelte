<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
</script>
<Title title="Datatable">
</Title>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
