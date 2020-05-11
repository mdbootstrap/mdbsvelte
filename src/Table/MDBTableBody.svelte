<script>
  import {clean, clsx} from '../utils/utils';

  let className = '';
  export {className as class};
  const props = clean($$props, []);
  let elementClasses;
  export let data;
  $: elementClasses = clsx(className)

</script>

<tbody {...props} class={elementClasses}>
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
