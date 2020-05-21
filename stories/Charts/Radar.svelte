<script>

  import {MDBRow, MDBCol} from "mdbsvelte";
  import Radar from "svelte-chartsjs/src/Radar.svelte"

  let dataRadar= {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [28, 48, 40, 19, 96, 27,100]
      }
    ]
  }



</script>
<MDBRow>
  <MDBCol md="8" class="mx-auto">
    <Radar data={dataRadar} options={{ responsive: true }} />
  </MDBCol>
</MDBRow>
