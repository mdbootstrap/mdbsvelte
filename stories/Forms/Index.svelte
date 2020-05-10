<script>
  import Example from '../Example.svelte';
  import Sample from './Sample.svelte';
  import sampleSource from '!!raw-loader!./Sample.svelte';
  import Title from "../Title.svelte";
  import Register from "./Register.svelte";
  import RegisterSource from '!!raw-loader!./Register.svelte';
  import SubscriptionForm from "./SubscriptionForm.svelte";
  import SubscriptionFormSource from '!!raw-loader!./SubscriptionForm.svelte';
  import FormWithCardSource from '!!raw-loader!./FormWithCard.svelte';
  import FormGradientSource from '!!raw-loader!./FormGradient.svelte';
  import FormWithCard from "./FormWithCard.svelte";
  import FormGradient from "./FormGradient.svelte";

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
<Example title="Form With Cards" source={FormWithCardSource}>
  <FormWithCard />
</Example>
<Example title="Form Gradient" source={FormGradientSource}>
  <FormGradient />
</Example>
