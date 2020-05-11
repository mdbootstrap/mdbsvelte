<script>
  import {clean, clsx ,forwardEventsBuilder} from './utils/utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);



let className = '';
  export {className as class};
  export let color;
  const props = clean($$props, []);
  let elementClasses;
  $: elementClasses = clsx(className, 'page-footer', color)

</script>

<footer use:forwardEvents {...props} class={elementClasses}>
  <slot/>
</footer>
