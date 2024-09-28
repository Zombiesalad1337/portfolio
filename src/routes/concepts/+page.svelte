<script lang="ts">
	import staticData from '$lib/staticData.json';

	// let blogData = JSON.parse(staticData);

	import TocLayout from '$lib/components/tocLayout.svelte';

	import Toc from 'svelte-toc';

	import BlogCard from '$lib/components/blogCard.svelte';
	import Navbar from '$components/navbar.svelte';
	import ThemeToggle from '$components/themeToggle.svelte';

	export let data: { title: string; date: string; slug: string }[];
</script>

<Navbar showAtScrollYMultiplier={0} initiallyVisible={true}></Navbar>
<div class="transition-background bg-white px-3.5rem duration-[300ms] ease-in-out dark:bg-black">
	<div class="flex justify-end py-5rem">
		<ThemeToggle></ThemeToggle>
	</div>
</div>
