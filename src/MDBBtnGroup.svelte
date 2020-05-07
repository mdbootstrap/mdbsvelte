<script>
  import { clean } from './utils';
  let className = '';
  const props = clean($$props, []);
  export let size;
  export let vertical;

  let elementClasses = [ vertical?"btn-group-vertical" :"btn-group"];

  if(className){
    elementClasses.push(elementClasses)
  }

  if(size){
    elementClasses.push(`btn-group-${size}`)
  }

</script>

<div {...props} role="group" class={elementClasses.join(' ')}>
  <slot />
</div>
