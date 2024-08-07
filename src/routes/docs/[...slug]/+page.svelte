<script>
  import {page} from "$app/stores";

  const {slug} = $page.params;
  const slugArr = slug.split("/");

  let brcb = " / ";
  if (slugArr[0] !== "") {
    brcb += slugArr.join(" ▶ ");
  } else {
    brcb = "";
  }
</script>

<div>
  <h1>
    Docs {brcb}
  </h1>

  <div class="space-y-3 my-3">
    <div class="border-2 border-muted p-3">
      <a href="/docs/prolouge" class="font-bold">Prolouge</a>
    </div>
    <div class="border-2 border-muted p-3">
      <a href="/docs/installation" class="font-bold">Installation</a>
    </div>
    <div class="border-2 border-muted p-3">
      <a href="/docs/configuration" class="font-bold">Configuration</a>
    </div>
    <div class="border-2 border-muted p-3">
      <a href="/docs/components" class="font-bold">Components</a>
    </div>
    <div class="border-2 border-muted p-3">
      <a href="/docs/deployment" class="font-bold">Deployment</a>
    </div>
  </div>
</div>
