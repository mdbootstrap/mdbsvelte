<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import CardGroup from "./CardGroup.svelte";
  import CardGroupSource from "!!raw-loader!./CardGroup.svelte";

</script>
<style>
  .primary-heading {
    font-size: 2.7rem;
    font-weight: 500;
  }
</style>
<h2 class="primary-heading">Svelte Bootstrap Cards</h2>
<h1 class="secondary-heading mb-4">Svelte Cards - Bootstrap 4 &amp; Material Design</h1>
<p>Bootstrap cards are components which display content build of different elements with characteristic shadows,
  depth and hover effects.</p>
<p>It is hard to think of a better way of displaying your content to users other than by cards. Some of the biggest
  players like Facebook or Google are well aware of that, as you might have noticed in almost all their products.</p>
<p>Cards provide you with clarity, clean content categorisation and attractive form of presenting it to the users.</p>
<p>MDB enhances Bootstrap cards with characteristic Material Design features, such as slight shadows, depth,
  cascading or waves effects. Apart from that, it enriches it with additional optional animations, social icons,
  avatars and various other effects not available in a native Bootstrap.</p>
<hr class="my-5">
<Example source={BasicSource}>
  <Basic/>
</Example>

<h2 id="modalCouponSec" class="section-heading mb-4">
  Card groups
</h2>
<Example source={CardGroupSource}>
  <CardGroup />
</Example>
