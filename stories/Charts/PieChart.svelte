<script>

  import {MDBRow, MDBCol} from "mdbsvelte";
  import Pie from "svelte-chartsjs/src/Pie.svelte"

  let data = {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#AC64AD"
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#DA92DB"
        ]
      }
    ]
  };

  let options = {
    responsive: true
  }


</script>
<MDBRow>
  <MDBCol md="8" class="mx-auto">
    <Pie {data} {options}/>
  </MDBCol>
</MDBRow>
