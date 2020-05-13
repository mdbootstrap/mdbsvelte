<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import TableHeadPropsSource from "!!raw-loader!./TableHeadProps.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import TableHeadProps from "./TableHeadProps.svelte";
</script>
<Title title="Datatable">
</Title>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
<Example title="Passing Props for Table Head" source={TableHeadPropsSource}
         description="Pass props in table head props in <code>tableHeadProps={'{}'}</code>">
  <TableHeadProps/>
</Example>
