<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";

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
