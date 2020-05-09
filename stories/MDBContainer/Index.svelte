<script>
  import BasicSource from '!!raw-loader!./Basic.svelte';
  import FluidSource from '!!raw-loader!./ContainerFluid.svelte';
  import SizeSource from '!!raw-loader!./size.svelte';
  import Example from "../Example.svelte";

</script>
<Example source={BasicSource} title="Basic Container" output={false}>
</Example>
<div>
  Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose
  from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning
  it’s 100% wide all the time).
  <br>
  <br/>
  While containers can be nested, most layouts do not require a nested container.
</div>

<Example source={FluidSource} output={false} title="Container fluid">
</Example>
<div>Use fluid prop for a full-width container, spanning the entire width of the viewport.</div>

<Example source={SizeSource} output={false} title="Container with different Size"/>
<ul>
  <li><code>.container</code>, which sets a max-width at each responsive breakpoint</li>
  <li><code>.container-fluid</code>, which is width: 100% at all breakpoints</li>
  <li><code>.container-[breakpoint]</code>, which is width: 100% until the specified breakpoint</li>
</ul>
<p>The table below illustrates how each container’s <code>max-width</code> compares to the original
  <code>.container</code> and <code>.container-fluid</code> across each breakpoint.</p>
<table class="table text-left">
  <thead>
  <tr>
    <th></th>
    <th>
      Extra small<br>
      <span class="font-weight-normal">&lt;576px</span>
    </th>
    <th>
      Small<br>
      <span class="font-weight-normal">≥576px</span>
    </th>
    <th>
      Medium<br>
      <span class="font-weight-normal">≥768px</span>
    </th>
    <th>
      Large<br>
      <span class="font-weight-normal">≥992px</span>
    </th>
    <th>
      Extra large<br>
      <span class="font-weight-normal">≥1200px</span>
    </th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><code>.container</code></td>
    <td class="text-muted">100%</td>
    <td>540px</td>
    <td>720px</td>
    <td>960px</td>
    <td>1140px</td>
  </tr>
  <tr>
    <td><code>.container-sm</code></td>
    <td class="text-muted">100%</td>
    <td>540px</td>
    <td>720px</td>
    <td>960px</td>
    <td>1140px</td>
  </tr>
  <tr>
    <td><code>.container-md</code></td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
    <td>720px</td>
    <td>960px</td>
    <td>1140px</td>
  </tr>
  <tr>
    <td><code>.container-lg</code></td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
    <td>960px</td>
    <td>1140px</td>
  </tr>
  <tr>
    <td><code>.container-xl</code></td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
    <td>1140px</td>
  </tr>
  <tr>
    <td><code>.container-fluid</code></td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
    <td class="text-muted">100%</td>
  </tr>
  </tbody>
</table>
