<script>

  import {clean, clsx ,forwardEventsBuilder} from '../utils/utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  export let active = false;

  const props = clean($$props);

  $: classes = clsx(className, 'nav-item', active ? 'active' : false);
</script>

<li use:forwardEvents {...props} class={classes}>
  <slot/>
</li>
