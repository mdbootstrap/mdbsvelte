<script>
  import clsx from 'clsx';
  import { clean } from '../utils';

  let className = '';
  export { className as class };
  export let active = false;
  export let disabled = false;
  export let href="#";
  const props = clean($$props);

  $: classes = clsx(className, 'page-link waves-effect waves-effect', {
    active,
    disabled
  });
</script>

<a {...props} {href} class={classes}>
  <slot />
</a>
