<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import Example from "../Example.svelte";
  import AutoLayout from "./AutoLayout.svelte";
  import AutoLayoutSource from "!!raw-loader!./AutoLayout.svelte";
  import Broken from "./Broken.svelte";
  import BrokenSource from "!!raw-loader!./Broken.svelte";
  import HorizonatlAlign from "./HorizonatlAlign.svelte";
  import HorizonatlAlignSource from "!!raw-loader!./HorizonatlAlign.svelte";
  import ColumnWrapping from "./ColumnWrapping.svelte";
  import ColumnWrappingSource from "!!raw-loader!./ColumnWrapping.svelte";
  import ColumnBreaks from "./ColumnBreaks.svelte";
  import ColumnBreaksSource from "!!raw-loader!./ColumnBreaks.svelte";
  import Ordering from "./Ordering.svelte";
  import OrderingSource from "!!raw-loader!./Ordering.svelte";
  import Offsetting from "./Offsetting.svelte";
  import OffsettingSource from "!!raw-loader!./Offsetting.svelte";
  import ResponsiveBreakpoints from "./ResponsiveBreakpoints.svelte";
  import ResponsiveBreakpointsSource from "!!raw-loader!./ResponsiveBreakpoints.svelte";
  import Margin from "./Margin.svelte";
  import MarginSource from "!!raw-loader!./Margin.svelte";
  import Nesting from "./Nesting.svelte";
  import NestingSource from "!!raw-loader!./Nesting.svelte";

</script>
<style>
  :global(.output [class^="col"]) {
    padding: 1rem;
    background-color: #33b5e5;
    border: 2px solid #fff;
    color: #fff;
    text-align: center;
  }

</style>
<h2 id="how-it-works" class="title mb-3">
  How it works
</h2>
<p>MDBSvelte grid system uses a series of components: Rows, Containers and Columns to layout and align content. It’s
  built with
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes"
     rel="nofollow" target="_blank">flexbox</a> and is fully responsive. Below is an example and an in-depth look at how
  the grid
  comes together.</p>
<p>
  <strong>New to or unfamiliar with flexbox?</strong> Read our
  <a href="https://mdbootstrap.com/docs/jquery/utilities/flexbox/" target="_blank">CSS flexbox guide</a>.</p>

<Example source={BasicSource}>
  <Basic/>
</Example>

<p>The above example creates three equal-width columns on small, medium, large, and extra large devices using our
  predefined
  grid classes. Those columns are centered in the page with the parent
  <code>Container</code>component.</p>
<p>
  <strong>Breaking it down, here’s how it works:</strong>
</p>
<ul class="list-disc">
  <li>Containers provide a means to center your site’s contents. Use
    <code>&lt;MDBContainer&gt;</code> component for fixed width or
    <code>&lt;MDBContainer fluid &gt;</code> for <code>width: 100%</code> across all viewport and device sizes.
  </li>
  <li>Rows are wrappers for columns. Each MDBCol has horizontal
    <code>padding</code> (called a gutter) for controlling the space between them. This
    <code>padding</code> is then counteracted on the rows with negative margins. This way, all the content in your
    columns is
    visually aligned down the left side.
  </li>
  <li>In a grid layout, content must be placed within MDBCol and only MDBCol may be immediate children of MDBRow.</li>
  <li>Thanks to flexbox, Columns without a specified <code>width</code> will automatically layout as equal width
    Columns. For example, four instances of
    <code></code> will each automatically be 25% wide from the small breakpoint and up. See the
    <a href="#">auto-layout columns</a> section
    for more examples.
  </li>
  <li>Column props indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want
    three
    equal-width columns, you can use
    <code>
      <mdbcol sm="4"></mdbcol>
    </code>.
  </li>
  <li>MDBCol
    <code>width</code>s are set in percentages, so they’re always fluid and sized relative to their parent element.
  </li>
  <li>MDBCol have horizontal
    <code>padding</code> to create the gutters between individual columns, however, you can remove the
    <code>margin</code> from MDBRow and
    <code>padding</code> from MDBCol with
    <code>.no-gutters</code> className on the
    <code>MDBRow</code>.
  </li>
  <li>To make the grid responsive, there are five grid breakpoints, one for each
    <a href="#">responsive breakpoint</a>:
    all breakpoints (extra small), small, medium, large, and extra large.
  </li>
  <li>Grid breakpoints are based on minimum width media queries, meaning
    <strong>they apply to that one breakpoint and all those above it</strong> (e.g.,
    <code>
      <mdbcol sm="4"></mdbcol>
    </code> applies to small, medium, large, and extra large devices, but not the first
    <code>xs</code> breakpoint).
  </li>
  <li>You can use predefined grid classes (like
    <code>
      <mdbcol size="4"></mdbcol>
    </code>).
  </li>
</ul>

<p>Be aware of the limitations and
  <a href="https://github.com/philipwalton/flexbugs" rel="nofollow" target="_blank">bugs around flexbox</a>, like the
  <a href="https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers" rel="nofollow"
     target="_blank">inability to use some HTML elements as flex containers</a>.</p>


