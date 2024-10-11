<script lang="ts">
	import { browser } from '$app/environment';
	import Carousel from 'svelte-carousel';
	import staticData from '$lib/staticData.json';
	import SkillCarouselItem from '$components/skills/skillCarouselItem.svelte';

	let carousel; // for calling methods of the carousel instance
</script>

<div class="px-3.5rem">
	<div class="h-full flex flex-col justify-center items-center">
		<div class="w-full flex justify-center items-center">
			<div>
				<h1 class="text-4xl font-bold">Name,</h1>
				<h4 class="text-2xl font-light max-w-[36ch]">
					A Software Engineer who embraces simplicity in design and efficiency in implementation
				</h4>
			</div>

			<div class="h-[6rem] max-w-[20rem] min-w-[20rem] flex flex-col justify-center">
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
						{#each staticData.skills as skill}
							<SkillCarouselItem {...skill}></SkillCarouselItem>
						{/each}
					</Carousel>
				{/if}
			</div>
		</div>
	</div>
</div>
