<script>
  import { clean, clsx ,forwardEventsBuilder } from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);

  let className = '';
  export { className as class };
  export let size = '';
  export let bordered = false;
  export let borderless = false;
  export let striped = false;
  export let dark = false;
  export let hover = false;
  export let responsive = false;
  export let small;

  const props = clean($$props);

  $: classes = clsx(
    className,
    'table',
    size ? 'table-' + size : false,
    bordered ? 'table-bordered' : false,
    borderless ? 'table-borderless' : false,
    striped ? 'table-striped' : false,
    dark ? 'table-dark' : false,
    hover ? 'table-hover' : false,
    small ? 'table-sm':false
  );

  $: responsiveClassName =
    responsive === true ? 'table-responsive' : `table-responsive-${responsive}`;
</script>

{#if responsive}
  <div class={responsiveClassName}>
    <table use:forwardEvents {...props} class={classes}>
      <slot />
    </table>
  </div>
{:else}
  <table use:forwardEvents {...props} class={classes}>
    <slot />
  </table>
{/if}
