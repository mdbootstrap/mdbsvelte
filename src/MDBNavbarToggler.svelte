<script>

  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
import MDBBtn from './MDBBtn.svelte';

  let className = '';
  export {className as class};

  const props = clean($$props);
  let classes;
  $: classes = clsx(className, 'navbar-toggler');
</script>

<MDBBtn {...props} class={classes}>
  <slot>
    <span class="navbar-toggler-icon"/>
  </slot>
</MDBBtn>
