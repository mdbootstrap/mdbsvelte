<script>

  import {clean, clsx} from '../utils';

  let className = '';
  export {className as class};

  const props = clean($$props);

  $: classes = clsx(className, 'card-text');
</script>

<p {...props} class={classes}>
  <slot/>
</p>
