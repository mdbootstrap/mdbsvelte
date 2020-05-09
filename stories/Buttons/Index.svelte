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
  import LinkButton from "./LinkButton.svelte";
  import LinkButtonSource from "!!raw-loader!./LinkButton.svelte";
  import SizeButton from "./SizeButton.svelte";
  import SizeButtonSource from "!!raw-loader!./SizeButton.svelte";
  import ActiveState from "./ActiveState.svelte";
  import ActiveStateSource from "!!raw-loader!./ActiveState.svelte";
  import DisabledButton from "./DisabledButton.svelte";
  import DisabledButtonSource from "!!raw-loader!./DisabledButton.svelte";


</script>
<h2 class="primary-heading">Svelte Bootstrap Buttons</h2>
<h1 class="secondary-heading mb-4">Svelte Buttons - Bootstrap 4 &amp; Material Design</h1>
<p>Svelte Bootstrap buttons are components which are triggering a desirable user interaction. Easy to customize in
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
  Check our documentation about <a href="https://mdbootstrap.com/docs/Svelte/css/gradients/">gradients</a>.
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
  <Outline/>
</Example>
<h2 class="secondary-heading">Buttons with icons</h2>
<Example source={ButtonIconSource}>
  <ButtonIcon/>
</Example>
<h2 class="secondary-heading">Buttons as link</h2>
<p>
  In order to use links styled as button just use MDBButton component with <code>href</code> property.
</p>
<Example source={LinkButtonSource}>
  <LinkButton/>
</Example>
<h2 class="secondary-heading">Sizes</h2>
<p class="description">Fancy larger or smaller buttons? Add <code>size</code> property for
  additional sizes.</p>

<Example source={SizeButtonSource}>
  <SizeButton/>
</Example>
<h2 class="secondary-heading">Active state</h2>
<p class="description">Buttons will appear pressed (with a darker background, darker border, and inset shadow) when
  active. You can force the same active appearance with <code>active</code> prop.</p>
<Example source={ActiveStateSource}>
  <ActiveState/>
</Example>
<h2 class="secondary-heading">Disabled state</h2>
<p class="description">Make buttons look inactive by adding the <code>disabled</code> boolean prop to any <code>&lt;MDBBtn&gt;</code>
  component.</p>
<Example source={DisabledButtonSource}>
  <DisabledButton />
</Example>
