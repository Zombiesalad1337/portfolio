<script lang="ts">
	import { onMount } from 'svelte';
	import { CodesandboxLogo } from 'svelte-radix';

	export let images: string[] = [];
	let currentIndex: number = 0;

	const nextImage = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	let interval: ReturnType<typeof setInterval>;

	const startSlideshow = () => {
		nextImage();
		interval = setInterval(nextImage, 3000); // Change image every 3 seconds
	};

	const pauseSlideshow = () => {
		clearInterval(interval);
	};

	onMount(() => {
		interval = setInterval(nextImage, 3000); // Change image every 3 seconds
		return () => clearInterval(interval);
	});
</script>

<div
	class="relative h-full overflow-hidden
  "
>
	{#each images as image, index}
		<div
			class="absolute inset-0 transition-transform duration-700 ease-in-out"
			style="transform: translateY({(index - currentIndex) * 100}%);"
			on:mouseover={pauseSlideshow}
			on:mouseleave={startSlideshow}
		>
			<img
				src={image}
				alt={`Slideshow Image ${index + 1}`}
				class=" h-full w-full rounded-2xl object-cover"
			/>
		</div>
	{/each}
</div>

<style>
	/* Add any additional styles here */
</style>
