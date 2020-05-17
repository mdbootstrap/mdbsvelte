<script>
  import {getContext} from 'svelte';

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
const context = getContext('dropdownContext');

  let className = '';
  export {className as class};

  export let active = false;
  export let disabled = false;
  export let divider = false;
  export let header = false;
  export let toggle = true;
  export let href = '';

  const props = clean($$props);

  $: classes = clsx(className, {
    disabled,
    'dropdown-item': !divider && !header,
    active: active,
    'dropdown-header': header,
    'dropdown-divider': divider
  });

  function handleItemClick(e) {
    if (disabled || header || divider) {
      e.preventDefault();
      return;
    }

    if (toggle) {
      $context.toggle(e);
    }
  }
</script>

{#if header}
  <h6 use:forwardEvents {...props} on:click={handleItemClick} class={classes}>
    <slot/>
  </h6>

{:else if divider}
  <div use:forwardEvents {...props} on:click={handleItemClick} class={classes}>
    <slot/>
  </div>
{:else if href}
  <a on:use:forwardEvents {...props} on:click={handleItemClick} {href} class={classes}>
    <slot/>
  </a>
{:else}
  <button use:forwardEvents {...props} on:click={handleItemClick} class={classes}>
    <slot/>
  </button>
{/if}
