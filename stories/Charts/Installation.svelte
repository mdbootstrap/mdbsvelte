<script>
  import MDBContainer from "../../src/MDBContainer.svelte";
  import MDBRow from "../../src/MDBRow.svelte";
  import MDBCol from "../../src/MDBCol.svelte";
  import Example from "../Example.svelte";
  import MDBBtn from "../../src/MDBBtn.svelte";
  import UsageSource from "!!raw-loader!./Usage.svelte";
  import CustomSizeSource from "!!raw-loader!./CustomSize.svelte";
  import MDBIcon from "../../src/MDBIcon.svelte";

</script>
<MDBContainer>
  <h1 class="primary-heading text-center">svelte-chartjs</h1>
  <h4 class="text-center h4 m-5">This package is separate from mdbsvelte. It's a wrapper of <a
    href="https://www.chartjs.org/"
    target="_blank">chart.js</a>
  <MDBBtn color="dark" size="lg" href="https://github.com/SauravKanchan/svelte-chartjs" target="_blank">
    <MDBIcon fab icon="github" size="2x" class="ml-1"/>
  </MDBBtn>
  </h4>


  <h1 class="h1">Installation</h1>
  <MDBRow>
    <MDBCol>
      <Example source="npm i svelte-chartjs" title="npm"/>
    </MDBCol>
    <MDBCol>
      <Example source="yarn add svelte-chartjs" title="yarn"/>
    </MDBCol>
  </MDBRow>
  <h1 class="h1">Usage</h1>
  <Example source={UsageSource}/>
  <Example title="Custom size"
           source={CustomSizeSource}
           description="In order for Chart.js to obey the custom size you need to set <code>maintainAspectRatio</code> to false, example:"/>
  <h4 class="h4 mt-5 mb-5">Checkout Examples to see detailed usage</h4>
  <MDBBtn href="/?path=/story/charts--examples">Examples</MDBBtn>
</MDBContainer>
