<script lang="ts">
	import staticData from '$lib/staticData.json';

	// let blogData = JSON.parse(staticData);

	import TocLayout from '$lib/components/tocLayout.svelte';

	import Toc from 'svelte-toc';

	import BlogCard from '$lib/components/blogCard.svelte';
	import Navbar from '$components/navbar.svelte';
	import ThemeToggle from '$components/themeToggle.svelte';
	import ConceptCardIndex from '$components/conceptCardIndex.svelte';

	export let data: {
		type: string;
		title: string;
		description: string;
		imageUrls: string[];
		date: string;
		likes: number;
	}[];
</script>

<Navbar showAtScrollYMultiplier={0} initiallyVisible={true}></Navbar>

<div class="transition-background bg-white px-3.5rem duration-[300ms] ease-in-out dark:bg-black">
	<div class="flex justify-end py-5rem">
		<ThemeToggle></ThemeToggle>
	</div>

	<h1 class="font-pavelt text-9.5xl text-red">Insights</h1>

	<p class="font-neuemachina text-3.5xl text-white">
		Here you can find all the latest happenings in the actual world that differs a lot from your
		dark moms basement
	</p>

	<div class="container-card my-16 grid grid-cols-12 justify-items-stretch gap-4rem">
		{#each data.blogs.slice(0, 4) as concept}
			<div class="col-span-3">
				<ConceptCardIndex {...concept}></ConceptCardIndex>
			</div>
		{/each}
	</div>
	<div class="py-[20rem]">t</div>
</div>
