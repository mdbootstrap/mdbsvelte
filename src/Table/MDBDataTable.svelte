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

  let className = '';
  let elementClasses;
  export {className as class};
  export let color;
  export let data;
  export let entries = 25;
  export let entriesOptions = [25, 50, 100];
  export let columns = [];
  let page = 1;

  let table_data, lastPage;

  const props = clean($$props, ["color", "data"]);
  $: (() => {
    lastPage = Math.ceil(data.length / entries);
    elementClasses = clsx(className, color);
    table_data = [...data].slice((page - 1) * entries, page * entries);

  })()
</script>

<div class="mdb-datatable dt-bootstrap4">
  <MDBRow between>
    <MDBCol md="3">
      <MDBInputGroup material prepend="Rows per page:" type="select" bind:value={entries}>
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
      <MDBTableBody data={table_data}/>
    </MDBTable>
  </MDBRow>
  <MDBRow end>
    <MDBPagination>
      <MDBPageItem>
        <MDBPageNav noWaves>
          Showing {(page-1)*entries + 1}-{Math.min(page*entries, data.length)} of {data.length} items
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
