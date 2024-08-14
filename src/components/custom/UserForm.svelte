<script lang="ts">
  import {goto, beforeNavigate, afterNavigate} from "$app/navigation";
  import {Button} from "$lib/components/ui/button";
  import {Input} from "$lib/components/ui/input";
  import {Label} from "$lib/components/ui/label";
  import type {User} from "../../types";

  let userFormData: Partial<User> = {
    name: "",
    email: "",
    married: false,
    languages: [],
  };

  function handleSubmit() {
    goto("/users/created");
  }

  beforeNavigate(function (navigation) {
    console.log({beforeNavigate: navigation});
  });

  afterNavigate(function (navigation) {
    console.log({afterNavigate: navigation});
  });
</script>

<main>
  <form on:submit|preventDefault={handleSubmit} class="grid gap-4">
    <h1 class="text-lg font-bold">Create new User</h1>
    <Input
      placeholder="Fullname"
      autocomplete="off"
      type="text"
      bind:value={userFormData.name}
    />
    <Input
      placeholder="Email"
      type="email"
      autocomplete="off"
      bind:value={userFormData.email}
    />

    <div class="flex items-center space-x-2">
      <input
        type="checkbox"
        value="php"
        id="php"
        bind:group={userFormData.languages}
      />
      <Label
        for="php"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        PHP
      </Label>
    </div>
    <div class="flex items-center space-x-2">
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        bind:group={userFormData.languages}
      />
      <Label
        for="javascript"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Javascript
      </Label>
    </div>
    <div class="flex items-center space-x-2">
      <Label
        for="php"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        PHP
      </Label>
    </div>

    <div class="flex items-center space-x-2">
      <input type="checkbox" id="terms" bind:checked={userFormData.married} />
      <Label
        for="terms"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I am married
      </Label>
    </div>

    <Button type="submit" class="w-max place-self-end">Submit</Button>
  </form>
</main>
