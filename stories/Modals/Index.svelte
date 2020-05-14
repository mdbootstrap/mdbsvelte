<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import PositionAndSizeSource from "!!raw-loader!./PositionAndSize.svelte";
  import SideModalSource from "!!raw-loader!./SideModal.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import PositionAndSize from "./PositionAndSize.svelte";
  import SideModal from "./SideModal.svelte";
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
<Example title="Side Modals" source={SideModalSource} textCenter>
  <SideModal />
</Example>
