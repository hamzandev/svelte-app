<script>
import { page } from "$app/stores";

const { productId } = $page.params;
</script>


<div>
    <h1>Product detail for {productId}</h1>
    <div class="flex space-x-5 items-center">
        <span>
            ⭐⭐⭐⭐⭐
        </span>
        <a href={`/products/${productId}/reviews`} class="text-primary underline">See all reviews</a>
    </div>
</div>