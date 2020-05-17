<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  export let listClassName = '';
  export let size = '';
  export let circle;
  export let color = "blue";

  const props = clean($$props, ["color", "circle", "size"]);

  $: classes = clsx(className);

  $: listClasses = clsx(listClassName, 'pagination', `pg-${color}`,
    circle ? 'pagination-circle' : null,
    {
      [`pagination-${size}`]: !!size
    }
  );
</script>

<nav use:forwardEvents {...props} class={classes}>
  <ul class={listClasses}>
    <slot/>
  </ul>
</nav>
