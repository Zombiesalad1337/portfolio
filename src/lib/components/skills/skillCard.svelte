<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation'; // Import SvelteKit's goto for programmatic navigation

	export let name = 'Svelte';
	export let description =
		'This is a brief description of the blog post. It flies in from the right on hover.';
	let imgSrc = '/svelte.png';
	export let dominantColor = '#ff3e00'; // Example color for Svelte logo

	let hover = false;
	let isMobile = false;
	let showContent = false;

	

	function onMouseEnter() {
		hover = true;
	}
	function onMouseLeave() {
		hover = false;
	}
	function updateIsMobile() {
		isMobile = window.innerWidth < 768;
	}
	function toggleContent(){
		showContent = !showContent;
	}
	onMount(() => {
		updateIsMobile();
		window.addEventListener('resize', updateIsMobile);
		return () => {
			window.removeEventListener('resize', updateIsMobile);
		};
	});

</script>

<!-- TODO: concept card fonts -->
<div
	transition:fade
	class="~/md:~rounded-[1rem]/[2rem] image-container background-image: aspect-[4] w-full max-w-full md:rounded-2rem url({imgSrc}); transition-hover-card text-white transition {hover && !isMobile
		? 'expand active-hover'
		: 'expand-revert'}"
	style="border: 1px solid {hover && !isMobile ? dominantColor : 'white'};"
	on:mouseover={onMouseEnter}
	on:mouseleave={onMouseLeave}
	on:click={toggleContent}
>
	<div class="background-image" style="background-image: url({imgSrc});"></div>
	<!-- Overlay Gradient -->
	<div class="gradient-overlay absolute inset-0" style="--dominant-color: {dominantColor};"></div>

	<div class="~/md:~px-[0.5rem]/[1rem] ~/md:~py-[0.5rem]/[1rem] md:px-1rem md:py-1rem content flex h-full flex-col justify-between font-neuemachina">
		<div class="md:flex  md:items-center md:h-full">
			<div>
				<p class="font-pavelt ~/md:~text-[1rem]/[2rem] md:text-2rem">{name}</p>
			</div>
		</div>

		<div class="">
			<div
				class="transition-transform-description mt-auto pb-1.5rem {(hover && !isMobile) || showContent
					? 'visible-slide'
					: 'invisible-slide'}"
			>
				<p class="whitespace-pre-line text-base font-medium">{description}</p>
			</div>
		</div>
	</div>
</div>

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
			background-position 0.1s ease,
			translate 0.2s ease,
			scale 0.2s ease,
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
		transform: translateY(+50px);
		opacity: 0;
		transition-delay: 0s;
	}

	.visible-slide {
		transform: translateY(+0px);
		opacity: 1;
		/* transition-delay: 0.1s; */
	}
	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: contain;
		background-position: center right;
		background-repeat: no-repeat;
		filter: blur(0); /* Initially no blur */
		background-origin: border-box;
		transition:
			background-position 0.4s ease,
			translate 0.2s ease,
			filter 0.1s ease;
		transform: translate(0, 0);
	}
	.content {
		position: relative;
		z-index: 1; /* Ensure content is above the background */
	}
	.active-hover:hover .background-image {
		filter: blur(10px); /* Apply blur on hover */
		background-position: bottom -100px right;
		transition-delay: 0s;
	}
	/* New: Gradient Overlay */
	.gradient-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
			var(--dominant-color);
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: 0;
	}

	.active-hover:hover .gradient-overlay {
		opacity: 0.5; /* Control the intensity of the gradient */
	}
</style>
