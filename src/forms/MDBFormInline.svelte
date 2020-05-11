<script>
  import {clean, clsx} from '../utils/utils';

  let className = '';
  export {className as class};
  const props = clean($$props, []);
  let elementClasses;
  $: elementClasses = clsx(className, 'form-inline')

</script>

<form {...props} class={elementClasses}>
  <slot/>
</form>
