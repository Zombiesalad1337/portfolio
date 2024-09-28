<script lang="ts">
	import { onMount } from 'svelte';
	import { isDarkMode } from '$lib/stores/theme';
	import Navbar from '$components/navbar.svelte';
	import ThemeToggle from '$components/themeToggle.svelte';
	import ConceptCardIndex from '$components/conceptCardIndex.svelte';

	export let data: { blogs: Blog[]; totalBlogs: number }; // Define the expected structure of the data prop

	type Blog = {
		id: number;
		type: string;
		title: string;
		description: string;
		imageUrls: string[];
		date: string;
		likes: number;
	};

	const { blogs, totalBlogs } = data; // Destructure the blogs and totalBlogs from data
	let loadedBlogs: Blog[] = blogs; // Initialize loadedBlogs with the blogs from the data
	let displayedBlogs: Blog[] = blogs; // New array to hold the displayed blogs based on filter
	const blogsPerLoad = 8; // Number of blogs to load each time
	let isLoading = false;

	let currentFilter = 'All'; // State for current filter

	let filters: string[] = ['All', 'Business', 'Design', 'Experience'];
	function filterBlogs(type: string) {
		currentFilter = type;

		// Filter the already loaded blogs for display
		displayedBlogs = loadedBlogs.filter(
			(blog) => currentFilter === 'All' || blog.type === currentFilter
		);

		// If displayedBlogs is less than the required amount, load more
		if (displayedBlogs.length < blogsPerLoad) {
			loadMore();
		}
	}

	async function loadMore() {
		if (isLoading) return;
		isLoading = true;

		// Send a POST request to load more data from the server
		const response = await fetch('/api/concepts', {
			// Update the endpoint to the API route
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				offset: loadedBlogs.length,
				limit: blogsPerLoad
			})
		});

		if (response.ok) {
			const result = await response.json();
			loadedBlogs = [...loadedBlogs, ...result.blogs]; // Append the new blogs
		}

		isLoading = false;
	}

	onMount(() => {
		isDarkMode.set(true);
		document.documentElement.classList.add('dark');
	});
</script>

<Navbar showAtScrollYMultiplier={0} initiallyVisible={true}></Navbar>

<div class="transition-background bg-white px-3.5rem duration-[300ms] ease-in-out dark:bg-black">
	<div class="flex justify-end py-5rem">
		<ThemeToggle></ThemeToggle>
	</div>

	<div class="flex items-center justify-between">
		<h1 class="font-pavelt text-9.5xl text-red">Insights</h1>
		<div
			class="flex items-center justify-around space-x-0.5rem rounded-full border-2 border-red px-1rem py-0.5rem font-neuemachina text-xl text-red"
		>
			{#each filters as filter}
				<button
					on:click={() => filterBlogs(filter)}
					class="px-2rem py-1rem hover:rounded-full hover:bg-white {currentFilter === filter
						? 'rounded-full bg-white'
						: ''}">{filter}</button
				>
			{/each}
		</div>
	</div>

	<p class="font-neuemachina text-3.5xl text-black dark:text-white">
		Here you can find all the latest happenings in the actual world that differs a lot from your
		dark moms basement
	</p>

	<div class="container-card my-16 grid grid-cols-4 justify-items-stretch gap-4rem">
		<!-- TODO: id used for performance while rendering, prevents rerenders, use everywhere -->
		{#each loadedBlogs as blog (blog.id)}
			<div class="">
				<ConceptCardIndex {...blog}></ConceptCardIndex>
			</div>
		{/each}
	</div>
	<!-- "Load More" button -->
	{#if loadedBlogs.length < totalBlogs}
		<div class="mt-8 flex justify-center text-white">
			<button
				class="btn btn-primary min-w-[10ch] rounded-full bg-red px-2rem py-1rem font-pavelt text-2xl"
				on:click={loadMore}
				disabled={isLoading}
			>
				{isLoading ? 'Loading...' : 'Load More'}
			</button>
		</div>
	{/if}

	<div class="py-[20rem]">t</div>
</div>
