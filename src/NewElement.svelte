<script>
  import { clean } from './utils';

  let className = '';
  export { className as class };
  const props = clean($$props, []);
  let elementClasses = [];
  if(className){
    elementClasses.push(elementClasses)
  }

</script>

<ul {...props}  class={elementClasses.join(' ')}>
  <slot />
</ul>
