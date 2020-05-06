<script>
  import Container from './Container.svelte';
  import Example from '../examples/Example.svelte';
  import ContainerSource from 'raw-loader!./Container.svelte'
  console.log(ContainerSource)
</script>
<Example title="Container" source={ContainerSource}>
  <Container/>
</Example>
