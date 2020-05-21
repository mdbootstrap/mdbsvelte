<script>
  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  import MDBIcon from "./MDBIcon.svelte";

  const forwardEvents = forwardEventsBuilder(current_component);


  let className = '';
  export {className as class};
  let elementClasses;
  let childClasses;
  export let color;
  export let active;
  export let activeClassName = 'active';
  export let href = "#";
  export let light;
  export let icon;
  const props = clean($$props, ["color"]);

  $: elementClasses = clsx(className, color, active ? activeClassName : false, 'breadcrumb-item')
  childClasses = clsx(light ? 'white-text' : false);
</script>

<li use:forwardEvents {...props} class={elementClasses} aria-current={active ? 'page' : undefined}>
  {#if icon}
    <MDBIcon far icon={icon} />
  {/if}
  {#if active}
    <slot/>
  {:else}
    <a {href} class={childClasses}><slot /></a>
  {/if}
</li>
