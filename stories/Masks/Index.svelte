<script>
  import Pattern from "./Pattern.svelte";
  import PatternSource from "!!raw-loader!./Pattern.svelte";
  import OverlaySource from "!!raw-loader!./Overlay.svelte";
  import OverlaysSource from "!!raw-loader!./Overlays.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import MDBRow from "../../src/MDBRow.svelte";
  import MDBCol from "../../src/MDBCol.svelte";
  import Overlay from "./Overlay.svelte";
  import Overlays from "./Overlays.svelte";
</script>
<style>
  .dynamic-color .col-md-4 div {
    padding: 7px 20px 7px 20px;
  }
</style>
<Title title="Mask">
  <p>Svelte Bootstrap masks alter the visibility of an element by either partially or fully hiding it. Masks are used to
    make content more visible in the picture.</p>
</Title>
<MDBRow>
  <MDBCol md="6">
    <Example source={PatternSource} title="Pattern">
      <Pattern/>
    </Example>
  </MDBCol>
  <MDBCol md="6">
    <Example source={OverlaySource} title="Overlay">
      <Overlay/>
    </Example>
  </MDBCol>
</MDBRow>
<h2 class="section-heading">
  Patterns
</h2>
<section>

  <!--Grid row-->
  <div class="row my-5">

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid" alt="smaple image">
        <div class="mask flex-center">
          <p class="white-text">no mask</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid"
             alt="Image of ballons flying over canyons with mask pattern one.">
        <div class="mask pattern-1 flex-center">
          <p class="white-text">pattern = 1</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

  </div>
  <!--Grid row-->

  <!--Grid row-->
  <div class="row my-5">

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid" alt="smaple image">
        <div class="mask pattern-2 flex-center">
          <p class="white-text">pattern = 2</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid"
             alt="Image of ballons flying over canyons with mask pattern one.">
        <div class="mask pattern-3 flex-center">
          <p class="white-text">pattern = 3</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

  </div>
  <!--Grid row-->

  <!--Grid row-->
  <div class="row my-5">

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid" alt="smaple image">
        <div class="mask pattern-4 flex-center">
          <p class="white-text">pattern = 4</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid"
             alt="Image of ballons flying over canyons with mask pattern one.">
        <div class="mask pattern-5 flex-center">
          <p class="white-text">pattern = 5</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

  </div>
  <!--Grid row-->

  <!--Grid row-->
  <div class="row my-5">

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid" alt="smaple image">
        <div class="mask pattern-6 flex-center">
          <p class="white-text">pattern = 6</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid"
             alt="Image of ballons flying over canyons with mask pattern one.">
        <div class="mask pattern-7 flex-center">
          <p class="white-text">pattern = 7</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

  </div>
  <!--Grid row-->

  <!--Grid row-->
  <div class="row my-5">

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid" alt="smaple image">
        <div class="mask pattern-8 flex-center">
          <p class="white-text">pattern = 8</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-md-6 mb-4 mb-md-0">

      <div class="view">
        <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" class="img-fluid"
             alt="Image of ballons flying over canyons with mask pattern one.">
        <div class="mask pattern-9 flex-center">
          <p class="white-text">pattern = 9</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

  </div>
  <!--Grid row-->

</section>
<h2 id="usage" class="secondary-heading mb-4">
  Usage
</h2>
<p><strong>Step 1: </strong>Create a wrapper containing component <code>&lt;MDBView&gt;</code>.</p>
<p><strong>Step 2: </strong>Set a path to the image by adding <code>src</code> attribute.</p>
<p><strong>Step 3: </strong>Add a component <code>&lt;MDBMask&gt;</code> to cover the image with the pattern.</p>
<p><strong>Step 4: </strong>Choose a pattern prop from the examples above.</p>
<p><strong>Step 5: </strong>If you want to add some text, you can use a className <code>flex-center</code> to center it.
</p>
<Example title="Types of Overlays" source={OverlaysSource}>
  <Overlays />
