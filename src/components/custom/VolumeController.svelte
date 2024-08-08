<script>
  let volume = 0;

  // Reactive statement example
  $: if (volume == 15)
    alert("Are you sure? High volume might damage your earphones!");
</script>

<div class="p-5 rounded-lg border-2 border-muted w-max text-center">
  <h1 class="text-lg font-bold mb-3">Volume Controller</h1>
  <p class="uppercase font-bold">Volume : {volume}</p>
  <input type="range" max="20" bind:value={volume} />
</div>
