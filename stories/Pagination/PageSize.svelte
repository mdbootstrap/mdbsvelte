<script>
  import {MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "../../src/index";
</script>
<MDBRow>
  <MDBCol>
    <MDBPagination size="lg">
      <MDBPageItem>
        <MDBPageNav aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav>
          1 <span class="sr-only">(current)</span>
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav>
          2
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav>
          3
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav>
          &raquo;
        </MDBPageNav>
      </MDBPageItem>
    </MDBPagination>
  </MDBCol>
</MDBRow>
