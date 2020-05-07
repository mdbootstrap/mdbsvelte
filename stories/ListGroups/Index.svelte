<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";

</script>
<h2 class="primary-heading">Svelte Bootstrap List Group</h2>
<h1 class="s  econdary-heading mb-4">Svelte List Group - Bootstrap 4 &amp; Material Design</h1>
<p class="description">React Bootstrap list group is a flexible component which displays not only simple list of
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
