<script>
  import {clean, clsx ,forwardEventsBuilder, getColorClass} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);



  let className = '';
  export {className as class};
  let elementClasses;
  export let color;
  const props = clean($$props, ["color"]);

  $: elementClasses = clsx(className, getColorClass(color))

</script>

<div use:forwardEvents {...props} class={elementClasses}>
  <slot/>
</div>
