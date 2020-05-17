<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};


  const props = clean($$props);

  $: classes = clsx(className, 'card-body');
</script>

<div use:forwardEvents {...props} class={classes}>
  <slot/>
</div>
