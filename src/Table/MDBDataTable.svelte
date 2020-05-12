<script>
  import {clean, clsx, forwardEventsBuilder} from '../utils/utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  import MDBTableHead from "./MDBTableHead.svelte";
  import MDBTableBody from "./MDBTableBody.svelte";
  import MDBTable from "./MDBTable.svelte";
  import MDBRow from "../Layout/MDBRow.svelte";
  import MDBCol from "../Layout/MDBCol.svelte";
  import MDBInput from "../forms/MDBInput.svelte";
  import MDBPagination from "../Pagination/MDBPagination.svelte";
  import MDBPageItem from "../Pagination/MDBPageItem.svelte";
  import MDBPageNav from "../Pagination/MDBPageNav.svelte";
  import MDBInputGroup from "../forms/MDBInputGroup.svelte";
  import MDBIcon from "../MDBIcon.svelte";

  let query;
  const fuzzysort = require('fuzzysort');

  let className = '';
  let elementClasses;
  export {className as class};
  export let color;
  export let data;
  export let entries = 25;
  export let entriesOptions = [25, 50, 100];
  export let columns = [];
  let total_data = [...data];
  const props = clean($$props, ["color", "data"]);
  elementClasses = clsx(className, color);

  let page = 1;
  let table_data, lastPage;


  function update_table() {
    lastPage = Math.ceil(data.length / entries);
    table_data = total_data.slice((page - 1) * entries, page * entries);
  }

  update_table();

  $: if (query) {
    let res = fuzzysort.go(query, data, {
      keys: Object.keys(table_data[0])
    })
    total_data = []
    res.map((d) => {
      total_data.push(d.obj)
    })
    // table_data = table_data
    console.log(total_data)
  }
  ;

</script>

<div class="mdb-datatable dt-bootstrap4">
  <MDBRow between>
    <MDBCol md="3">
      <MDBInputGroup material prepend="Rows per page:" type="select" bind:value={entries} on:change={update_table}>
        {#each entriesOptions as option}
          <option value={option}>{option}</option>
        {/each}
      </MDBInputGroup>
    </MDBCol>
    <MDBCol md="4">
      <MDBInput hint="Search" bind:value={query}/>
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBTable {...props} class={elementClasses}>
      <MDBTableHead columns={columns}/>
      <MDBTableBody bind:data={table_data}/>
    </MDBTable>
  </MDBRow>
  <MDBRow end>
    <MDBPagination>
      <MDBPageItem>
        <MDBPageNav noWaves>
          Showing {(page-1)*entries + 1}-{Math.min(page*entries, data.length)} of {total_data.length} items
        </MDBPageNav>
      </MDBPageItem>
      {#if page !==1 }
        <MDBPageItem>
          <MDBPageNav aria-label="Previous" on:click={()=>page--}>
            <MDBIcon fas icon="chevron-left"/>
          </MDBPageNav>
        </MDBPageItem>
      {/if}
      <MDBPageItem>
        <MDBPageNav>{page}</MDBPageNav>
      </MDBPageItem>
      {#if page < lastPage}
        <MDBPageItem>
          <MDBPageNav aria-label="Previous" on:click={()=>page++}>
            <MDBIcon fas icon="chevron-right"/>
          </MDBPageNav>
        </MDBPageItem>
      {/if}
    </MDBPagination>
  </MDBRow>
</div>
