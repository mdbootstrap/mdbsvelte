# MDBSvelte
[![npm version](https://badge.fury.io/js/mdbsvelte.svg)](https://badge.fury.io/js/mdbsvelte)

Read full documentaion at [saurav.tech/mdbsvelte](https://saurav.tech/mdbsvelte/)
## Getting started
### Step 1: Install the package
```bash
npm i mdbsvelte
```
#### Step 2: Add CSS
This package does not contains any css you need to add in your project manually 

Add in your HTML layout:
```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<!-- Google Fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
<!-- Bootstrap core CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.16.0/css/mdb.min.css" rel="stylesheet">
```
or you can add it your svelte app:
```html
<svelte:head>
<!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<!-- Google Fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
<!-- Bootstrap core CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.16.0/css/mdb.min.css" rel="stylesheet">
</svelte:head>
```

### Step 3: Import in your svelte component
```svelte
<script>
  import {MDBBtn, MDBContainer} from "mdbsvelte";
</script>
<MDBContainer>
  <MDBBtn color="primary">Primary</MDBBtn>
  <MDBBtn>Default</MDBBtn>
  <MDBBtn color="secondary">Secondary</MDBBtn>
  <MDBBtn color="success">Success</MDBBtn>
  <MDBBtn color="info">Info</MDBBtn>
  <MDBBtn color="warning">Warning</MDBBtn>
  <MDBBtn color="danger">Danger</MDBBtn>
</MDBContainer>
```
