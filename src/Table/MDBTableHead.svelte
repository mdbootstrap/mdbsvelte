<script>
  import {clean, clsx} from '../utils/utils';

  let className = '';
  export {className as class};
  const props = clean($$props, []);
  let elementClasses;
  export let color;
  export let textWhite;
  export let columns;

  $: elementClasses = clsx(className, color, {'text-white': textWhite})

</script>

<thead {...props} class={elementClasses}>
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
