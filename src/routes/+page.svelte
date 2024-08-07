<script>
import AlertDialog from "../components/custom/AlertDialog.svelte";
import EditProfile from "../components/custom/EditProfile.svelte";
import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
    <title>Svelte + Shadcn UI</title>
	<meta name="description" content="Built by Zanns" />
</svelte:head>

<div>
    <h1>Homepage</h1>

    <AlertDialog/>
    <span class="mx-3">VS</span>
    <EditProfile/>
</div>