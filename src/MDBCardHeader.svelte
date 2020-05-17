<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};

  export let tag = 'div';

  const props = clean($$props);

  $: classes = clsx(className, 'card-header');
</script>

{#if tag === 'h3'}
  <h3 use:forwardEvents {...props} class={classes}>
    <slot/>
  </h3>
{:else}
  <div use:forwardEvents {...props} class={classes}>
    <slot/>
  </div>
{/if}
