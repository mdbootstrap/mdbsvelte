<script>
  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);


  let className = '';
  export {className as class};
  let elementClasses;
  export let color;
  export let active;
  export let activeClassName = 'active';
  export let href="#";
  const props = clean($$props, ["color"]);

  $: elementClasses = clsx(className, color, active ? activeClassName : false, 'breadcrumb-item')

</script>

<li use:forwardEvents {...props} class={elementClasses} aria-current={active ? 'page' : undefined}>
  {#if active}
    <slot/>
  {:else}
    <a {href}><slot /></a>
  {/if}
</li>
