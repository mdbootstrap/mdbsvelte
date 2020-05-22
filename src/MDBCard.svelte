<script>

  import {clean, clsx, forwardEventsBuilder, getColorClass} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  let className = '';
  export {className as class};
  export let body = false;
  export let color = '';

  export let inverse = false;
  export let outline = false;
  export let style = '';

  const props = clean($$props);

  $: classes = clsx(
    className,
    'card',
    inverse ? 'text-white' : false,
    body ? 'card-body' : false,
    (color & outline) ? `border-${color}` : false,
    (color && !outline) ? `${getColorClass(color)}` : false
  );
</script>

<div use:forwardEvents {...props} class={classes} {style}>
  <slot/>
</div>
