<script>
  import clsx from 'clsx';
  import { clean } from './utils';
  let className = '';
  export { className as class };
  export let fluid = false;
  export let id = '';
  export let size;
  const props = clean($$props, ["size"]);
  $: classes = clsx(className, size ? `container-${size}`:fluid ? 'container-fluid' : 'container');

  console.log(props)
</script>

<div {...props} {id} class={classes}>
  <slot />
</div>
