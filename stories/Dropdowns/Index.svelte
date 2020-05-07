<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import SplitDropdown from "./SplitDropdown.svelte";
  import SplitDropdownSource from "!!raw-loader!./SplitDropdown.svelte";
  import SizeDropdown from "./SizeDropdown.svelte";
  import SizeDropdownSource from "!!raw-loader!./SizeDropdown.svelte";
  import DropUp from "./DropUp.svelte";
  import DropUpSource from "!!raw-loader!./DropUp.svelte";
  import DropRight from "./DropRight.svelte";
  import DropRightSource from "!!raw-loader!./DropRight.svelte";
  import DropLeft from "./DropLeft.svelte";
  import DropLeftSource from "!!raw-loader!./DropLeft.svelte";
  import AlignmentDropdown from "./AlignmentDropdown.svelte";
  import AlignmentDropdownSource from "!!raw-loader!./AlignmentDropdown.svelte";

</script>
<h2 class="primary-heading">Svelte Bootstrap Dropdowns</h2>
<h1 class="secondary-heading mb-4">Svelte Dropdowns - Bootstrap 4 &amp; Material Design</h1>
<h2 class="section-heading mb-4">Overview</h2>
<hr class="my-5" />
<p>React Bootstrap dropdown is a toggleable menu embedding additional links or content. It allows you to construct advanced navigation and link categorization.</p>
<p>In case of more complicated navigations systems dropdowns are the essential elements providing you with possibility of placing all the most relevant links in our navigation bar (or other component acting as navigation - such as SideNav)
</p>
<p>Aside from being not only highly functional, MDB dropdowns are also extraordinary visually attractive. It gives
  them this characteristic Material Design effects, like shadows, living colors or charming waves effect after
  opening a link. </p>
<p>They’re toggled by clicking, not by hovering; this is an intentional design decision. Why?</p>
<p>MDB is "mobile first" framework so, we avoid mixing functional elements and interaction by hovering because it
  decreases User Experience of users of mobile devices. </p>
<p>Google Material Design guidelines recommend the same approach.</p>
<hr class="my-5" />
<Example source={BasicSource}>
  <Basic />
</Example>
<h2 class="secondary-heading">Split button</h2>
<Example source={SplitDropdownSource}>
  <SplitDropdown />
</Example>

<h2 class="secondary-heading">Sizing</h2>
<p class="description">Button dropdowns work with buttons of all sizes</p>
<Example source={SizeDropdownSource}>
  <SizeDropdown />
</Example>
<h2 class="secondary-heading">Dropup variation</h2>
<p class="description">Trigger dropdown menus above elements by adding <code>dropup</code> prop to the parent.</p>
<Example source={DropUpSource}>
  <DropUp />
</Example>
<h2 class="secondary-heading">Dropright variation</h2>
<p class="description">Trigger dropdown menus on the right side by adding <code>dropright</code> prop to the parent.</p>
<Example source={DropRightSource}>
  <DropRight />
</Example>
<h2 class="secondary-heading">Dropleft variation</h2>
<p class="description">Trigger dropdown menus on the left side by adding <code>dropleft</code> prop to the parent.</p>
<Example source={DropLeftSource}>
  <DropLeft />
</Example>
<h2 class="secondary-heading">Alignment</h2>
<p class="description">By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add <code>right</code> prop to a <code>&lt;MDBDropdownMenu&gt;</code> component to right align the dropdown menu.
</p>
<Example source={AlignmentDropdownSource}>
  <AlignmentDropdown />
</Example>
