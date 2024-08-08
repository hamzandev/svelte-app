<script lang="ts">
  import {Button, buttonVariants} from "$lib/components/ui/button";
  import {Input} from "$lib/components/ui/input";
  import {cn} from "$lib/utils";
  import ProductCard from "../../components/custom/ProductCard.svelte";
  import {products as fetchedProducts} from "../../data/product";
  import type {Product} from "../../types";

  function fetchProducts(): Product[] {
    return fetchedProducts;
  }

  let products: Product[] = fetchProducts();

  $: totalProducts = products.length;
  $: totalPrice = products.reduce(function (total, product) {
    return total + product.price;
  }, 0);

  let newProduct: Product = {
    id: products.length + 1,
    name: "",
    price: 0,
  };

  function handleSubmit() {
    products = [...products, {...newProduct, price: Number(newProduct.price)}];
    newProduct = {id: products.length + 1, name: "", price: 0};
  }
</script>

<s-head>
  <title>Products</title>
  <meta name="description" content="Products" />
</s-head>

<div>
  <h1 class="text-2xl font-bold">Products</h1>

  <div class="flex flex-col my-5">
    <span class="uppercase font-bold text-green-500">
      Total Products : {totalProducts}
    </span>
    <span class="uppercase font-bold text-green-500">
      Total Price : ${totalPrice}
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
      <ProductCard {product} />
    {/each}
  </div>
</div>
