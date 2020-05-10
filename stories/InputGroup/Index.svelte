<script>
  import Example from '../Example.svelte';
  import Sample from './Sample.svelte';
  import sampleSource from '!!raw-loader!./Sample.svelte';
  import Title from "../Title.svelte";

</script>

<Title title="Input Group">
</Title>

<Example title="Basic Input" source={sampleSource}>
  <Sample/>
</Example>
