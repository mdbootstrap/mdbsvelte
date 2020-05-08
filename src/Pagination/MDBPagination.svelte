<script>
  import clsx from 'clsx';
  import { clean } from '../utils';

  let className = '';
  export { className as class };
  export let listClassName = '';
  export let size = '';

  const props = clean($$props);

  $: classes = clsx(className);

  $: listClasses = clsx(listClassName, 'pagination', {
    [`pagination-${size}`]: !!size
  });
</script>

<nav {...props} class={classes}>
  <ul class={listClasses}>
    <slot />
  </ul>
</nav>
