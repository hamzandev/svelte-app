<script>
import { ModeWatcher } from "mode-watcher";
import "../app.css";
import Header from "../components/shared/Header.svelte";
</script>

<div class="app">
	<Header/>
	<main class="container mx-auto py-3">
		<slot></slot>
	</main>
	<ModeWatcher />
</div>


