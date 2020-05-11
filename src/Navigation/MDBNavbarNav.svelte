<script>
  import {clean, clsx} from '../utils/utils';

  let className = '';
  export {className as class};
  export let right;
  export let left;
  const props = clean($$props, ["right", "left"]);
  let elementClasses;

  $: elementClasses = clsx(className, 'navbar-nav', {'ml-auto': right, 'mr-auto': left})

</script>

<ul {...props} class={elementClasses}>
  <slot/>
</ul>
