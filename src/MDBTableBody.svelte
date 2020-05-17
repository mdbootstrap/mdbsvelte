<script>
  import {clean, clsx ,forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';
  const forwardEvents = forwardEventsBuilder(current_component);
let className = '';
  export {className as class};
  const props = clean($$props, []);
  let elementClasses;
  export let data;
  $: elementClasses = clsx(className)
</script>

<tbody use:forwardEvents {...props} class={elementClasses}>
{#if data}
  {#each data as row}
    <tr>
      {#each Object.keys(row) as cell}
        <td>{@html row[cell]}</td>
      {/each}
    </tr>
  {/each}
{:else}
  <slot/>
{/if}
</tbody>
