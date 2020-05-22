<script>
  import {clean, clsx, forwardEventsBuilder, getColorClass} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);


  let className = '';
  export {className as class};
  let elementClasses;
  export let zoom;
  export let cascade;
  export let hover;
  export let rounded;
  export let src;
  export let waves;
  export let fixed;
  const props = clean($$props, ["zoom", cascade, "hover", "rounded", "waves", "src", "fixed"]);

  elementClasses = clsx(
    'view',
    cascade && 'view-cascade',
    className,
    hover && 'overlay',
    rounded && 'rounded',
    waves ? 'Ripple-parent' : false,
    zoom && 'zoom'
  );

  let elementStyle = src
    ? {
      backgroundAttachment: fixed ? 'fixed' : null,
      backgroundImage: `url("${src}")`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh'
    }
    : {}
</script>

<div use:forwardEvents {...props} class={elementClasses} style="{elementStyle}">
  <slot/>
</div>
