<script>
  import {clean, clsx} from './utils/utils';

  let className = '';
  export {className as class};
  let elementClasses;
  export let color;
  const props = clean($$props, ["color"]);

  $: elementClasses = clsx(className, color)

</script>

<div {...props} class={elementClasses}>
  <slot/>
</div>
