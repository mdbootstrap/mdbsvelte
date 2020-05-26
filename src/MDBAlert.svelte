<script>
  import {fade as fadeTransition} from 'svelte/transition';

  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);


  let className = '';
  export {className as class};
  export let children = undefined;
  export let color = 'success';
  export let closeClassName = '';
  export let closeAriaLabel = 'Close';
  export let isOpen = true;
  export let fade = true;
  export let transition = {duration: fade ? 400 : 0};
  export let dismiss = false;
  export let toggle = () => {
    isOpen = !(isOpen)
  };

  const props = clean($$props, ["color", "children", "dismiss", "toggle", "transition", "isOpen", "fade",
    "fade", "closeClassName", "closeAriaLabel"]);

  $: classes = clsx(className, 'alert', `alert-${color}`, {
    'alert-dismissible': toggle
  });
  $: closeClassNames = clsx('close', closeClassName);
</script>

{#if isOpen}
  <div
    use:forwardEvents {...props}
    transition:fadeTransition={transition}
    class={classes}
    role="alert">
    {#if dismiss}
      <button
        type="button"
        class={closeClassNames}
        aria-label={closeAriaLabel}
        on:click={toggle}>
        <span aria-hidden="true">×</span>
      </button>
    {/if}
    {#if children}
      {children}
    {:else}
      <slot/>
    {/if}
  </div>
{/if}
