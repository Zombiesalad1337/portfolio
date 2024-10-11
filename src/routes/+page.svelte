<script lang="ts">
	import { browser } from '$app/environment';
	import Carousel from 'svelte-carousel';
	import staticData from '$lib/staticData.json';
	import SkillCarouselItem from '$components/skills/skillCarouselItem.svelte';
	import SocialIcon from '$components/socialIcon.svelte';

	let carousel; // for calling methods of the carousel instance
</script>

<div class="px-3.5rem">
	<div class="h-full flex flex-col justify-center items-center">
		<div class="w-full flex justify-center items-center">
			<div>
				<h1 class="text-5xl font-bold">Rohit Choudhary,</h1>
				<h4 class="text-2xl font-light max-w-[36ch]">
					A Software Engineer who embraces simplicity in design and efficiency in implementation
				</h4>
				<div class="flex gap-x-1rem justify-start items-center py-1rem">
					{#each staticData.socialIcon as socialIcon}
						<div>
							<SocialIcon {...socialIcon}></SocialIcon>
						</div>
					{/each}
				</div>
			</div>

			<div class="h-[8rem] max-w-[20rem] min-w-[20rem] flex flex-col justify-center">
				{#if browser}
					<Carousel
						particlesToShow={1}
						particlesToScroll={1}
						arrows={false}
						dots={false}
						autoplay={true}
						duration={150}
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
