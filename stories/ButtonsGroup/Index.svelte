<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import Toolbar from "./Toolbar.svelte";
  import ToolbarSource from "!!raw-loader!./Toolbar.svelte";
  import Size from "./Size.svelte";
  import SizeSource from "!!raw-loader!./Size.svelte";
  import Nesting from "./Nesting.svelte";
  import NestingSource from "!!raw-loader!./Nesting.svelte";
  import Vertical from "./Vertical.svelte";
  import VerticalSource from "!!raw-loader!./Vertical.svelte";
  import MultiColored from "./MultiColored.svelte";
  import MultiColoredSource from "!!raw-loader!./MultiColored.svelte";

</script>
<h2 class="primary-heading">Svelte Bootstrap Button group</h2>
<h1 class="secondary-heading mb-4">Svelte Button group - Bootstrap 4 &amp; Material Design</h1>
<p class="mb-5">See the following button groups examples:</p>
<h2 class="section-heading mb-4">
  Basic example
</h2>
<Example source={BasicSource}>
  <Basic />
</Example>
<h2 class="section-heading mb-4">
  Button toolbar
</h2>
<p>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to
  space out groups, buttons, and more.
</p>
<Example source={ToolbarSource}>
  <Toolbar />
</Example>
<h2 class="section-heading mb-4">
  Sizing
</h2>
<p>Instead of applying button sizing classes to every button in a group, just add <code>size</code> prop to each
  <code>&lt;MDBBtnGroup&gt;</code>,
  including each one when nesting multiple groups.
</p>
<Example source={SizeSource}>
  <Size />
</Example>
<h2 class="section-heading mb-4">
  Nesting
</h2>
<p>Place a <code>&lt;MDBBtnGroup&gt;</code> within another <code>&lt;MDBBtnGroup&gt;</code> when you want dropdown
  menus mixed with
  a
  series of buttons.
</p>

<Example source={NestingSource}>
  <Nesting />
</Example>

<h2 class="section-heading mb-4">
  Vertical variation
</h2>

<p>Make a set of buttons appear vertically stacked rather than horizontally.
</p>
<Example source={VerticalSource}>
  <Vertical />
</Example>
<h2 class="section-heading mb-4">
  Multicolored button group
</h2>
<Example source={MultiColoredSource} textCenter={false}>
  <MultiColored />
</Example>