</Example>
<section id="colors-intensity">

  <!--Title-->
  <h2 class="section-heading">
    Overlay colors and intensity
  </h2>

  <!--Description-->
  <p class="mb-4">Choose one of the overlay props from the list below to set a desired intensity and color of your
    mask.</p>

  <!--Section: Live preview-->
  <section>

    <div class="row dynamic-color">

      <div class="col-md-4">
        <div class="rgba-blue-light">
          <p>blue-light</p>
        </div>
        <div class="rgba-red-light">
          <p>red-light</p>
        </div>
        <div class="rgba-pink-light">
          <p>pink-light</p>
        </div>
        <div class="rgba-purple-light">
          <p>purple-light</p>
        </div>
        <div class="rgba-indigo-light">
          <p>indigo-light</p>
        </div>
        <div class="rgba-cyan-light">
          <p>cyan-light</p>
        </div>
        <div class="rgba-teal-light">
          <p>teal-light</p>
        </div>
        <div class="rgba-green-light">
          <p>green-light</p>
        </div>
        <div class="rgba-lime-light">
          <p>lime-light</p>
        </div>
        <div class="rgba-yellow-light">
          <p>yellow-light</p>
        </div>
        <div class="rgba-orange-light">
          <p>orange-light</p>
        </div>
        <div class="rgba-brown-light">
          <p>brown-light</p>
        </div>
        <div class="rgba-grey-light">
          <p>grey-light</p>
        </div>
        <div class="rgba-blue-grey-light">
          <p>blue-grey-light</p>
        </div>
        <div class="rgba-black-light">
          <p>black-light</p>
        </div>
        <div class="rgba-stylish-light">
          <p>stylish-light</p>
        </div>
        <div class="rgba-white-light border">
          <p>white-light</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="rgba-blue-strong white-text">
          <p>blue-strong</p>
        </div>
        <div class="rgba-red-strong white-text">
          <p>red-strong</p>
        </div>
        <div class="rgba-pink-strong white-text">
          <p>pink-strong</p>
        </div>
        <div class="rgba-purple-strong white-text">
          <p>purple-strong</p>
        </div>
        <div class="rgba-indigo-strong white-text">
          <p>indigo-strong</p>
        </div>
        <div class="rgba-cyan-strong white-text">
          <p>cyan-strong</p>
        </div>
        <div class="rgba-teal-strong white-text">
          <p>teal-strong</p>
        </div>
        <div class="rgba-green-strong white-text">
          <p>green-strong</p>
        </div>
        <div class="rgba-lime-strong">
          <p>lime-strong</p>
        </div>
        <div class="rgba-yellow-strong">
          <p>yellow-strong</p>
        </div>
        <div class="rgba-orange-strong white-text">
          <p>orange-strong</p>
        </div>
        <div class="rgba-brown-strong white-text">
          <p>brown-strong</p>
        </div>
        <div class="rgba-grey-strong white-text">
          <p>grey-strong</p>
        </div>
        <div class="rgba-blue-grey-strong white-text">
          <p>blue-grey-strong</p>
        </div>
        <div class="rgba-black-strong white-text">
          <p>black-strong</p>
        </div>
        <div class="rgba-stylish-strong white-text">
          <p>stylish-strong</p>
        </div>
        <div class="rgba-white-strong border">
          <p>white-strong</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="rgba-blue-slight">
          <p>blue-slight</p>
        </div>
        <div class="rgba-red-slight">
          <p>red-slight</p>
        </div>
        <div class="rgba-pink-slight">
          <p>pink-slight</p>
        </div>
        <div class="rgba-purple-slight">
          <p>purple-slight</p>
        </div>
        <div class="rgba-indigo-slight">
          <p>indigo-slight</p>
        </div>
        <div class="rgba-cyan-slight">
          <p>cyan-slight</p>
        </div>
        <div class="rgba-teal-slight">
          <p>teal-slight</p>
        </div>
        <div class="rgba-green-slight">
          <p>green-slight</p>
        </div>
        <div class="rgba-lime-slight">
          <p>lime-slight</p>
        </div>
        <div class="rgba-yellow-slight">
          <p>yellow-slight</p>
        </div>
        <div class="rgba-orange-slight">
          <p>orange-slight</p>
        </div>
        <div class="rgba-brown-slight">
          <p>brown-slight</p>
        </div>
        <div class="rgba-grey-slight">
          <p>grey-slight</p>
        </div>
        <div class="rgba-blue-grey-slight">
          <p>blue-grey-slight</p>
        </div>
        <div class="rgba-black-slight">
          <p>black-slight</p>
        </div>
        <div class="rgba-stylish-slight">
          <p>stylish-slight</p>
        </div>
        <div class="rgba-white-slight border">
          <p>white-slight</p>
        </div>
      </div>

    </div>

  </section>
  <!--Section: Live preview-->

</section>
