<script>
  import { clean } from './utils';
  import { getColumnSizeClass, isObject } from './utils';

  let className = '';
  export { className as class };
  export let size;

  const props = clean($$props,[]);

  const colClasses = [];

  if(size){
    colClasses.push(`col-${size}`)
  }

  if (!colClasses.length) {
    colClasses.push('col');
  }

  if (className) {
    colClasses.push(className);
  }
</script>

<div {...props} class={colClasses.join(' ')}>
  <slot />
</div>
