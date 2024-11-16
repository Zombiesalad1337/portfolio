<script lang="ts">
	import Navbar from '$lib/components/Navbar/navbar.svelte';
	import '../app.css';
</script>

<div class="bg-background">
	<Navbar></Navbar>
	<main class="">
		<slot></slot>
	</main>
</div>
