<script>

  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  let className = '';
  export {className as class};
  export let active = false;
  export let activeClassName='active' ;

  const props = clean($$props);

  $: classes = clsx(className, 'nav-item', active ? activeClassName : false);
</script>

<li use:forwardEvents {...props} class={classes}>
  <slot/>
</li>
