<script>
  import {clean, clsx} from './utils/utils';

  let className = '';
  export {className as class};
  const props = clean($$props, []);
  let elementClasses;
  $: elementClasses = clsx(className)

</script>

<div {...props} class={elementClasses}>
  <slot/>
</div>
