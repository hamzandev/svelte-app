<script lang="ts">
  import {Button} from "$lib/components/ui/button";

  /* Props*/
  export let name = "Unknown";

  /* State & reactive*/
  let countState = 0;
  function handleClick() {
    countState += 1;
  }

  /* $: syntax usage example*/
  function formatTitle(name: string) {
    return `Counter App by : ${name}.`.toUpperCase();
  }
  $: titleMessage = formatTitle(name);
</script>

<div class="my-3 border-2 border-muted p-3 rounded">
  <h1 class="text-2xl font-bold">{titleMessage}</h1>
  <p class="text-lg">Count: {countState}</p>
  <Button on:click={handleClick}>Increase Count</Button>
</div>
