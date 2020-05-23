<script>

  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);

  let className = '';
  export {className as class};
  export let left;
  export let right;

  const props = clean($$props, "left", "right");
  let classes;
  $: classes = clsx(
    {
      'navbar-toggler-right': right,
      'navbar-toggler-left': left
    },
    'navbar-toggler',
    className
  );
</script>

<button {...props} on:click class={classes}>
  <slot>
    <span class="navbar-toggler-icon"/>
  </slot>
</button>
