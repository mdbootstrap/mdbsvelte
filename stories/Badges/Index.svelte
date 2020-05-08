<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import Counter from "./Counter.svelte";
  import CounterSource from "!!raw-loader!./Counter.svelte";
  import Contextual from "./Contextual.svelte";
  import ContextualSource from "!!raw-loader!./Contextual.svelte";
  import Pill from "./Pill.svelte";
  import PillSource from "!!raw-loader!./Pill.svelte";
  import LinkBadge from "./LinkBadge.svelte";
  import LinkBadgeSource from "!!raw-loader!./LinkBadge.svelte";
  import IconsBadge from "./IconsBadge.svelte";
  import IconsBadgeSource from "!!raw-loader!./IconsBadge.svelte";

</script>
<h2 class="primary-heading">Svelte Bootstrap Tags, Labels &amp; Badges</h2>
<h1 class="secondary-heading mb-4">Svelte Tags, Labels &amp; Badges - Bootstrap 4 &amp; Material Design</h1>
<p>React Bootstrap tags are components which separate content placed in the same wrapper, but in the separate pane.
  Only one pane can be displayed at the time.</p>
<p>Their main goal is to provide your visitors with an intuitive way of getting what they want. Just consider, how
  convenient it is to find all the articles related to web development just by using <span class="badge badge-success">
      web
      development</span> tag.</p>
<h2 class="secondary-heading mb-3">
  Basic example
</h2>
<p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code>
  units.</p>
<Example source={BasicSource}>
  <Basic/>
</Example>
<p class="my-4 py-2">Badges can be used as part of links or buttons to provide a counter.</p>
<Example source={CounterSource}>
  <Counter />
</Example>

<h2 class="section-heading">
  Contextual variations
</h2>
<p class="mb-4">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
<Example source={ContextualSource}>
  <Contextual />
</Example>
<h2 class="section-heading">
  Pill badges
</h2>
<p class="mb-4">Use the <code>pill</code> prop to make badges more rounded (with a larger <code>border-radius</code>
  and additional horizontal <code>padding</code>).</p>
<Example source={PillSource}>
  <Pill />
</Example>
<h2 class="section-heading">
  Links
</h2>
<p class="mb-4">Using the contextual badges with an <code>&lt;a&gt;</code> tag quickly provide <em>actionable</em>
  badges with hover and focus states.</p>
<Example source={LinkBadgeSource}>
  <LinkBadge />
</Example>
<h2 class="section-heading pb-2">
  Badges with icons
</h2>
<Example source={IconsBadgeSource}>
  <IconsBadge />
</Example>
