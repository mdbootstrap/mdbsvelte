<script>
  import {getContext} from 'svelte';

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
const context = getContext('dropdownContext');

  let className = '';
  export {className as class};
  export let right = false;

  const props = clean($$props);

  $: classes = clsx(className, 'dropdown-menu', {
    'dropdown-menu-right': right,
    show: $context.isOpen
  });
</script>

<div use:forwardEvents {...props} class={classes}>
  <slot/>
</div>
