<script>
  import {clean, clsx} from '../utils/utils';
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
  let slotInput = $$props.$$slots ? $$props.$$slots.input : false;
  let slotAppend = $$props.$$slots ? $$props.$$slots.append : false;
  let slotPrepend = $$props.$$slots ? $$props.$$slots.prepend : false;

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

  {#if slotPrepend}
    <div class="input-group-prepend">
      <slot name="prepend"/>
    </div>
  {/if}



  {#if !slotInput}
    <MDBInput formGroup={true} {id} {type} placeholder={hint}/>
  {:else}
    <slot name="input"/>
  {/if}

  {#if append}
    <div class="input-group-append">
      <span class={childClass}>{append}</span>
    </div>
  {/if}

  {#if slotAppend}
    <div class="input-group-append">
      <slot name="append"/>
    </div>
  {/if}

</div>
