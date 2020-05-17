<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  export let noGutters = false;
  export let form = false;
  const props = clean($$props, []);
  let rowClasses = [];
  let position = ["start", "center", "end", "around", "between"];

  for (let pos in position) {
    if (props[position[pos]]) {
      rowClasses.push(`justify-content-${position[pos]}`)
    }
  }

  if (className) {
    rowClasses.push(className)
  }

  if (form) {
    rowClasses.push('form-row')
  } else {
    rowClasses.push('row')
  }

  if (noGutters) {
    rowClasses.push('no-gutters')
  }
</script>

<div use:forwardEvents {...props} class={rowClasses.join(' ')}>
  <slot/>
</div>
