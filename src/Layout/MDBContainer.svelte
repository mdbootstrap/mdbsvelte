<script>

  import { clean, clsx } from '../utils';
  let className = '';
  export { className as class };
  export let fluid = false;
  export let size;
  const props = clean($$props, ["size"]);
  $: classes = clsx(className, size ? `container-${size}`:fluid ? 'container-fluid' : 'container');

</script>

<div {...props} class={classes}>
  <slot />
</div>
