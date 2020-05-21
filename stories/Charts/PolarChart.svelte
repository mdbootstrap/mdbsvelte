<script>

  import {MDBRow, MDBCol} from "mdbsvelte";
  import Polar from "svelte-chartsjs/src/Polar.svelte"

  let data = {
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          "rgba(247, 70, 74, 0.5)",
          "rgba(70, 191, 189, 0.5)",
          "rgba(253, 180, 92, 0.5)",
          "rgba(148, 159, 177, 0.5)",
          "rgba(77, 83, 96, 0.5)"
        ],
        label: "My dataset" // for legend
      }
    ],
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"]
  };

  let options = {
    responsive: true
  }


</script>
<MDBRow>
  <MDBCol md="8" class="mx-auto">
    <Polar {data} {options}/>
  </MDBCol>
</MDBRow>
