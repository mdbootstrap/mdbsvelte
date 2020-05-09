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

  $: classes = clsx(className, {
    'fas': fas | !type & !fab & !far |type === "fas",
    'fab': fab | type === "fab",
    'fa': far | type === "far"
  }, icon ? `fa-${icon}` : null, size ? `fa-${size}` : null);

</script>

<i {...props} class={classes}>
  <slot/>
</i>
