<script>
  import clsx from 'clsx';
  import { clean } from './utils';
  let className = '';
  export let icon;
  export { className as class };
  const props = clean($$props, ["size"],["icon"]);
  export let far;
  export let fas;
  let base = far?"fa":"fab";
  base = fas?"fas":base;
  $: classes = clsx(className, base, icon?`fa-${icon}`:null);

</script>

<div {...props} class={classes}>
  <slot />
</div>
