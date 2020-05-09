<script>
  import { fade as fadeTransition } from 'svelte/transition';

  import { clean, clsx } from './utils';

  let className = '';
  export { className as class };
  export let children = undefined;
  export let color = 'success';
  export let closeClassName = '';
  export let closeAriaLabel = 'Close';
  export let isOpen = true;
  export let fade = true;
  export let transition = { duration: fade ? 400 : 0 };
  export let dismiss=false;

  function toggle() {
    isOpen = false
  }
  const props = clean($$props,["color"]);

  $: classes = clsx(className, 'alert', `alert-${color}`, {
    'alert-dismissible': toggle
  });
  $: closeClassNames = clsx('close', closeClassName);
</script>

{#if isOpen}
  <div
    {...props}
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
      <slot />
    {/if}
  </div>
{/if}
