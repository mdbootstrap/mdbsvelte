<script>
  import {MDBContainer, MDBRow, MDBCol} from "mdbsvelte";
</script>

<MDBContainer>
  <MDBRow>
    <MDBCol size="9">
      .col-9
    </MDBCol>
    <MDBCol size="4">
      .col-4
      <br/>
      Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
    </MDBCol>
    <MDBCol size="6">
      .col-6
      <br/>
      Subsequent columns continue along the new line.
    </MDBCol>
  </MDBRow>
</MDBContainer>
