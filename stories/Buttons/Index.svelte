<script>
  import Example from "../Example.svelte";

  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import AdditionalStyles from "./AdditionalStyles.svelte";
  import AdditionalStylesSource from "!!raw-loader!./AdditionalStyles.svelte";

  let grad = "Gradient.svelte";
  import Gradient from "./Gradient.svelte";
  import GradientSource from "!!raw-loader!./Gradient.svelte";
  import Outline from "./Outline.svelte";
  import OutlineSource from "!!raw-loader!./Outline.svelte";
  import ButtonIcon from "./ButtonIcon.svelte";
  import ButtonIconSource from "!!raw-loader!./ButtonIcon.svelte";

</script>
<h2 class="primary-heading">React Bootstrap Buttons</h2>
<h1 class="secondary-heading mb-4">React Buttons - Bootstrap 4 &amp; Material Design</h1>
<p>React Bootstrap buttons are components which are triggering a desirable user interaction. Easy to customize in
  terms of size, shape, and color.</p>

<h2 class="secondary-heading">Basic examples</h2>
<p>
  Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras
  thrown in for more control.
</p>
<Example source={BasicSource}>
  <Basic/>
</Example>
<h2 class="secondary-heading">Additional styles</h2>
<p>
  MDBootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras
  thrown in for more control.
</p>
<Example source={AdditionalStylesSource}>
  <AdditionalStyles/>
</Example>
<h2 class="secondary-heading">Gradient buttons</h2>
<p>
  Check our documentation about <a href="https://mdbootstrap.com/docs/react/css/gradients/">gradients</a>.
</p>

<Example source={GradientSource}>
  <Gradient/>
</Example>

<h2 class="secondary-heading">Outline buttons</h2>

<p>
  In need of a button, but not the hefty background colors they bring? <code>outline</code> property removes all
  background images and colors on any button.
</p>
<Example source={OutlineSource}>
  <Outline />
</Example>
<h2 class="secondary-heading">Buttons with icons</h2>
<Example source={ButtonIconSource}>
  <ButtonIcon />
</Example>
