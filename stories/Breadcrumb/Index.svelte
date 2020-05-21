<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import DarkBackgroundSource from "!!raw-loader!./DarkBackground.svelte";
  import BreadcrumsIconsSource from "!!raw-loader!./BreadcrumsIcons.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import DarkBackground from "./DarkBackground.svelte";
  import BreadcrumsIcons from "./BreadcrumsIcons.svelte";
</script>
<Title title="Breadcrumb">
  <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>
</Title>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
<Example title="Breadcrumbs with dark background" source={DarkBackgroundSource}>
  <DarkBackground />
</Example>
<Example title="Breadcrumbs with icons" source={BreadcrumsIconsSource}>
 <BreadcrumsIcons />
</Example>
