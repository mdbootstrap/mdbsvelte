<script>
  import clsx from 'clsx';
  import { clean } from './utils';
  let className = '';
  export let icon;
  export { className as class };
  const props = clean($$props, ["size"],["icon"]);
  export let far;
  export let fas;
  export let fab;
  let base = far?"fa":"fas";
  base = fas?"fas":base;
  base = fab?"fab":base;

  $: classes = clsx(className, base, icon?`fa-${icon}`:null);

</script>

<i {...props} class={classes}>
  <slot />
</i>
