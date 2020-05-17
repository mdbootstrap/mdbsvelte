<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  export let href = '';

  const props = clean($$props);

  $: classes = clsx(className, 'card-link');
</script>

<a use:forwardEvents {...props} class={classes} {href}>
  <slot/>
</a>
