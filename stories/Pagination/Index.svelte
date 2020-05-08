<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import IconsPage from "./IconsPage.svelte";
  import IconsPageSource from "!!raw-loader!./IconsPage.svelte";
  import Title from "../Title.svelte";

  let description = `
  <p>React Bootstrap pagination is a component used to indicate existance of a series of related content across
    multiple
    pages and enables navigation across them.</p>
<p>We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all
    while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the
    number of available links. We use a wrapping <code>&lt;nav&gt;</code> element to identify it as a navigation
    section to screen readers and other assistive technologies.</p>
  `

</script>
<Title title="Pagination" description={description}/>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
<Example source={IconsPageSource} title="Working with icons"
         description="Looking to use an icon or symbol in place of text for some pagination links?">
  <IconsPage/>
</Example>
