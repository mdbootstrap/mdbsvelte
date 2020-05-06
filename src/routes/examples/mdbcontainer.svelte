<script>
  import MDBContainer from '../../components/MDBContainer.svelte';
  import Example from './Example.svelte';

  let code = `
<MDBContainer class="bg-primary" size="xl" id="234">
  asdfasddfasd
</MDBContainer>
	`

  let description = `
  Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).

While containers can be nested, most layouts do not require a nested container.
  `

</script>
<Example title="Container" source={code} description={description}>
  <MDBContainer class="bg-primary" size="xl" id="234">
    asdfasddfasd
  </MDBContainer>
</Example>
