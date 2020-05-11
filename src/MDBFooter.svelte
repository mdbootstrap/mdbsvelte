<script>
  import {clean, clsx} from './utils/utils';

  let className = '';
  export {className as class};
  export let color;
  const props = clean($$props, []);
  let elementClasses;
  $: elementClasses = clsx(className, 'page-footer', color)

</script>

<footer {...props} class={elementClasses}>
  <slot/>
</footer>
