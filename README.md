<p align="center">
  <a href="http://mdbootstrap.com/docs/vue/">
    <img width="500" src="mdbsvelte.png">
  </a>
</p>

<h1 align="center">Svelte Bootstrap with Material Design</h1>

<p align="center">
  Based on the latest <b>Bootstrap 4</b> and <b>Svelte 3</b>. Absolutely <b>no jQuery</b>.
</p>
<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/dm/mdbsvelte"/>
  <a href="https://github.com/SauravKanchan/mdbsvelte/blob/master/LICENSE">
<a href="https://badge.fury.io/js/mdbsvelte"><img src="https://badge.fury.io/js/mdbsvelte.svg" alt="npm version" height="18"></a>
<a href="https://app.fossa.io/projects/git%2Bgithub.com%2FSauravKanchan%2Fmdbsvelte?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2FSauravKanchan%2Fmdbsvelte.svg?type=shield"/></a>
</p>

Read full documentaion at [saurav.tech/mdbsvelte](https://saurav.tech/mdbsvelte/)

## Getting started
### Step 1: Install the package
```bash
npm i mdbsvelte
```
### Step 2: Add CSS
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
  import {MDBBtn} from "mdbsvelte";
</script>
<MDBBtn>Default</MDBBtn>
```
#### For server-side side rendering (Sapper)
You need to import from the component source directly.
```svelte
<script>
  import MDBBtn from "mdbsvelte/src/MDBBtn.svelte";
</script>
```

## Components
+ [Containers](https://saurav.tech/mdbsvelte/?path=/story/layout--containers)
+ [Grid](https://saurav.tech/mdbsvelte/?path=/story/layout--grid)
+ [Alert](https://saurav.tech/mdbsvelte/?path=/story/components--alerts)
+ [Button](https://saurav.tech/mdbsvelte/?path=/story/components--buttons)
+ [Button Group](https://saurav.tech/mdbsvelte/?path=/story/components--buttons-groups)
+ [Card](https://saurav.tech/mdbsvelte/?path=/story/components--cards)
+ [Dropdown](https://saurav.tech/mdbsvelte/?path=/story/components--dropdowns)
+ [Jumbotron](https://saurav.tech/mdbsvelte/?path=/story/components--jumbotron)
+ [List Groups](https://saurav.tech/mdbsvelte/?path=/story/components--list-groups)
+ [Badges](https://saurav.tech/mdbsvelte/?path=/story/components--badges)
+ [Spinner](https://saurav.tech/mdbsvelte/?path=/story/components--spinner)
+ [Pagination](https://saurav.tech/mdbsvelte/?path=/story/components--pagination)
+ [Progress](https://saurav.tech/mdbsvelte/?path=/story/components--progress)
+ [Navbar](https://saurav.tech/mdbsvelte/?path=/story/navigation--navbar)
+ [Footer](https://saurav.tech/mdbsvelte/?path=/story/navigation--footer)
+ [Navs](https://saurav.tech/mdbsvelte/?path=/story/navigation--navs)
+ [Breadcrumbs](https://saurav.tech/mdbsvelte/?path=/story/navigation--breadcrumb)
+ [Forms](https://saurav.tech/mdbsvelte/?path=/story/forms--basic-examples)
+ [Input Groups](https://saurav.tech/mdbsvelte/?path=/story/forms--input-groups)
+ [Tables](https://saurav.tech/mdbsvelte/?path=/story/tables--basic-examples)
+ [Data Tables](https://saurav.tech/mdbsvelte/?path=/story/tables--data-tables)
+ [Modals](https://saurav.tech/mdbsvelte/?path=/story/modals--basic-examples)
+ [Charts](https://saurav.tech/mdbsvelte/?path=/story/charts--installation)
+ [Masks](https://saurav.tech/mdbsvelte/?path=/story/css--masks)
+ [Icons](https://saurav.tech/mdbsvelte/?path=/story/content--icons-list)
+ [Admin Dashboard](https://saurav.tech/mdbsvelte/?path=/story/dashboard--admin-dashboard)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FSauravKanchan%2Fmdbsvelte.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FSauravKanchan%2Fmdbsvelte?ref=badge_large)
