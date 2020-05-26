<script>

  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  let className = '';
  export {className as class};
  export let top = false;
  export let bottom = false;
  export let src;
  export let alt = '';

  const props = clean($$props, ["alt", "top", "bottom"]);
  let classes;
  $: {
    let cardImgClassName = 'card-img';
    if (top) {
      cardImgClassName = 'card-img-top';
    }
    if (bottom) {
      cardImgClassName = 'card-img-bottom';
    }
    classes = clsx(className, cardImgClassName);
  }
</script>

<img use:forwardEvents {...props} class={classes} {src} {alt}/>
