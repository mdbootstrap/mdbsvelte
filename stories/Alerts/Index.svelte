<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import AlertsLink from "./AlertsLink.svelte";
  import AlertsLinkSource from "!!raw-loader!./AlertsLink.svelte";
  import Additional from "./Additional.svelte";
  import AdditionalSource from "!!raw-loader!./Additional.svelte";
  import Dismissing from "./Dismissing.svelte";

</script>
<style>
  :global(.primary-heading) {
    font-size: 2.7rem;
    font-weight: 500;
  }
</style>

<h2 class="primary-heading">Svelte Bootstrap Alerts</h2>
<h1 class="secondary-heading mb-4">Svelte Alerts - Bootstrap 4 &amp; Material Design</h1>
<p>With the right use of colors, they add some emotional weight to our information, ranging from a simple warning to
  critical system failure or from an operation success to a neutral information.</p>
<p>Bootstrap alerts are feedback messages which are displayed after specific actions preceded by the user. Length of the
  text is not limited.</p>
<h2 class="secondary-heading mb-3">
  Basic examples
</h2>
<p class="mb-4">Alerts are available for any length of text, as well as an optional dismiss button. For proper styling,
  use one of the eight contextual props (e.g., <code>color="success"</code>). For inline dismissal, use the <code>dismiss</code>
  prop.</p>
<Example source={BasicSource}>
  <Basic/>
</Example>

<h2 class="section-heading">
  Link color
</h2>

<p class="mb-4">Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any
  alert.</p>
<Example source={AlertsLinkSource}>
  <AlertsLink/>
</Example>
<h2 class="section-heading">
  Additional content
</h2>
<p class="mb-4">Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
<Example source={AdditionalSource}>
  <Additional/>
</Example>
<h2 class="section-heading">
  Dismissing
</h2>
<p class="mb-4">Using the React Alert component, it’s possible to dismiss any alert inline. You can see this in action
  with a live demo:</p>
<Example>
  <Dismissing />
</Example>
