<script>
  import {clean, clsx, forwardEventsBuilder, getColorClass} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);


  let className = '';
  export {className as class};
  let elementClasses;
  export let color;
  export let ariaLabel = 'breadcrumb';
  export let listClasses = 'breadcrumb';
  export let light;
  export let bold;
  const props = clean($$props, ["color", "listClasses", "ariaLabel"]);

  elementClasses = clsx(className);
  listClasses = clsx(listClasses, color ? getColorClass(color) : false, bold && 'font-up-bold',
    light && 'white-text',)

</script>

<nav use:forwardEvents {...props} aria-label={ariaLabel} class={elementClasses}>
  <ol class={listClasses}>
    <slot/>
  </ol>
</nav>
