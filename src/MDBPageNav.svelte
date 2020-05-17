<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  export let active = false;
  export let disabled = false;
  const props = clean($$props);

  $: classes = clsx(className, 'page-link waves-effect waves-effect', {
    active,
    disabled
  });
</script>

<a use:forwardEvents {...props} class={classes}>
  <slot/>
</a>
