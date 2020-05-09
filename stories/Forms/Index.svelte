<script>
  import Example from '../Example.svelte';
  import Sample from './Sample.svelte';
  import sampleSource from '!!raw-loader!./Sample.svelte';
  import Title from "../Title.svelte";

</script>

<Title title="Forms">
</Title>

<Example title="Basic Form" source={sampleSource}>
  <Sample/>
</Example>
