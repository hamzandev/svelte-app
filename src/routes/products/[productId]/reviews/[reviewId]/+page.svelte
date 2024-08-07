<script>
  import {page} from "$app/stores";

  const {reviewId, productId} = $page.params;
</script>

<div>
  <h1>
    Showing detailed <strong>{productId}</strong> review by user :
    <strong>{reviewId}</strong>
  </h1>
</div>
