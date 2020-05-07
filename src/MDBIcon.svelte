<script>
  import clsx from 'clsx';
  import { clean } from './utils';
  let className = '';
  export let icon;
  export { className as class };
  const props = clean($$props, ["size"]);
  $: classes = clsx(className, 'fa', icon?`fa-${icon}`:null);

</script>

<div {...props} class={classes}>
  <slot />
</div>
