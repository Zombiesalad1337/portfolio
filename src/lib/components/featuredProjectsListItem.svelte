<script lang="ts">
	export let title: string;
	export let company: string;
	export let type: string;
	export let link: string;
	export let images: string[];
	export let index: number;

	import { browser } from '$app/environment';
	import Carousel from 'svelte-carousel';

	let carousel; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>

<a href={link}>
	<div
		class="group relative flex justify-between border-b-2 pb-4 pt-4 {index == 0
			? 'border-t-2'
			: ''} duration-600 border-red-800 transition ease-in-out hover:bg-red-700"
	>
		<div class="font-neuemachina text-4.5xl text-white">
			{title}
		</div>

		<div class="flex flex-col items-end justify-center text-right">
			<p class="text-weight font-pavelt text-base text-white">{company}</p>
			<!-- TOOD: find better color -->
			<p class="font-neuemachina text-base text-gray-600">{type}</p>
		</div>
		<div
			class="z-10 absolute left-1/2 top-1/2 hidden  group-hover:block w-[40rem] aspect-[4/3] object-cover"
		>
			<!-- TODO: Fuck slide, use custom fade form concept card -->
			{#if browser}
				<Carousel
					particlesToShow={1}
					particlesToScroll={1}
					arrows={false}
					dots={false}
					autoplay={true}
					duration={200}
					autoplayProgressVisible={false}
					bind:this={carousel}
				>
					{#each images as img}
						<!-- <div class=" pt-0 top-0 bottom-auto right-0 left-auto overflow-hidden z-0 rounded-lg"> -->
                        <div class="">
						    <img src={img} alt="Projects" class="radius-20 rounded-3xl overflow-hidden max-h-[30rem]" />
                        </div>
					{/each}
				</Carousel>
			{/if}
		</div>
	</div>
</a>

<style>
</style>
