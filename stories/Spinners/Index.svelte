<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import Growing from "./Growing.svelte";
  import GrowingSource from "!!raw-loader!./Growing.svelte";
  import Size from "./Size.svelte";
  import SizeSource from "!!raw-loader!./Size.svelte";

</script>
<h2 class="primary-heading">Svelte Bootstrap Loader/Spinner</h2>
<h1 class="secondary-heading mb-4">Svelte Loader/Spinner - Bootstrap 4 &amp; Material Design</h1>
<p>React Bootstrap loader is animation that is used to keep visitors entertained while the page is still loading,
  which helps to increase the user experience.</p>
<Example source={BasicSource} title="Basic Example">
  <Basic/>
</Example>
<Example source={GrowingSource} title="Growing Loaders">
  <Growing />
</Example>
<Example source={SizeSource} title="Loader sizing">
  <Size />
</Example>
