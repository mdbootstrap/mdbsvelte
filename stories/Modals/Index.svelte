<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import PositionAndSizeSource from "!!raw-loader!./PositionAndSize.svelte";
  import SideModalSource from "!!raw-loader!./SideModal.svelte";
  import FluidModalSource from "!!raw-loader!./FluidModal.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import PositionAndSize from "./PositionAndSize.svelte";
  import SideModal from "./SideModal.svelte";
  import FluidModal from "./FluidModal.svelte";
</script>
<Title title="Modal">
  <div class="description">

    <p>Svelte Bootstrap modal is lightweight, but powerful &amp; multipurpose popup. Learn how to manipulate size,
      styles
      &amp;
      position. Multiple examples and detailed tutorial.</p>

    <p>The Modal is a dialog box/popup window which can be used for lightboxes, user notifications, UI enhancements,
      e-commerce
      components and many other cases.</p>

    <p>It's easily customized. You can manipulate size, position, and content. </p>

    <p>This documentation presents the basic options and examples of modals. If you need more advanced help have a look
      at additional
      pages of the documentation listed below:</p>

  </div>
</Title>
<Example source={BasicSource} title="Basic Example" textCenter>
  <Basic/>
</Example>
<Example source={PositionAndSizeSource} title="Position And Size" textCenter description="
<p>To change the position or size of the modal add one of the following props to the
  <code>modal</code> component.</p>
<p class=' secondary-heading my-3'>
<strong>Central modal</strong>
</p>
<p><strong>Note:</strong> Medium size is a default value, so there isn't a dedicated prop for it.</p>
<p><code>size='sm</code> Small Modal</p>
<p><code>size='lg'</code> Large Modal</p>
<p><code>size='fluid'</code> Full Width Modal</p>
">
  <PositionAndSize/>
</Example>
<Example title="Side Modals" source={SideModalSource}>
  <p>
    <strong>Note 1:</strong> To make it works properly, apart from adding a prop for a position, you also need to
    add special prop
    <code><strong>side</strong></code> to
    <code>modal</code> component.</p>
  <p>
    <strong>Note 2:</strong> If you want to change modal position, add prop <code>position</code> equal
    <code>top</code>,
    <code>right</code>,
    <code>bottom</code> or
    <code>left</code> to the
    <code>modal</code> component.</p>
  <p>
    <code>side</code> +
    <code> position="top-right"</code> Top Right</p>
  <p>
    <code>side</code> +
    <code> position="top-left"</code> Top Left</p>
  <p>
    <code>side</code> +
    <code> position="bottom-right"</code> Bottom Right</p>
  <p>
    <code>side</code> +
    <code> position="bottom-left"</code>
    Bottom Left
  </p>
  <SideModal />
</Example>
<Example title="Fluid modal" source={FluidModalSource}>
  <p class="secondary-heading my-3">
    Fluid modal
  </p>
  <p>
    <strong>Note:</strong> As in the previous example - to make it works properly, apart from adding a prop for a
    position,
    you also need to add special prop
    <code><strong>fullHeight</strong></code> to
    <code>modal</code> component.</p>
  <p>
    <strong>Note 2:</strong> If you want to change modal position, add prop <code>position</code> equal
    <code>top</code>,
    <code>right</code>,
    <code>bottom</code> or
    <code>left</code> to the
    <code>modal</code> component.</p>
  <p>
    <code>fullHeight</code> +
    <code> position="right"</code> Right</p>
  <p>
    <code>fullHeight</code> +
    <code> position="left"</code> Left</p>
  <p>
    <code>fullHeight</code> +
    <code> position="bottom"</code> Bottom</p>
  <p>
    <code>fullHeight</code> +
    <code> position="top"</code> Top</p>
  <FluidModal />
</Example>
