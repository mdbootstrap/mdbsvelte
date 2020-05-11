<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import TableHeadOptionsSource from "!!raw-loader!./TableHeadOptions.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import TableHeadOptions from "./TableHeadOptions.svelte";
</script>
<Title title="Table">
</Title>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
<Example source={TableHeadOptionsSource} title="Table head options">
  <TableHeadOptions />
</Example>
