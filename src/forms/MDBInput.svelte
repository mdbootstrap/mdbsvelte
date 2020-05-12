<script>
  import {clean, clsx, forwardEventsBuilder} from '../utils/utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  import MDBIcon from "../MDBIcon.svelte";

  let className = '';
  export {className as class};

  export let formGroup;
  export let type = 'text';
  export let size = undefined;
  export let bsSize = undefined;
  export let color = undefined;
  export let checked = false;
  export let valid = false;
  export let invalid = false;
  export let plaintext = false;
  export let addon = false;
  export let value = '';
  export let files = '';
  export let readonly;
  export let multiple = false;
  export let id = '';
  export let name = '';
  export let placeholder = '';
  export let disabled = false;
  export let far;
  export let fas;
  export let fab;
  export let icon;
  export let label;
  export let hint;
  placeholder = placeholder ? placeholder : label ? label : hint;

  // eslint-disable-next-line no-unused-vars
  const props = clean($$props, ["fas", "fab", "far", "formGroup", "name", "multiple",
    "fab", "fas", "label", "icon", "hint", "placeholder", "disabled", "file", "multiple"]);

  let classes;
  let tag;
  $: {
    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    const isNotaNumber = new RegExp('\\D', 'g');

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const rangeInput = type === 'range';
    const selectInput = type === 'select';
    const buttonInput = type === 'button' || type === 'reset' || type === 'submit';
    const unsupportedInput = type === 'hidden' || type === 'image';
    tag = selectInput || textareaInput ? type : 'input';

    let formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = `${formControlClass}-plaintext`;
      tag = 'input';
    } else if (fileInput) {
      formControlClass = `${formControlClass}-file`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    } else if (buttonInput) {
      formControlClass = `btn btn-${color || 'secondary'}`;
    } else if (rangeInput) {
      formControlClass = 'form-control-range';
    } else if (unsupportedInput) {
      formControlClass = '';
    }

    if (size && isNotaNumber.test(size)) {
      console.warn(
        'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
      );
      bsSize = size;
      size = undefined;
    }

    classes = clsx(
      className,
      invalid && 'is-invalid',
      valid && 'is-valid',
      bsSize ? `form-control-${bsSize}` : false,
      formControlClass
    );
  }

  const handleInput = (event) => {
    value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  };
</script>
{#if !formGroup}
  <div class="md-form">
    {#if icon}
      <MDBIcon {fab} {far} {fas} icon={icon} class="prefix"/>
    {/if}
    {#if tag === 'input'}
      <input
        use:forwardEvents {...props}
        {id}
        {type}
        {readonly}
        class={classes}
        {name}
        {disabled}
        {placeholder}
        on:input={handleInput}
      />
    {:else if tag === 'textarea'}
      <textarea
        use:forwardEvents {...props}
        {id}
        class={classes}
        bind:value
        {name}
        {disabled}/>

    {:else if tag === 'select' && !multiple}
      <select
        use:forwardEvents {...props}
        {id}
        class={classes}
        bind:value
        {name}
        {disabled}>
        <slot/>
      </select>

    {:else if tag === 'select' && multiple}
      <select
        use:forwardEvents {...props}
        {id}
        multiple
        class={classes}
        bind:value
        {name}
        {disabled}>
        <slot/>
      </select>
    {/if}

  </div>
{:else}
  {#if icon}
    <MDBIcon {fab} {far} {fas} icon={icon} class="prefix"/>
  {/if}
  {#if tag === 'input'}
    <input
      use:forwardEvents {...props}
      {id}
      {type}
      {readonly}
      class={classes}
      {name}
      {disabled}
      {placeholder}
      on:input={handleInput}
    />
  {:else if tag === 'textarea'}
    <textarea
      use:forwardEvents {...props}
      {id}
      class={classes}
      bind:value
      {name}
      {disabled}/>

  {:else if tag === 'select' && !multiple}
    <select
      use:forwardEvents {...props}
      {id}
      class={classes}
      bind:value
      {name}
      {disabled}>
      <slot/>
    </select>

  {:else if tag === 'select' && multiple}
    <select
      use:forwardEvents {...props}
      {id}
      multiple
      class={classes}
      bind:value
      {name}
      {disabled}>
      <slot/>
    </select>
  {/if}

{/if}
