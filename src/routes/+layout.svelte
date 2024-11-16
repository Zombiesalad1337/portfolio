<script lang="ts">
	import Navbar from '$lib/components/Navbar/navbar.svelte';
	import '../app.css';
</script>

<div class="bg-background flex flex-col min-h-screen justify-center">
	<Navbar></Navbar>
	<main class="flex flex-col flex-grow justify-center">
		<slot></slot>
	</main>
</div>
