<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import BoldFontNavsSource from "!!raw-loader!./BoldFontNavs.svelte";
  import NavGradientSource from "!!raw-loader!./NavGradient.svelte";
  import NavPillsSource from "!!raw-loader!./NavPills.svelte";
  import NavTabsSource from "!!raw-loader!./NavGradient.svelte";
  import FillAndJustifySource from "!!raw-loader!./FillAndJustify.svelte";
  import VariousFontsAndSizeSource from "!!raw-loader!./VariousFontsAndSize.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import BoldFontNavs from "./BoldFontNavs.svelte";
  import VariousFontsAndSize from "./VariousFontsAndSize.svelte";
  import NavGradient from "./NavGradient.svelte";
  import NavTabs from "./NavTabs.svelte";
  import NavPills from "./NavPills.svelte";
  import FillAndJustify from "./FillAndJustify.svelte";
</script>
<Title title="Navs">
  <p>Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and
    disabled states. Swap modifier classes to switch between each style.
  </p>
</Title>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
<Example source={BoldFontNavsSource} title="Navs with bold font">
  <BoldFontNavs/>
</Example>
<Example source={VariousFontsAndSizeSource} title="Navs with various font and background color">
  <VariousFontsAndSize/>
</Example>
<Example source={NavGradientSource} title="Navs with gradient background">
  <NavGradient/>
</Example>
<Example source={NavTabsSource} title="Tabs"
         description="<p>Takes the basic nav from above and add the <code>.nav-tabs</code>
         class to generate a tabbed interface.</p>">
  <NavTabs/>
</Example>
<Example source={NavPillsSource} title="Pills" description="Take that same code, but use <code>.nav-pills</code> class instead:">
  <NavPills />
</Example>
<Example source={FillAndJustifySource} title="Fill and justify" description="<p>
    Force your <code>Nav</code>’s contents to extend the full available width one of two modifier classes. To
    proportionately
    fill all available space with your <code>NavItem</code>s, use class <code>.nav-fill</code>. Notice that all
    horizontal space is occupied, but
    not every nav item has the same width.
  </p>">
  <FillAndJustify />
</Example>
