<script lang="ts">
	import Navbar from '$lib/components/Navbar/navbar.svelte';
	import '../app.css';
</script>

<div class="min-h-screen bg-black text-white flex flex-col justify-between">
	<Navbar></Navbar>
	<main class="flex flex-col flex-grow justify-center">
		<slot></slot>
	</main>
</div>
