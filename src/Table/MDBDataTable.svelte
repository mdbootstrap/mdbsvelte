<script>
  import {clean, clsx} from '../utils/utils';
  import MDBTableHead from "./MDBTableHead.svelte";
  import MDBTableBody from "./MDBTableBody.svelte";
  import MDBTable from "./MDBTable.svelte";
  import MDBRow from "../Layout/MDBRow.svelte";
  import {MDBPagination, MDBPageItem, MDBPageNav} from '../index';
  import MDBCol from "../Layout/MDBCol.svelte";
  import MDBFormInline from "../forms/MDBFormInline.svelte";
  import MDBInput from "../forms/MDBInput.svelte";

  let className = '';
  let elementClasses;
  export {className as class};
  export let color;
  export let data;
  export let entries = 25;
  let page = 1;

  let table_data = [...data].slice((page - 1) * entries, page * entries);

  const props = clean($$props, ["color", "data"]);
  $: elementClasses = clsx(className, color)

</script>

<div class="mdb-datatable dt-bootstrap4">
  <MDBRow between>
    <MDBCol md="2">
      <MDBInput type="select">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </MDBInput>
    </MDBCol>
    <MDBCol md="4">
      <MDBInput hint="Search" />
    </MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBTable {...props} class={elementClasses}>
      <MDBTableHead/>
      <MDBTableBody data={table_data}/>
    </MDBTable>
  </MDBRow>
  <MDBRow end>
      <MDBPagination>
        <MDBPageItem>
          <MDBPageNav aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
          <MDBPageNav>
            1
          </MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
          <MDBPageNav>2</MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
          <MDBPageNav>3</MDBPageNav>
        </MDBPageItem>
        <MDBPageItem>
          <MDBPageNav aria-label="Previous">
            <span aria-hidden="true">&raquo;</span>
          </MDBPageNav>
        </MDBPageItem>
      </MDBPagination>
  </MDBRow>
</div>
