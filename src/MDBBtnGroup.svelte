<script>
  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  const props = clean($$props, []);
  export let size;
  export let vertical;

  let elementClasses = [vertical ? "btn-group-vertical" : "btn-group"];

  if (className) {
    elementClasses.push(className)
  }

  if (size) {
    elementClasses.push(`btn-group-${size}`)
  }

</script>

<div use:forwardEvents {...props} role="group" class={elementClasses.join(' ')}>
  <slot/>
</div>
