<script>
  import clsx from 'clsx';
  import { clean } from '../utils';

  let className = '';
  export { className as class };

  export let tag = 'div';

  const props = clean($$props);

  $: classes = clsx(className, 'card-header');
</script>

{#if tag === 'h3'}
  <h3 {...props}  class={classes} on:click>
    <slot />
  </h3>
{:else}
  <div {...props}  class={classes} on:click>
    <slot />
  </div>
{/if}
