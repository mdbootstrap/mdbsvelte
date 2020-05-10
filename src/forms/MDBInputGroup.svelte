<script>
  import {clean, clsx} from '../utils';
  import MDBInput from "./MDBInput.svelte";

  let className = '';
  export {className as class};
  export let size = '';
  export let prepend;
  export let hint;
  const props = clean($$props, ["prepend", "hint", "type", "append", "label", "id"]);
  export let type;
  export let append;
  export let label;
  export let id = '';
  export let material;
  export let slotInput;
  let slots = $$props.$$slots;
  slotInput = slots ? slots.input : false;

  $: classes = clsx(
    {'md-form': material},
    className,
    'input-group',
    size ? `input-group-${size}` : null
  );
  $: childClass = clsx(
    'input-group-text',
    {'md-addon': material}
  )
</script>

{#if label}
  <label for="{id}">Your vanity URL</label>
{/if}
<div {...props} class={classes}>
  {#if prepend}
    <div class="input-group-prepend">
      <span class={childClass}>{prepend}</span>
    </div>
  {/if}
  {#if append}
    <div class="input-group-append">
      <span class={childClass}>{append}</span>
    </div>
  {/if}
  {#if !slotInput}
    <MDBInput formGroup={true} {id} {type} placeholder={hint}/>
  {:else}
    <slot name="input"/>
  {/if}
</div>
