<script lang="ts">
  import {Button, buttonVariants} from "$lib/components/ui/button";
  import {cn} from "$lib/utils";

  export let product;
</script>

<div class="p-3 rounded-lg border-2 border-muted grid">
  <h3 class="text-lg font-bold">{product.name}</h3>
  <h5 class="text-secondary-foreground">${product.price}</h5>
  <p class="text-sm text-muted-foreground">{product?.detail ?? "-"}</p>
  <div class="flex gap-3 place-self-end">
    <Button
      on:click={() => alert("This feature will be available later!")}
      variant="secondary">🛒 Cart</Button
    >
    <a href={`/products/${product.id}`} class={cn(buttonVariants({}))}>
      🛍 Detail
    </a>
  </div>
</div>
