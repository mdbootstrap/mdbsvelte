<script>
  import MDBContainer from "../../src/MDBContainer.svelte";
  import MDBRow from "../../src/MDBRow.svelte";
  import MDBCol from "../../src/MDBCol.svelte";
  import Example from "../Example.svelte";
  import Simple from "./Simple.svelte";
  import SimpleSource from "!!raw-loader!./Simple.svelte";

  let unpkg = `<script href="https://unpkg.com/mdbsvelte@latest/dist/mdbsvelte.js"></` + "script>"

  let css_links = `
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <!-- Google Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <!-- Bootstrap core CSS -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.16.0/css/mdb.min.css" rel="stylesheet">
  `



</script>
<MDBContainer>
  <MDBRow>
    <MDBCol md="12" class="text-center">
      <h1 class="primary-heading">MDBSvelte</h1>
    </MDBCol>
    <MDBCol md="12">
      Svelte Bootstrap with material design. This project is inspired by <a
      href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design">mdbreact</a> All the components(as well
      as documentation) will be similar to mdbreact. This package does not contains CSS so you will need to import it
      manually.
    </MDBCol>
    <MDBCol md="12" class="mt-4">
      <h1 class="h1">Installation</h1>
      <MDBRow>
        <MDBCol>
          <Example source="npm i mdbsvelte" title="npm"/>
        </MDBCol>
        <MDBCol>
          <Example source="yarn add mdbsvelte" title="yarn"/>
        </MDBCol>
        <MDBCol>
          <Example source={unpkg} title="unpkg"/>
        </MDBCol>
      </MDBRow>
      <Example source={css_links} title="Add the css to your html layout(index.html)"/>
    </MDBCol>
    <MDBCol md="12" class="mt-4">
      <h1 class="h1">Usage</h1>
      <Example source={SimpleSource}>
        <Simple/>
      </Example>
    </MDBCol>
  </MDBRow>
</MDBContainer>
