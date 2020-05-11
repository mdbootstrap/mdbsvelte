<script>
  import {getContext} from 'svelte';

  import {clean, clsx} from '../utils/utils';

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

<div {...props} class={classes}>
  <slot/>
</div>
