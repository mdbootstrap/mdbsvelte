<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  export let active = false;
  export let block = false;
  export let children = undefined;
  export let close = false;
  export let color;
  export let disabled = false;
  export let type = "button";
  export let href = '';
  export let outline = false;
  export let size = '';
  export let style = '';
  export let value = '';
  export let gradient;
  let domElement;
  export let rounded;

  if(rounded){
    style="border-radius: 10em"+style
  }

  if (!color) {
    href ? color = "primary" : color = 'default';
  }

  const props = clean($$props, ["color", "gradient", "value", "style", "size"]);


  $: ariaLabel = $$props['aria-label'];

  $: classes = clsx(
    className,
    {close},
    close || 'btn waves-effect waves-light',
    gradient ? `${gradient}-gradient` : close || `btn${outline ? '-outline' : ''}-${color}`,
    size ? `btn-${size}` : false,
    block ? 'btn-block' : false,
    {active},
  );

  $: defaultAriaLabel = close ? 'Close' : null;
</script>

{#if href}
  <a
    use:forwardEvents {...props}
    class={classes}
    {disabled}
    {href}
    aria-label={ariaLabel || defaultAriaLabel}
    {style}>
    {#if children}
      {children}
    {:else}
      <slot/>
    {/if}
  </a>
{:else}
  <button
    use:forwardEvents {...props}
    type={type}
    class={classes}
    {disabled}
    {value}
    aria-label={ariaLabel || defaultAriaLabel}
    {style}
    bind:this={domElement}
  >
    <slot>
      {#if close}
        <span aria-hidden="true">×</span>
      {:else if children}
        {children}
      {:else}
        <slot/>
      {/if}
    </slot>
  </button>
{/if}
