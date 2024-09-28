<script lang="ts">
	import { fade } from 'svelte/transition';

	export let type = 'Case Study';
	export let title = 'Example Blog Post Title';
	export let description =
		'This is a brief description of the blog post. It flies in from the right on hover.';
	export let imageUrls = ['/blog-9.jpg', '/blog-10.jpg', '/blog-11.jpg'];
	export let date: Date;
	export let likes: number;
	export let slug: string;

	let currentImageIndex = 0;
	let hover = false;

	function nextImage() {
		if (!hover) {
			currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
		}
	}

	// Automatically change image every x seconds
	let interval: number;
	const autoChangeInterval = 5000; // Change image every 5 seconds (5000 milliseconds)

	function startAutoChange() {
		interval = setInterval(() => {
			nextImage();
		}, autoChangeInterval);
	}

	function stopAutoChange() {
		clearInterval(interval);
	}

	function onMouseEnter() {
		hover = true;
	}
	function onMouseLeave() {
		hover = false;
	}

	// Start auto change on component mount
	import { onMount } from 'svelte';

	onMount(() => {
		startAutoChange();
		return stopAutoChange; // Clean up on component unmount
	});
</script>

<!-- TODO: concept card fonts -->
{#each [currentImageIndex] as index (index)}
	<a href={`/concepts/${slug}`} class="no-underline">
		<div
			transition:fade
			class="image-container background-image: aspect-[0.834] w-full max-w-full cursor-pointer rounded-3xl url({imageUrls[
				currentImageIndex
			]}); transition-hover-card text-white transition {hover ? 'expand' : 'expand-revert'}"
			animate:fade={{ duration: 3000 }}
			on:mouseover={onMouseEnter}
			on:mouseleave={onMouseLeave}
			on:focus={onMouseEnter}
		>
			<div
				class="background-image"
				style="background-image: url({imageUrls[currentImageIndex]});"
			></div>
			<div class="content flex h-full flex-col justify-between px-1rem py-1rem font-neuemachina">
				<div class="px-0.5rem py-2rem">
					<p class="text-right font-pavelt text-2xl text-white">
						{type}
					</p>

					<div>
						<p class="py-3rem text-right font-pavelt text-xl">{title}</p>
					</div>
				</div>

				<div>
					<div
						class="transition-transform-description mt-auto pb-4rem {hover
							? 'visible-slide'
							: 'invisible-slide'}"
					>
						<p class="whitespace-pre-line text-right text-base font-medium">{description}</p>
					</div>
					<div class="flex items-center justify-between">
						<div
							class="flex items-center gap-0.25rem rounded-full border-2 border-red px-1rem py-0.25rem"
						>
							<img src="/likesHeart.svg" class="w-2rem" />
							<p class="text-2xl text-white">{likes}</p>
						</div>
						<div>
							<p class="font-mono text-2xl font-bold text-white">{date}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</a>
{/each}

<style>
	/* .image-container {
    transition: opacity 0.8s ease;
    background-size: cover; 
    background-position: center;
  } */
	.image-container {
		position: relative;
		overflow: hidden;
	}
	.transition-transform-description {
		transition:
			transform 0.5s ease,
			opacity 0.5s ease;
	}

	.transition-hover-card {
		transition:
			background-position 0.5s ease,
			translate 0.5s ease,
			scale 0.5s ease,
			blur 0.1s ease;
	}
	.expand {
		background-position: bottom right;
		translate: (500px, 500px);
		scale: 1.05;
	}
	.expand-revert {
		transform: translate(0, 0), scale(1);
	}
	.invisible-slide {
		transform: translateX(+50px);
		opacity: 0;
		transition-delay: 0s;
	}

	.visible-slide {
		transform: translateX(+0px);
		opacity: 1;
		transition-delay: 0.3s;
	}
	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: auto;
		background-position: center;
		filter: blur(0); /* Initially no blur */
		background-origin: border-box;
		transition:
			background-position 0.5s ease,
			translate 0.2s ease,
			filter 0.5s ease;
		transform: translate(0, 0);
		transition-delay: 0.15s;
	}
	.content {
		position: relative;
		z-index: 1; /* Ensure content is above the background */
	}
	.image-container:hover .background-image {
		filter: blur(5px); /* Apply blur on hover */
		background-position: bottom -100px right;
		transition-delay: 0s;
	}
</style>
