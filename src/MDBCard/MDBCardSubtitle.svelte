<script>

  import {clean, clsx} from '../utils/utils';

  let className = '';
  export {className as class};

  const props = clean($$props);

  $: classes = clsx(className, 'card-subtitle');
</script>

<div {...props} class={classes}>
  <slot/>
</div>
