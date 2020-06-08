<script>
  import {clean, clsx, forwardEventsBuilder} from './utils';
  import {current_component} from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(current_component);
  import MDBTableHead from "./MDBTableHead.svelte";
  import MDBTableBody from "./MDBTableBody.svelte";
  import MDBTable from "./MDBTable.svelte";
  import MDBRow from "./MDBRow.svelte";
  import MDBCol from "./MDBCol.svelte";
  import MDBPagination from "./MDBPagination.svelte";
  import MDBPageItem from "./MDBPageItem.svelte";
  import MDBPageNav from "./MDBPageNav.svelte";
  import MDBInputGroup from "./MDBInputGroup.svelte";
  import MDBIcon from "./MDBIcon.svelte";

  let query;
  import fuzzysort from 'fuzzysort';

  let className = '';
  let elementClasses;
  export {className as class};
  export let color;
  export let data;
  export let entries = 25;
  export let entriesOptions = [25, 50, 100];
  export let columns = [];
  export let tableHeadProps = {};
  export let fuzzy_search = true;
  let total_data = [];

  const props = clean($$props, ["color", "data", "entries", "columns", "entriesOptions", "tableHeadProps"]);
  elementClasses = clsx(className, color);

  let page = 1;
  let table_data, lastPage, sort_column;
  let icon = "arrow-up";

  $: if (data) {
    total_data = [...data];
    update_table();
  }


  function update_query() {
    if (query && table_data) {
      total_data = [];
      if (fuzzy_search) {
        let res = fuzzysort.go(query, data, {
          keys: Object.keys(data[0])
        });
        res.map((d) => {
          total_data.push(d.obj)
        });
      } else {
        for (let i = 0; i < data.length; i++) {
          let cols = Object.keys(data[0]);
          for (let name in cols) {
            if (data[i][cols[name]].toLowerCase().includes(query.toLowerCase())) {
              total_data.push(data[i])
            }
          }
        }
      }
      page = 1
    } else {
      total_data = [...data]
    }
    update_table()
  }

  function update_table() {
    lastPage = Math.ceil(data.length / entries);
    table_data = total_data.slice((page - 1) * entries, page * entries);
  }


  function go_to_page(p) {
    page = p;
    update_table()
  }

  function sort(col, ind) {
    sort_column = col;
    page = 1;
    let sort_key = Object.keys(total_data[0])[ind]
    if (icon === "arrow-up") {
      icon = "arrow-down";
      total_data = total_data.sort((a, b) => {
        return -1 * ('' + a[sort_key]).localeCompare(b[sort_key])
      });
    } else {
      icon = "arrow-up";
      total_data = total_data.sort((a, b) => {
        return ('' + a[sort_key]).localeCompare(b[sort_key])
      });
    }
    update_table()
  }
</script>

<div class="mdb-datatable dt-bootstrap4">
  <MDBRow between>
    <MDBCol md="3" class="pl-0">
      <MDBInputGroup material prepend="Rows per page:" type="select" bind:value={entries} class="m-0"
                     on:change={update_table}>
        {#each entriesOptions as option}
          <option value={option}>{option}</option>
        {/each}
      </MDBInputGroup>
    </MDBCol>
    <MDBCol md="4">
      <MDBInputGroup material hint="Search" bind:value={query} on:keyup={update_query} class="m-0"/>
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBTable {...props} class={elementClasses}>
      <MDBTableHead {...tableHeadProps}>
        <tr>
          {#each columns as col, i}
            <th on:click={()=> sort(col,i)}>
              {#if col === sort_column}
                <MDBIcon {icon}/>
              {/if}
              {@html col}
            </th>
          {/each}
        </tr>
      </MDBTableHead>
      <MDBTableBody bind:data={table_data}/>
    </MDBTable>
  </MDBRow>
  <MDBRow end>
    <MDBPagination>
      <MDBPageItem>
        <MDBPageNav noWaves>
          Showing {(page-1)*entries + 1}-{Math.min(page*entries, data.length, total_data.length)}
          of {total_data.length}
          items
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem disabled={page===1}>
        <MDBPageNav aria-label="Previous" on:click={()=>go_to_page(1)}>
          <MDBIcon fas icon="angle-double-left"/>
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem disabled={page===1}>
        <MDBPageNav aria-label="Previous" on:click={()=>go_to_page(page-1)}>
          <MDBIcon fas icon="chevron-left"/>
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem>
        <MDBPageNav>{page}</MDBPageNav>
      </MDBPageItem>
      <MDBPageItem disabled={page===lastPage}>
        <MDBPageNav aria-label="Previous" on:click={()=>go_to_page(page+1)}>
          <MDBIcon fas icon="chevron-right"/>
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem disabled={page===lastPage}>
        <MDBPageNav aria-label="Previous" on:click={()=>go_to_page(lastPage)}>
          <MDBIcon fas icon="angle-double-right"/>
        </MDBPageNav>
      </MDBPageItem>
    </MDBPagination>
  </MDBRow>
</div>
