<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import LabelsList from "./LabelsList.svelte";
  import LabelsListSource from "!!raw-loader!./LabelsList.svelte";
  import Linkify from "./Linkify.svelte";
  import LinkifySource from "!!raw-loader!./Linkify.svelte";
  import Disabled from "./Disabled.svelte";
  import DisabledSource from "!!raw-loader!./Disabled.svelte";
  import ColorList from "./ColorList.svelte";
  import ColorListSource from "!!raw-loader!./ColorList.svelte";
  import CustomList from "./CustomList.svelte";
  import CustomListSource from "!!raw-loader!./CustomList.svelte";

</script>
<h2 class="primary-heading">Svelte Bootstrap List Group</h2>
<h1 class="s  econdary-heading mb-4">Svelte List Group - Bootstrap 4 &amp; Material Design</h1>
<p class="description">Svelte Bootstrap list group is a flexible component which displays not only simple list of
  elements but complex custom content.</p>
<hr class="my-5">
<h2 class="secondary-heading mb-3">
  Basic example
</h2>
<Example source={BasicSource} textCenter={false}>
  <Basic/>
</Example>
<h2 class="secondary-heading mb-3">
  Labels
</h2>
<p class="description">Add labels to any list group item to show unread counts, activity, etc.</p>
<Example source={LabelsListSource} textCenter={false}>
  <LabelsList/>
</Example>
<h2 class="secondary-heading mb-3">
  Linked items
</h2>
<p class="description">Linkify list group items using the <code>href</code> prop and an optional <code>active</code>
  prop.
</p>
<Example source={LinkifySource} textCenter={false}>
  <Linkify/>
</Example>
<h2 class="secondary-heading mb-3">
  Links and buttons
</h2>
<div class="description">
  To create actionable list group items with hover or disabled states use appropriate attributes, namely
  <code>disabled</code> .
</div>
<Example source={DisabledSource} textCenter={false}>
  <Disabled />
</Example>
<h2 class="secondary-heading mb-3">
  Contextual classes
</h2>
<p class="description">Use <code>color</code> prop to style list items.</p>
<Example source={ColorListSource} textCenter={false}>
  <ColorList />
</Example>
<h2 class="secondary-heading mb-3">
  Custom content
</h2>
<p class="description">Add nearly any HTML within, even for linked list groups like the one below.</p>
<Example source={CustomListSource} textCenter={false}>
  <CustomList />
</Example>
