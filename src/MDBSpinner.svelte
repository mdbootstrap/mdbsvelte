<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);



  let className = '';
  export {className as class};
  export let type = 'border';
  export let size = '';
  export let color = '';

  const props = clean($$props);

  $: classes = clsx(
    className,
    size ? `spinner-${type}-${size}` : false,
    `spinner-${type}`,
    color ? `text-${color}` : false
  );
</script>

<div use:forwardEvents {...props} role="status" class={classes}>
  <span class="sr-only">
    <slot>Loading...</slot>
  </span>
</div>
