<script>
  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  import MDBIcon from "./MDBIcon.svelte";

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
  export let validate;
  export let filled;
  export let gap;
  export let iconSize;

  export let group;
  export let outline;
  export let background;
  export let containerClass;

  export let isNotEmpty;
  export let isControlled;
  export let labelClass;

  placeholder = placeholder ? placeholder : label ? label : hint;

  // eslint-disable-next-line no-unused-vars
  const props = clean($$props, [
    "fas", "fab", "far", "formGroup", "name", "multiple",
    "fab", "fas", "label", "icon", "hint", "placeholder",
    "disabled", "file", "multiple", "validate", "filled",
    "gap", "iconSize", "group", "outline", "backgorund",
    "containerClass", "isNotEmpty", "isControlled", "labelClass"]);

  let classes;
  let tag;
  let labelVisible = false;

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

    let formControlClass = clsx(
      'form-control',
      type === 'select' ? 'custom-select': false
    );

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
      bsSize = size;
      size = undefined;
    }

    classes = clsx(
      className,
      invalid && 'is-invalid',
      valid && 'is-valid',
      bsSize ? `form-control-${bsSize}` : false,
      validate ? 'validate' : false,
      filled ? 'filled-in' : false,
      gap ? 'with-gap' : false,
      type === 'checkbox' ? (gap ? false : 'form-check-input') : false,
      type === 'radio' ? 'form-check-input' : false,
      formControlClass
    );
  }

  let containerClassFix = clsx(
    type === 'checkbox' || type === 'radio'
      ? typeof label === 'boolean' && label
      ? 'd-flex'
      : 'form-check'
      : 'md-form',

    group ? 'form-group' : false,
    size ? `form-${size}` : false,
    outline && 'md-outline',
    background && 'md-bg',
    containerClass
  );

  const labelClassFix = clsx(
    (isNotEmpty && !isControlled) || hint ? 'active' : false,
    disabled ? 'disabled' : false,
    type === 'checkbox' ? 'form-check-label' : false,
    type === 'radio' ? 'form-check-label' : false,
    labelClass
  );

  const handleInput = (event) => {
    value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  };

  function inputFocus() {
    labelVisible = !labelVisible;
  }

</script>
{#if !formGroup}
  <div class={containerClassFix}>
    {#if icon}
      <MDBIcon {fab} {far} {fas} {icon} size={iconSize} class="prefix"/>
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
        placeholder={labelVisible?"":placeholder}
        on:focus={inputFocus}
        on:focusout={inputFocus}
        on:input={handleInput}
        value={value}
      />
    {:else if tag === 'textarea'}
      <textarea
        use:forwardEvents {...props}
        {id}
        class={classes}
        bind:value
        {name}
        {disabled}
        on:focus={inputFocus}
        on:focusout={inputFocus}
      />

    {:else if tag === 'select' && !multiple}
      <select
        use:forwardEvents {...props}
        {id}
        class={classes}
        bind:value
        {name}
        {disabled}
        on:focus={inputFocus}
        on:focusout={inputFocus}
      >
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
        {disabled}
        on:focus={inputFocus}
        on:focusout={inputFocus}
      >
        <slot/>
      </select>
    {/if}
    {#if labelVisible === true}
      <label class="active" for={id}>{label}</label>
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
      placeholder={labelVisible?"":placeholder}
      on:focus={inputFocus}
      on:focusout={inputFocus}
      on:input={handleInput}
      value={value}
    />
  {:else if tag === 'textarea'}
    <textarea
      use:forwardEvents {...props}
      {id}
      class={classes}
      bind:value
      {name}
      {disabled}
      on:focus={inputFocus}
      on:focusout={inputFocus}
    />

  {:else if tag === 'select' && !multiple}
    <select
      use:forwardEvents {...props}
      {id}
      class={classes}
      bind:value
      {name}
      {disabled}
      on:focus={inputFocus}
      on:focusout={inputFocus}
    >
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
      {disabled}
      on:focus={inputFocus}
      on:focusout={inputFocus}
    >
      <slot/>
    </select>
  {/if}
  {#if labelVisible === true && label}
    <label class="active" for={id}>{label}</label>
  {/if}
{/if}
