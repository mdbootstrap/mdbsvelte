<script>
  import MDBDropdown from './MDBDropdown.svelte';
  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  let className = '';
  export {className as class};
  export let active = false;
  export let addonType = false;
  export let direction = 'down';
  export let disabled = false;
  export let dropup = false;
  export let group = false;
  export let inNavbar = false;
  export let isOpen = false;
  export let nav = false;
  export let setActiveFromChild = false;
  export let size = '';
  export let toggle = undefined;

  const props = clean($$props, [
    "active",
    "addonType",
    "direction",
    "disabled",
    "dropup",
    "group",
    "inNavbar",
    "isOpen",
    "nav",
    "setActiveFromChild",
    "size",
    "toggle"
  ]);
</script>

<MDBDropdown
  {...props}
  {group}
  class={className}
  {disabled}
  {direction}
  {isOpen}
  {nav}
  {active}
  {addonType}
  {size}
  {toggle}
  {inNavbar}
  {setActiveFromChild}
  {dropup}
>
  <slot/>
</MDBDropdown>
