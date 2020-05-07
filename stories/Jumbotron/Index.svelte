<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import ImageJumbotron from "./ImageJumbotron.svelte";
  import ImageJumbotronSource from "!!raw-loader!./ImageJumbotron.svelte";
  import FluidJumbotron from "./FluidJumbotron.svelte";
  import FluidJumbotronSource from "!!raw-loader!./FluidJumbotron.svelte";
  import WithImage from "./WithImage.svelte";
  import WithImageSource from "!!raw-loader!./WithImage.svelte";
  import ButtonJumbotron from "./ButtonJumbotron.svelte";
  import ButtonJumbotronSource from "!!raw-loader!./ButtonJumbotron.svelte";

</script>
<h2 class="primary-heading">Svelte Bootstrap Jumbotron</h2>
<h1 class="secondary-heading mb-4">Svelte Jumbotron - Bootstrap 4 &amp; Material Design</h1>
<p class="description">React Jumbotron is a responsive component which the main goal is to focus visitor's attention
  or highlight the
  special
  piece of information.</p>
<p>Inside a Jumbotron, you can make use of almost any other Bootstrap code to additionally increase its engagement
  value.</p>
<p>Its flexibility lets you operate with images, enlarged fonts, different background styles, and CTA's.</p>
<p>Jumbotron use examples:</p>
<ul>
  <li>Project presentation</li>
  <li>Article introduction</li>
  <li>Image showcase</li>
</ul>
<p>See a number of Bootstrap Jumbotron examples to familiarize yourself with its design.</p>
<section id="basic">

  <!-- Title -->
  <h2 class="section-heading">
    Basic example
  </h2>

  <!-- Description -->
  <p class="mb-4 pb-3">A lightweight, flexible component that can optionally extend the entire viewport to showcase key
    marketing messages on your site.</p>

  <Example source={BasicSource} textCenter={false}>
    <Basic/>
  </Example>


</section>
<section id="jumbotron-with-a-background-image">
  <h2 class="section-heading">
    Jumbotron with a background image
  </h2>
  <Example source={ImageJumbotronSource}>
    <ImageJumbotron/>
  </Example>
</section>
<h2 class="section-heading">
  Fluid jumbotron
</h2>
<p class="mb-4">To make the jumbotron full width, and without rounded corners, add the <code>fluid</code> prop
  <code>&lt;MDBContainer&gt;</code> or <code>&lt;MDBContainer fluid&gt;</code> within.</p>
<Example source={FluidJumbotronSource} textCenter={false}>
  <FluidJumbotron/>
</Example>
<h2 class="section-heading">
  Jumbotron with image
</h2>
<Example source={WithImageSource}>
  <WithImage/>
</Example>
<h2 class="section-heading">
  Jumbotron with buttons
</h2>
<Example source={ButtonJumbotronSource}>
  <ButtonJumbotron/>
</Example>
