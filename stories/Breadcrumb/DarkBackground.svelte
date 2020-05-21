<script>

  import {MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer} from "mdbsvelte";
</script>
<style>
  :global(.light-font .breadcrumb-item + .breadcrumb-item::before, .light-font a ) {
    color: #fff;
  }

  :global(.light-font .breadcrumb-item.active) {
    color: #cfd8dc;
  }


</style>
<MDBContainer>
  <div class="light-font">
    <MDBBreadcrumb color="default">
      <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
    </MDBBreadcrumb>

    <MDBBreadcrumb color="primary">
      <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
      <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
    </MDBBreadcrumb>

    <MDBBreadcrumb color="secondary">
      <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
      <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
      <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
    </MDBBreadcrumb>
  </div>

</MDBContainer>
