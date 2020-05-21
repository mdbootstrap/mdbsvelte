<script>
  import Basic from "./Basic.svelte";
  import BasicSource from "!!raw-loader!./Basic.svelte";
  import RadarSource from "!!raw-loader!./Radar.svelte";
  import HorizontalBarSource from "!!raw-loader!./HorizontalBar.svelte";
  import PolarChartSource from "!!raw-loader!./PolarChart.svelte";
  import BarSource from "!!raw-loader!./Bar.svelte";
  import PieChartSource from "!!raw-loader!./PieChart.svelte";
  import DoughnutChartSource from "!!raw-loader!./DoughnutChart.svelte";
  import BubbleChartSource from "!!raw-loader!./BubbleChart.svelte";
  import ScatterChartSource from "!!raw-loader!./ScatterChart.svelte";
  import Example from "../Example.svelte";
  import Title from "../Title.svelte";
  import Radar from "./Radar.svelte";
  import Bar from "./Bar.svelte";
  import HorizontalBar from "./HorizontalBar.svelte";
  import PolarChart from "./PolarChart.svelte";
  import PieChart from "./PieChart.svelte";
  import DoughnutChart from "./DoughnutChart.svelte";
  import BubbleChart from "./BubbleChart.svelte";
  import ScatterChart from "./ScatterChart.svelte";
</script>
<Title title="Chart">
</Title>
<Example source={BasicSource} title="Line Chart">
  <Basic/>
</Example>
<Example source={RadarSource} title="Radar Chart">
  <Radar />
</Example>
<Example source={BarSource} title="Bar Chart">
  <Bar />
</Example>
<Example source={HorizontalBarSource} title="HorizontalBar Chart">
  <HorizontalBar />
</Example>
<Example title="Polar Chart" source={PolarChartSource}>
  <PolarChart />
</Example>
<Example title="Pie Chart" source={PieChartSource}>
  <PieChart />
</Example>
<Example title="Doughnut Chart" source={DoughnutChartSource}>
  <DoughnutChart />
</Example>
<Example title="Bubble Chart" source={BubbleChartSource}>
  <BubbleChart />
</Example>
<Example title="Scatter Chart" source={ScatterChartSource}>
  <ScatterChart />
</Example>
