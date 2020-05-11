<script>
  import {clean, clsx} from './utils/utils';

  let className = '';
  export {className as class};
  const props = clean($$props, []);
  let elementClasses;
  export let color;
  export let textWhite;
  $: elementClasses = clsx(className, color, {'text-white': textWhite})

</script>

<thead {...props} class={elementClasses}>
<slot/>
</thead>
