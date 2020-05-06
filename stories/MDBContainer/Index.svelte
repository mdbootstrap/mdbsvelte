<script>
  import Basic from './Basic.svelte';
  import BasicSource from '!!raw-loader!./Basic.svelte';
  import Example from "../Example.svelte";
</script>
<Example source={BasicSource}>
  <Basic />
</Example>
