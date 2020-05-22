<script>
  import {clean, clsx, forwardEventsBuilder, getColorClass} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);


  let className = '';
  export {className as class};
  let elementClasses;
  export let pattern;
  export let overlay;
  const props = clean($$props, ["color", "overlay", "pattern"]);

  $: elementClasses = clsx(className, 'mask', pattern && `pattern-${pattern}`, overlay && `rgba-${overlay}`)

</script>

<div use:forwardEvents {...props} class={elementClasses}>
  <slot/>
</div>
