<script>
  import {Button} from "$lib/components/ui/button";
  import {afterUpdate, beforeUpdate, onDestroy, onMount} from "svelte";
  import Counter from "../../components/custom/Counter.svelte";
  import UserList from "../../components/custom/UserList.svelte";
  import UserForm from "../../components/custom/UserForm.svelte";

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

<svelte:head>
  <title>Users</title>
  <meta name="description" content="Users" />
</svelte:head>

<div>
  <div class="flex gap-10">
    <div class="w-8/12">
      <UserList />
    </div>
    <div class="w-4/12">
      <UserForm />
    </div>
  </div>
  <div class="grid md:grid-cols-2 gap-5">
    <Counter name="Zannns" />
    <Counter name="Another Zannns" />
  </div>
</div>
