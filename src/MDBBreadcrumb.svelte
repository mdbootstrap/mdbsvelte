<script>
  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);


  let className = '';
  export {className as class};
  let elementClasses;
  export let color;
  export let ariaLabel = 'breadcrumb';
  export let listClasses='breadcrumb';
  const props = clean($$props, ["color", "listClasses", "ariaLabel"]);

  $: elementClasses = clsx(className, color)

</script>

<nav use:forwardEvents {...props} aria-label={ariaLabel} class={elementClasses}>
  <ol class={listClasses}>
    <slot/>
  </ol>
</nav>
