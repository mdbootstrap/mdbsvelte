<script>
  import {MDBListGroup, MDBListGroupItem, MDBContainer} from "../../src/index";
</script>
<MDBContainer>
  <MDBListGroup style="width: 22rem">
    <MDBListGroupItem active href="#">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
      <small>Donec id elit non mi porta.</small>
    </MDBListGroupItem>
    <MDBListGroupItem hover href="#">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
      <small class="text-muted">Donec id elit non mi porta.</small>
    </MDBListGroupItem>
    <MDBListGroupItem hover href="#">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
      <small class="text-muted">Donec id elit non mi porta.</small>
    </MDBListGroupItem>
  </MDBListGroup>
</MDBContainer>
