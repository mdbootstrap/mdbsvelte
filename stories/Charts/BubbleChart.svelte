<script>

  import {MDBRow, MDBCol} from "mdbsvelte";
  import Bubble from "svelte-chartsjs/src/Bubble.svelte"

  let data = {
    labels: 'Bubble',
    datasets: [
      {
        label: 'John',
        data: [
          {
            x: 3,
            y: 7,
            r: 10
          }
        ],
        backgroundColor: '#ff6384',
        hoverBackgroundColor: '#ff6384'
      },
      {
        label: 'Peter',
        data: [
          {
            x: 3.2,
            y: 7,
            r: 10
          }
        ],
        backgroundColor: '#44e4ee',
        hoverBackgroundColor: '#44e4ee'
      },
      {
        label: 'Donald',
        data: [
          {
            x: 3.4,
            y: 7,
            r: 10
          }
        ],
        backgroundColor: '#62088A',
        hoverBackgroundColor: '#62088A'
      }
    ]
  };

  let options = {
    responsive: true
  }


</script>
<MDBRow>
  <MDBCol md="8" class="mx-auto">
    <Bubble {data} {options}/>
  </MDBCol>
</MDBRow>
