<script lang="ts">
  import {Button, buttonVariants} from "$lib/components/ui/button";
  import {Input} from "$lib/components/ui/input";
  import {cn} from "$lib/utils";

  interface Product {
    id: number;
    name: string;
    price: number;
    detail?: string;
  }

  let products: Array<Product> = [
    {
      id: 1,
      name: "Product 1",
      price: 1000,
      detail: "Product 1 Detail",
    },
    {
      id: 2,
      name: "Product 2",
      price: 2000,
      detail: "Product 2 Detail",
    },
    {
      id: 3,
      name: "Product 3",
      price: 3000,
    },
  ];

  $: totalProducts = products.length;
  $: totalPrice = `$${products.reduce(function (total, product) {
    return total + product.price;
  }, 0)}`;

  let newProduct: Product = {
    id: products.length + 1,
    name: "",
    price: 0,
  };

  function handleSubmit() {
    products = [...products, newProduct];
    newProduct = {id: products.length + 1, name: "", price: 0};
  }
</script>

<div>
  <h1 class="text-2xl font-bold">Products</h1>

  <div class="flex flex-col my-5">
    <span class="uppercase font-bold text-green-500">
      Total Products : {totalProducts}
    </span>
    <span class="uppercase font-bold text-green-500">
      Total Price : {totalPrice}
    </span>
  </div>

  <div class="w-max border p-6 rounded-xl">
    <h1 class="text-lg font-bold mb-3">Create Product</h1>
    <form class="grid gap-5" on:submit|preventDefault={handleSubmit}>
      <Input
        bind:value={newProduct.name}
        name="name"
        id="name"
        placeholder="Product Name"
      />
      <Input
        name="price"
        id="price"
        bind:value={newProduct.price}
        type="number"
        placeholder="Product Name"
      />
      <Button type="submit" class="w-max place-self-end">New Product</Button>
    </form>
  </div>

  <div class="my-5 grid md:grid-cols-3 gap-5">
    {#each products as product (product.id)}
      <div class="p-3 rounded-lg border-2 border-muted grid">
        <h3 class="text-lg font-bold">{product.name}</h3>
        <h5 class="text-secondary-foreground">${product.price}</h5>
        <p class="text-sm text-muted-foreground">{product?.detail ?? "-"}</p>
        <a
          href={`/products/${product.id}`}
          class={cn(buttonVariants({size: "sm"}), "place-self-end")}
        >
          Detail
        </a>
      </div>
    {/each}
  </div>
</div>
