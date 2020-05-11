<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import StripedRowsSource from "!!raw-loader!./StripedRows.svelte";
  import TableHeadOptionsSource from "!!raw-loader!./TableHeadOptions.svelte";
  import BorderedTableSource from "!!raw-loader!./BorderedTable.svelte";
  import HoverableTableSource from "!!raw-loader!./HoverableTable.svelte";
  import SmallTableSource from "!!raw-loader!./SmallTable.svelte";
  import CaptionsSource from "!!raw-loader!./Captions.svelte";
  import BorderLessSource from "!!raw-loader!./BorderLess.svelte";
  import ResponsiveTableSource from "!!raw-loader!./ResponsiveTable.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import TableHeadOptions from "./TableHeadOptions.svelte";
  import StripedRows from "./StripedRows.svelte";
  import BorderedTable from "./BorderedTable.svelte";
  import HoverableTable from "./HoverableTable.svelte";
  import SmallTable from "./SmallTable.svelte";
  import Captions from "./Captions.svelte";
  import BorderLess from "./BorderLess.svelte";
  import ResponsiveTable from "./ResponsiveTable.svelte";
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
  <BorderedTable/>
</Example>
<Example source={HoverableTableSource} title="Hoverable rows"
         description="Add prop hover to enable a <code>hover</code> state on table rows.">
  <HoverableTable/>
</Example>
<Example source={SmallTableSource} title="Small Table"
         description="Add prop <code>small</code> to make tables more compact by cutting cell padding in half.">
  <SmallTable/>
</Example>
<Example source={CaptionsSource} title="Captions"
         description="<code>caption</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.">
  <Captions/>
</Example>
<Example source={BorderLessSource} title="Borderless"
         description="Add prop <code>borderless</code> for a table without borders.">
  <BorderLess/>
</Example>
<Example source={ResponsiveTableSource} title="Responsive Table"
         description="Create responsive table by adding prop <code>responsive</code> to make them scroll horizontally on small
         devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.">
  <ResponsiveTable/>
</Example>
