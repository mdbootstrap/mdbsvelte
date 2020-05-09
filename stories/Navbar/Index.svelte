<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import SupportedContent from "./SupportedContent.svelte";
  import SupportedContentSource from "!!raw-loader!./SupportedContent.svelte";
</script>
<Title title="Navbar">
  <p>Bootstrap navbar is a horizontal navigation component which apart from traditional, text links, might embed icons,
    dropdowns, avatars or search forms.</p>
  <p>MDB provides you with stylish Navbars, with distinctive for Material Design details (such as shadows, living
    colors or charming wave effects triggered by clicking on the link). Apart from traditional, text links, Bootstraps
    Navbar
    might embed regular &amp; social icons, dropdowns, avatars or search forms.</p>
</Title>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
<Example source={SupportedContentSource} title="Supported Content">
  <SupportedContent/>
</Example>
