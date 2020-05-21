<script>

  import {MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer} from "mdbsvelte";
</script>
<style>
  :global(.light-font .breadcrumb-item + .breadcrumb-item::before, .light-font a,.light-font i  ) {
    color: #fff;
  }

  :global(.light-font .breadcrumb-item.active) {
    color: #cfd8dc;
  }


</style>
<MDBContainer>
  <div class="light-font">
    <MDBBreadcrumb color="pink lighten-4">
      <MDBBreadcrumbItem iconRegular icon="star">Home</MDBBreadcrumbItem>
    </MDBBreadcrumb>

    <MDBBreadcrumb color="pink lighten-3">
      <MDBBreadcrumbItem iconRegular icon="star">Home</MDBBreadcrumbItem>
      <MDBBreadcrumbItem iconRegular icon="star" active>Library</MDBBreadcrumbItem>
    </MDBBreadcrumb>

    <MDBBreadcrumb color="pink lighten-2">
      <MDBBreadcrumbItem iconRegular icon="star">Home</MDBBreadcrumbItem>
      <MDBBreadcrumbItem iconRegular icon="star">Library</MDBBreadcrumbItem>
      <MDBBreadcrumbItem iconRegular icon="star" active>Data</MDBBreadcrumbItem>
    </MDBBreadcrumb>
  </div>

</MDBContainer>
