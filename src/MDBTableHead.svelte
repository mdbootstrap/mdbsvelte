<script>
  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  const props = clean($$props, []);
  let elementClasses;
  export let color;
  export let textWhite;
  export let columns;

  $: elementClasses = clsx(className, color, {'text-white': textWhite})

</script>

<thead use:forwardEvents {...props} class={elementClasses}>
{#if !columns}
  <slot/>
{:else}
  <tr>
    {#each columns as col}
      <th>{@html col}</th>
    {/each}
  </tr>
{/if}
</thead>
