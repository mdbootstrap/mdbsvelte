<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
</script>
<Title title="Footer">
  <div class="description">
    <p>Footer is an additional navigation for the website. It can hold links, company info, copyrights, <a
      href="https://saurav.tech/mdbsvelte/?path=/story/components--buttons">buttons,</a>
      <a href="https://saurav.tech/mdbsvelte/?path=/story/forms--basic-examples"> forms</a>. and many
      other elements.</p>

    <p>You can set the color of the footer by adding one of classes from our
      <a href="https://mdbootstrap.com/docs/react/css/colors/">color palette</a>.</p>

    <p>Just like any other components of MDBootstrap, Footers are responsive by default. </p>
  </div>
</Title>
<Example source={BasicSource}>
  <Basic/>
</Example>
