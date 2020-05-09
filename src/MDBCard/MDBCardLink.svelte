<script>

  import {clean, clsx} from '../utils';

  let className = '';
  export {className as class};
  export let href = '';

  const props = clean($$props);

  $: classes = clsx(className, 'card-link');
</script>

<a {...props} class={classes} {href}>
  <slot/>
</a>
