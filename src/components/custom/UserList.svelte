<script lang="ts">
  import type {User} from "../../types";

  const users: Array<User> = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@me.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@me.com",
    },
    {
      id: 3,
      name: "Hamzan Wahyudi",
      email: "zannns@me.com",
    },
  ];
</script>

<h1 class="text-lg font-bold mb-3">User List</h1>
<div class="grid md:grid-cols-3 gap-5">
  {#each users as user (user.id)}
    <div class="border-2 border-muted rounded p-3">
      <h1 class="text-2xl font-bold">{user.name}</h1>
      <p class="text-muted-foreground text-lg">{user.email}</p>
    </div>
  {/each}
</div>
