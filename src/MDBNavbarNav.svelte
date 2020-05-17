<script>
  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  export let right;
  export let left;
  const props = clean($$props, ["right", "left"]);
  let elementClasses;

  $: elementClasses = clsx(className, 'navbar-nav', {'ml-auto': right, 'mr-auto': left})

</script>

<ul use:forwardEvents {...props} class={elementClasses}>
  <slot/>
</ul>
