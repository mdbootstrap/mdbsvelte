<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  export let active = false;
  export let disabled = false;
  export let color = '';
  export let action = false;
  export let href = null;
  export let tag = null;

  const props = clean($$props);

  $: classes = clsx(
    className,
    active ? 'active' : false,
    disabled ? 'disabled' : false,
    action ? 'list-group-item-action' : false,
    color ? `list-group-item-${color}` : false,
    'list-group-item'
  );
</script>

{#if href}
  <a use:forwardEvents {...props} class={classes} {href} {disabled} {active}>
    <slot/>
  </a>
{:else if tag === 'button'}
  <button use:forwardEvents {...props} class={classes} type="button" {disabled} {active}>
    <slot/>
  </button>
{:else}
  <li use:forwardEvents {...props} class={classes} {disabled} {active}>
    <slot/>
  </li>
{/if}
