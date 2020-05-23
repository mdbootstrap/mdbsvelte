<script>

  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  let className = '';
  export {className as class};
  export let light = false;
  export let dark = false;
  export let fixed = '';
  export let sticky = '';
  export let color = '';
  export let expand = false;

  const props = clean($$props);

  function getExpandClass(expand) {
    if (expand === false) {
      return false;
    } else if (expand === true || expand === 'xs') {
      return 'navbar-expand';
    }

    return `navbar-expand-${expand}`;
  }

  $: classes = clsx(className, 'navbar', getExpandClass(expand), {
    'navbar-light': light,
    'navbar-dark': dark,
    [`${color}`]: color,
    [`fixed-${fixed}`]: fixed,
    [`sticky-${sticky}`]: sticky
  });
</script>

<nav use:forwardEvents {...props} class={classes}>
  <slot/>
</nav>
