<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils/utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);



let className = '';
  export {className as class};
  export let fluid = false;
  export let tag = 'div';

  const props = clean($$props);

  $: classes = clsx(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false);
</script>

{#if tag === 'section'}
  <section use:forwardEvents {...props} class={classes}>
    <slot/>
  </section>
{:else}
  <div use:forwardEvents {...props} class={classes}>
    <slot/>
  </div>
{/if}
