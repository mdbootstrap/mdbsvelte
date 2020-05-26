<script>

  import {clean, clsx, forwardEventsBuilder, getColorClass} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);


  let className = '';
  export {className as class};
  export let children = undefined;
  export let color = 'secondary';
  export let href = undefined;
  export let pill = false;
  export let tag;
  if (tag === "a" && !href) {
    href = "#"
  }

  let badge_colors = ["primary", "secondary", "default", "success", "info", "warning", "danger", "light", "dark"]

  const props = clean($$props, [
    "children",
    "color",
    "href",
    "pill",
    "tag"
  ]);

  $: classes = clsx(
    className,
    'badge',
    badge_colors.includes(color) ? `badge-${color}` : getColorClass(color),
    pill ? 'badge-pill' : false
  );
</script>

{#if href}
  <a use:forwardEvents {...props} {href} class={classes}>
    {#if children}
      {children}
    {:else}
      <slot/>
    {/if}
  </a>
{:else}
  <span use:forwardEvents {...props} class={classes}>
    {#if children}
      {children}
    {:else}
      <slot/>
    {/if}
  </span>
{/if}
