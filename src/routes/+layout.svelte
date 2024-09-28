<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Bgbugtest from '$lib/components/bgbugtest.svelte';
	// import StarryBackground from "$lib/components/starryBackground.svelte";

	// TODO: too Slow, find another way
	// onNavigate((navigation) => {
	// 	if (document.startViewTransition) {
	// 		return new Promise((resolve) => {
	// 			document.startViewTransition(async () => {
	// 				resolve();
	// 				await navigation.complete;
	// 			});
	// 		});
	// 	}
	// });
</script>

<main>
	<slot></slot>
</main>

<style>
	main {
		position: relative;
		z-index: 1; /* Ensure content is above the background */
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0%);
		}
	}

	:root::view-transition-old(root) {
		animation: fade-out 200ms ease-out both;
	}

	:root::view-transition-new(root) {
		animation: slide-from-right 200ms ease-out both;
	}
</style>
