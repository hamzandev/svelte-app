<script>
import { page } from "$app/stores";

const { productId } = $page.params;
</script>

<div>
  <h1>All Product Reviews</h1>

  <div class="space-y-3">
    <div class="border-2 border-muted p-2 w-[320px]">
      <a href={`/products/${productId}/reviews/9as76d7a7s67asd12-d8asd89de`} class="text-2xl font-bold">Review 1</a>
    </div>
    <div class="border-2 border-muted p-2 w-[320px]">
      <a href={`/products/${productId}/reviews/9as76d7a7s67asd12-d8asd89de`} class="text-2xl font-bold">Review 2</a>
    </div>
    <div class="border-2 border-muted p-2 w-[320px]">
      <a href={`/products/${productId}/reviews/9as76d7a7s67asd12-d8asd89de`} class="text-2xl font-bold">Review 3</a>
    </div>
    <div class="border-2 border-muted p-2 w-[320px]">
      <a href={`/products/${productId}/reviews/9as76d7a7s67asd12-d8asd89de`} class="text-2xl font-bold">Review 4</a>
    </div>
    <div class="border-2 border-muted p-2 w-[320px]">
      <a href={`/products/${productId}/reviews/9as76d7a7s67asd12-d8asd89de`} class="text-2xl font-bold">Review 5</a>
    </div>
  </div>
</div>
