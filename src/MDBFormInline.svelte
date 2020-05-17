<script>
  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  const props = clean($$props, []);
  let elementClasses;
  $: elementClasses = clsx(className, 'form-inline')

</script>

<form use:forwardEvents {...props} class={elementClasses}>
  <slot/>
</form>
