<script>

  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  let className = '';
  export {className as class};
  export let disabled = false;
  export let active = false;
  export let href = '#';
  export let activeClassName = "active";
  const props = clean($$props);

  $: classes = clsx(className, 'nav-link', {disabled}, active ? activeClassName : false);

  function handleClick(e) {
    if (disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }

    if (href === '#') {
      e.preventDefault();
    }
  }
</script>

<a use:forwardEvents {...props} {href} on:click={handleClick} class={classes}>
  <slot/>
</a>
