<script>
  import Example from '../Example.svelte';
  import Sample from './Sample.svelte';
  import sampleSource from '!!raw-loader!./Sample.svelte';
  import Title from "../Title.svelte";
  import Register from "./Register.svelte";
  import RegisterSource from '!!raw-loader!./Register.svelte';
  import SubscriptionForm from "./SubscriptionForm.svelte";
  import SubscriptionFormSource from '!!raw-loader!./SubscriptionForm.svelte';

</script>

<Title title="Forms">
</Title>

<Example title="Basic Form" source={sampleSource}>
  <Sample/>
</Example>

<Example source={RegisterSource} title="Form Register">
  <Register />
</Example>

<Example title="Subscription Form" source={SubscriptionFormSource}>
  <SubscriptionForm />
</Example>
