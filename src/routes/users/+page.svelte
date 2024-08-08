<script>
  import {afterUpdate, beforeUpdate, onDestroy, onMount} from "svelte";

  //onMount
  onMount(async () => {
    console.log("Users Page Mounted!");
  });

  // onDestroy
  onDestroy(() => {
    console.log("Users Page Destroyed!");
  });

  // beforeUpdate
  beforeUpdate(() => {
    console.log("beforeUpdate Users Page");
  });

  // afterUpdate
  afterUpdate(() => {
    console.log("afterUpdate Users Page");
  });
</script>

<div>
  <h1>Users</h1>
</div>
