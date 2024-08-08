<!-- This Component is consumer 
of the "cart-ctx" that was set in Header.svelte -->
<script lang="ts">
  import {Button} from "$lib/components/ui/button";
  import {getContext} from "svelte";

  let cart = getContext("cart-ctx");
</script>

<Button variant="secondary">
  🛒 My Cart
  <span
    class="text-sm bg-primary rounded-full w-5 h-5 flex items-center justify-center ms-1"
  >
    {cart}
  </span>
</Button>
