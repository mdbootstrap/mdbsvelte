<script>

  import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbsvelte";
</script>
<MDBContainer>
  <MDBBreadcrumb>
    <MDBBreadcrumbItem active >Home</MDBBreadcrumbItem>
  </MDBBreadcrumb>

  <MDBBreadcrumb>
    <MDBBreadcrumbItem href="/home">Home</MDBBreadcrumbItem>
    <MDBBreadcrumbItem active >Library</MDBBreadcrumbItem>
  </MDBBreadcrumb>

  <MDBBreadcrumb>
    <MDBBreadcrumbItem href="/home">Home</MDBBreadcrumbItem>
    <MDBBreadcrumbItem href="/library">Library</MDBBreadcrumbItem>
    <MDBBreadcrumbItem active >Data</MDBBreadcrumbItem>
  </MDBBreadcrumb>
</MDBContainer>
