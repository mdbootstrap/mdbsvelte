<script>
  import {clean, clsx ,forwardEventsBuilder} from './utils/utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);



  let className = '';
  export {className as class};
  let elementClasses;
  export let color;
  const props = clean($$props, ["color"]);

  $: elementClasses = clsx(className, color)

</script>

<div use:forwardEvents {...props} class={elementClasses}>
  <slot/>
</div>
