<script>

  import {clean, clsx} from '../utils';

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

<nav {...props} class={classes}>
  <ul class={listClasses}>
    <slot/>
  </ul>
</nav>
