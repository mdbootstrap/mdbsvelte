<script>
  import {MDBBadge, MDBContainer, MDBIcon, MDBRow, MDBCol} from "mdbsvelte";
</script>
<MDBContainer>
  <MDBRow>
    <MDBCol md="12" class="mb-4">
      <MDBBadge color="default">
        <MDBIcon fab icon="facebook-f"/>
      </MDBBadge>
      <MDBBadge color="primary">
        <MDBIcon fab icon="instagram"/>
      </MDBBadge>
      <MDBBadge color="success">
        <MDBIcon fab icon="snapchat-ghost"/>
      </MDBBadge>
      <MDBBadge color="info">
        <MDBIcon icon="anchor"/>
      </MDBBadge>
      <MDBBadge color="warning">
        <MDBIcon far icon="sun"/>
      </MDBBadge>
    </MDBCol>

    <MDBCol md="12" class="mb-4">
      <MDBBadge color="danger">
        <MDBIcon far icon="battery-three-quarters"/>
      </MDBBadge>
      <MDBBadge color="pink">
        <MDBIcon icon="wheelchair"/>
      </MDBBadge>
      <MDBBadge color="light-blue">
        <MDBIcon far icon="heart"/>
      </MDBBadge>
      <MDBBadge color="purple">
        <MDBIcon icon="bullhorn"/>
      </MDBBadge>
      <MDBBadge color="orange">
        <MDBIcon fab icon="btc"/>
      </MDBBadge>
    </MDBCol>

    <MDBCol md="12" class="mb-4">
      <MDBBadge color="teal">
        <MDBIcon far icon="comments"/>
      </MDBBadge>
      <MDBBadge color="orange">
        <MDBIcon icon="coffee"/>
      </MDBBadge>
      <MDBBadge color="green">
        <MDBIcon icon="user"/>
      </MDBBadge>
      <MDBBadge color="indigo">
        <MDBIcon fab icon="android" size="2x"/>
      </MDBBadge>
      <MDBBadge color="cyan">
        <MDBIcon icon="cog" size="2x"/>
      </MDBBadge>
    </MDBCol>

    <MDBCol md="12" class="mb-4">
      <MDBBadge color="orange">
        <MDBIcon fab icon="btc" size="2x"/>
      </MDBBadge>
      <MDBBadge pill color="teal">
        <MDBIcon icon="heart" size="2x"/>
      </MDBBadge>
      <MDBBadge pill color="green">
        <MDBIcon fab icon="apple" size="2x"/>
      </MDBBadge>
      <MDBBadge pill color="purple">
        <MDBIcon icon="users" size="2x"/>
      </MDBBadge>
    </MDBCol>
  </MDBRow>
</MDBContainer>
