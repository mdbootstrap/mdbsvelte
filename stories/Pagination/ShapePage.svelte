<script>

  import {MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbsvelte";

</script>
<MDBRow>
  <MDBCol>
    <MDBPagination circle>
      <MDBPageItem disabled>
        <MDBPageNav class="page-link">
          <span>First</span>
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem disabled>
        <MDBPageNav class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem active>
        <MDBPageNav class="page-link">
          1 <span class="sr-only">(current)</span>
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav class="page-link">
          2
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav class="page-link">
          3
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav class="page-link">
          4
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav class="page-link">
          5
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav class="page-link">
          &raquo;
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav class="page-link">
          Last
        </MDBPageNav>
      </MDBPageItem>
    </MDBPagination>
  </MDBCol>
</MDBRow>