<section id="grid-options">

  <!--Title-->
  <h2 class="section-heading mb-3">
    Grid options
  </h2>

  <!--Description-->
  <p>While Bootstrap uses
    <code>em</code>s or
    <code>rem</code>s for defining most sizes,
    <code>px</code>s are used for grid breakpoints and container widths. This is because the viewport width is in
    pixels and does
    not change with the
    <a href="https://drafts.csswg.org/mediaqueries-3/#units" rel="nofollow" target="_blank">font size</a>.
  </p>

  <p class="description">See how aspects of the Bootstrap grid system work across multiple devices with a handy
    table.</p>


  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th></th>
      <th class="text-center">
        Extra small
        <br>
        <small>&lt;576px</small>
      </th>
      <th class="text-center">
        Small
        <br>
        <small>≥576px</small>
      </th>
      <th class="text-center">
        Medium
        <br>
        <small>≥768px</small>
      </th>
      <th class="text-center">
        Large
        <br>
        <small>≥992px</small>
      </th>
      <th class="text-center">
        Extra large
        <br>
        <small>≥1200px</small>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Grid behavior</th>
      <td>Horizontal at all times</td>
      <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Container width</th>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">prop</th>
      <td>
        <code>xs</code>
      </td>
      <td>
        <code>sm</code>
      </td>
      <td>
        <code>md</code>
      </td>
      <td>
        <code>lg</code>
      </td>
      <td>
        <code>xl</code>
      </td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row"># of columns</th>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Gutter width</th>
      <td colspan="5">30px (15px on each side of a column)</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Nestable</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Column ordering</th>
      <td colspan="5">Yes</td>
    </tr>
    </tbody>
  </table>


</section>

<h2 class="h2">
  Auto-layout columns
</h2>
<h4 class="secondary-heading mt-3">
  Equal-width
</h4>
<p>
  For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of
  and every column will be the same width.
</p>

<Example source={AutoLayoutSource}>
  <AutoLayout/>
</Example>
<p>
  Equal-width <code>&lt;MDBCol&gt;</code>can be broken into multiple lines.
</p>
<Example source={BrokenSource}>
  <Broken/>
</Example>

<h3 id="horizontal-alignment" class="secondary-heading">
  Horizontal alignment
</h3>
<Example source={HorizonatlAlignSource}>
  <HorizonatlAlign/>
</Example>

<h3 id="no-gutters" class="secondary-heading">
  No gutters
</h3>
<p>The gutters between columns in our predefined grid classes can be removed with
  <code>&lt;MDBRow noGutters &gt; .</code> This removes the negative
  <code>margin</code>s from
  <code>&lt;MDBRow&gt;</code> and the horizontal
  <code>padding</code> from all immediate children <code>&lt;MDBCol&gt;</code>.</p>
<p>
  Need an edge-to-edge design? Remove the parent
  <code>&lt;MDBContainer&gt;</code> or
  <code>&lt;MDBContainer fluid&gt;</code> component.</p>

<h4 id="column-wrapping" class="mt-5">
  <strong>Column wrapping</strong>
</h4>

<p class="description">If more than 12 columns are placed within a single row, each group of extra columns will, as
  one unit, wrap onto a new
  line.
</p>
<Example source={ColumnWrappingSource}>
  <ColumnWrapping/>
</Example>
<h4 id="column-breaks" class="mt-5">
  <strong>Column breaks</strong>
</h4>
<p class="description">Breaking columns to a new line in flexbox requires a small hack: add an element with
  <code>width: 100%</code> wherever you want to wrap your columns to a new line. Normally this is accomplished with
  multiple
  <code>&lt;MDBRow&gt;</code>s, but not every implementation method can account for this.</p>
<Example source={ColumnBreaksSource}>
  <ColumnBreaks/>
</Example>

<h2 class="section-heading mb-4">
  Reordering
</h2>
<h3 id="order-classes" class="secondary-heading mb-3">
  Order classes
</h3>
<p class="description">Use
  <code>.order-</code> classes for controlling the
  <strong>visual order</strong> of your content. These classes are responsive, so you can set the
  <code>order</code> by breakpoint (e.g.,
  <code>.order-1.order-md-2</code>). Includes support for
  <code>1</code> through
  <code>12</code> across all five grid tiers.</p>
<Example source={OrderingSource}>
  <Ordering/>
</Example>

<h4 id="offsetting-columns" class="mt-5">
  <strong>Offsetting columns</strong>
</h4>

<p class="description">You can offset <code>&lt;MDBCol&gt;</code> in two ways: our responsive
  <code>.offset-</code> grid classes and our
  <a href="https://mdbootstrap.com/docs/jquery/utilities/spacing/">margin utilities</a>. Grid classes are sized to
  match columns while margins are more useful for quick layouts where the
  width of the offset is variable.</p>

<h4 id="offset-classes" class="mt-5">
  <strong>Offset classes</strong>
</h4>

<p class="description">Move columns to the right using
  <code>.offset-md-*</code> classes. These classes increase the left margin of a column by
  <code>*</code> columns. For example,
  <code>.offset-md-4</code> moves
  <code>.col-md-4</code> over four columns.</p>

<Example source={OffsettingSource}>
  <Offsetting/>
</Example>

<p class="description">In addition to column clearing at responsive breakpoints, you may need to reset offsets. See
  this in action: </p>

<Example source={ResponsiveBreakpointsSource}>
  <ResponsiveBreakpoints/>
</Example>

<h4 id="margin-utilities" class="mt-5">
  <strong>Margin utilities</strong>
</h4>

<p class="description">You can use margin utilities like
  <code>.mr-auto</code> to force sibling <code>&lt;MDBCol&gt;</code> away from one another.</p>

<Example source={MarginSource}>
  <Margin/>
</Example>

<h2 class="section-heading mb-4">
  Nesting
</h2>
<p class="description">To nest your content with the default grid, add a new
  <code>&lt;MDBRow&gt;</code> and set of
  <code>&lt;MDBCol&gt;</code> columns within an existing
  <code>&lt;MDBCol&gt;</code> column. Nested rows should include a set of columns that add up to 12 or fewer (it is
  not required that
  you use all 12 available columns).</p>
<Example source={NestingSource}>
  <Nesting/>
</Example>
