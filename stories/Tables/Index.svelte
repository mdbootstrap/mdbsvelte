<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import StripedRowsSource from "!!raw-loader!./StripedRows.svelte";
  import TableHeadOptionsSource from "!!raw-loader!./TableHeadOptions.svelte";
  import BorderedTableSource from "!!raw-loader!./BorderedTable.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import TableHeadOptions from "./TableHeadOptions.svelte";
  import StripedRows from "./StripedRows.svelte";
  import BorderedTable from "./BorderedTable.svelte";
</script>
<Title title="Table">
</Title>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
<Example source={TableHeadOptionsSource} title="Table head options">
  <TableHeadOptions/>
</Example>
<Example source={StripedRowsSource} title="Striped rows" description="<p>Use prop
<code>striped</code> to add zebra-striping to any table row within the
<code><tbl-body></tbl-body></code>.</p>"
>
  <StripedRows/>
</Example>
<Example source={BorderedTableSource} title="Bordered Table" description="<p>Add prop
<code>bordered</code> for borders on all sides of the table and cells.</p>">
  <BorderedTable />
</Example>
