<script lang="ts">
	import { Toc } from 'svelte-toc';
	import { page } from '$app/stores';
	import BlogCard from '$lib/components/blogCard.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import ThemeToggle from '$lib/components/themeToggle.svelte';
	import BlogSocialIcon from '$lib/components/blogSocialIcon.svelte';

	export let data: any;
	$: headingSelector =
		{ '/contributing': `main > h2`, '/changelog': `main > h4` }[$page.url.pathname] ??
		`main :where(h2, h3)`;
</script>

<Navbar showAtScrollYMultiplier={0} initiallyVisible={true}></Navbar>
<div class="bg-white px-3.5rem transition-colors duration-300 ease-in-out dark:bg-black">
	<div class="flex justify-end py-5rem">
		<ThemeToggle></ThemeToggle>
	</div>

	<div class="flex font-neuemachina">
		<div class="w-4/5">
			<!-- TODO: reduce gap on after mobile breakpoint triggered -->
			<!-- TODO: rhs lighter font -->
			<span class="rounded-full bg-red px-2rem py-1rem text-center text-xl font-medium text-white">
				Resources / {data.metadata.category}
			</span>
		</div>
		<div class="w-1/5 text-right text-lg">
			<p>Published on <strong>{data.metadata.date}</strong></p>
			<p>Read time <strong>{data.metadata.readTime}</strong></p>
		</div>
	</div>

	<div class="">
		<div class="flex pb-20 pt-20">
			<!-- TODO: TEST: for multiline headings -->
			<div class="w-4/5">
				<p class="font-neuemachina text-6.5xl font-medium text-red">{data.metadata.title}</p>
			</div>
			<div class="flex w-1/5 flex-col items-end">
				<div class="mt-auto">
					<div class="flex items-center space-x-0.5rem font-neuemachina text-xl">
						<p>Share:</p>
						<!-- TODO: Add dynamic sharable link logic -->
						<BlogSocialIcon imgSrc={'/icons/facebook.svg'} url="https://www.youtube.com"
						></BlogSocialIcon>
						<BlogSocialIcon imgSrc={'/icons/facebook.svg'} url="https://www.youtube.com"
						></BlogSocialIcon>
						<BlogSocialIcon imgSrc={'/icons/facebook.svg'} url="https://www.youtube.com"
						></BlogSocialIcon>
					</div>
				</div>
			</div>
		</div>

		<img
			src={data.metadata.headerImage}
			alt="Description of image"
			class="mb-10 h-auto max-h-[50vh] w-full object-cover"
		/>

		<div class="prose mb-20 flex !max-w-none">
			<div class="mr-10 w-1/5">
				<Toc />
				<div>Find me in the alps</div>
			</div>
			<div class="w-4/5">
				<svelte:component this={data.content} {...data.metadata} />
			</div>
		</div>

		<h1 class="mb-5 text-4xl">Related Resources</h1>
		<div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each data.blogs.slice(0, 3) as blog}
				<div>
					<BlogCard {...blog} />
				</div>
			{/each}
		</div>
	</div>
</div>
