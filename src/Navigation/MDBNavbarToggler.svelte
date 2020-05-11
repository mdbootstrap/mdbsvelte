<script>

  import {clean, clsx} from '../utils/utils';

  import MDBBtn from '../Btn/MDBBtn.svelte';

  let className = '';
  export {className as class};

  const props = clean($$props);
  let classes;
  $: classes = clsx(className, 'navbar-toggler');
</script>

<MDBBtn {...props} on:click class={classes}>
  <slot>
    <span class="navbar-toggler-icon"/>
  </slot>
</MDBBtn>
