<script>
  import Example from '../Example.svelte';

  import Animated from './Animated.svelte';
  import Colors from './Colors.svelte';
  import Labels from './Labels.svelte';
  import Max from './Max.svelte';
  import Multi from './Multi.svelte';
  import Sample from './Sample.svelte';
  import Striped from './Striped.svelte';

  import animatedSource from '!!raw-loader!./Animated.svelte';
  import colorsSource from '!!raw-loader!./Colors.svelte';
  import labelsSource from '!!raw-loader!./Labels.svelte';
  import maxSource from '!!raw-loader!./Max.svelte';
  import multiSource from '!!raw-loader!./Multi.svelte';
  import sampleSource from '!!raw-loader!./Sample.svelte';
  import stripedSource from '!!raw-loader!./Striped.svelte';
  import Title from "../Title.svelte";

</script>

<Title title="Progress Bar">
  <p>React Bootstrap progress bar is a component which displays a progress of a process in which user is involved.
    Their color, shape, and animation can be customized.</p>
  <p>If it takes too long for your website to load up, your user will be less stressed about it when he sees a simple
    progress bar. It means as much as “Everything is fine. The content you want to see will load in a few seconds”</p>
</Title>

<Example title="Sample" source={sampleSource}>
  <Sample />
</Example>

<Example title="Colors" source={colorsSource}>
  <Colors />
</Example>

<Example title="Labels" source={labelsSource}>
  <Labels />
</Example>

<Example title="Striped" source={stripedSource}>
  <Striped />
</Example>

<Example title="Animated" source={animatedSource}>
  <Animated />
</Example>

<Example title="Multi" source={multiSource}>
  <Multi />
</Example>

<Example title="Max" source={maxSource}>
  <Max />
</Example>
