<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  export let flush = false;

  const props = clean($$props);

  $: classes = clsx(
    className,
    'list-group',
    flush ? 'list-group-flush' : false
  );
</script>

<ul use:forwardEvents {...props} class={classes}>
  <slot/>
</ul>
