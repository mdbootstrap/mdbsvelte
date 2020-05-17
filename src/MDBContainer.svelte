<script>

  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  let className = '';
  export {className as class};
  export let fluid = false;
  export let size;
  const props = clean($$props, ["size"]);
  $: classes = clsx(className, size ? `container-${size}` : fluid ? 'container-fluid' : 'container');

</script>

<div use:forwardEvents {...props} class={classes}>
  <slot/>
</div>
