<script>

  import {clean, clsx} from './utils';

  let className = '';
  export let icon;
  export {className as class};
  export let size;
  const props = clean($$props, ["size"], ["icon"]);
  export let type;
  export let far;
  export let fas;
  export let fab;
  let base = far|type==="far" ? "fa" : "fas";
  base = fas|type==="fas" ? "fas" : base;
  base = fab|type==="fab" ? "fab" : base;

  $: classes = clsx(className, base, icon ? `fa-${icon}` : null, size ? `fa-${size}` : null);

</script>

<i {...props} class={classes}>
  <slot/>
</i>
