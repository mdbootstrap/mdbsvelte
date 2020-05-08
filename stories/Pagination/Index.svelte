<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import IconsPage from "./IconsPage.svelte";
  import IconsPageSource from "!!raw-loader!./IconsPage.svelte";
  import Title from "../Title.svelte";
  import StatesPage from "./StatesPage.svelte";
  import StatesPageSource from "!!raw-loader!./StatesPage.svelte";
  import PageSize from "./PageSize.svelte";
  import PageSizeSource from "!!raw-loader!./PageSize.svelte";
  import ShapePage from "./ShapePage.svelte";
  import ShapePageSource from "!!raw-loader!./PageSize.svelte";
  import ColorsPagination from "./ColorsPagination.svelte";
  import ColorsPaginationSource from "!!raw-loader!./ColorsPagination.svelte";

  let description = `<p>React Bootstrap pagination is a component used to indicate existance of a series of related content across
    multiple
    pages and enables navigation across them.</p><p>We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all
    while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the
    number of available links. We use a wrapping <code>&lt;nav&gt;</code> element to identify it as a navigation
    section to screen readers and other assistive technologies.</p>`

</script>
<Title title="Pagination" description={description}/>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
<Example source={IconsPageSource} title="Working with icons"
         description="Looking to use an icon or symbol in place of text for some pagination links?">
  <IconsPage/>
</Example>
<Example source={StatesPageSource}
  title="Disabled and active states" description="<p>Pagination links are customizable for different circumstances. Use <code>disabled</code> prop for links that
    appear un-clickable and <code>active</code> to indicate the current page.</p>">
  <StatesPage/>
</Example>
<Example source={PageSizeSource}
  title="Sizing"
  description="<p>Fancy larger or smaller pagination? Add <code>lg</code> prop or <code>sm</code> for additional sizes.</p>">
  <PageSize />
</Example>
<Example title="Shape"
description="<p>The way pagination 'feels' can be easily altered by changing its style from rectangular to circular.
Simply add <code>circle</code> prop to the <code>&lt;MDBPagination&gt;</code> component.</p>"
  source={ShapePageSource}
>
  <ShapePage />
</Example>
<Example title="Colors" source={ColorsPaginationSource}>
  <ColorsPagination />
</Example>
