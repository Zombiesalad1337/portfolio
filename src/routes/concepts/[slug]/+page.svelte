<script lang="ts">
	import { Toc } from 'svelte-toc';
	import { page } from '$app/stores';
	import BlogCard from '$lib/components/blogCard.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import ThemeToggle from '$lib/components/themeToggle.svelte';
	import BlogSocialIcon from '$lib/components/blogSocialIcon.svelte';
	import NewsLetterCta from '$components/newsLetterCTA.svelte';
	import staticData from '$lib/staticData.json';
	import Footer from '$components/footer.svelte';
	import ConceptCard from '$lib/components/conceptCard.svelte';
	import LetsConnect from '$lib/letsConnect.svelte';
	import { ssrImportKey } from 'vite/runtime';
	import { goto } from '$app/navigation'; // Import SvelteKit's goto for programmatic navigation
	import ConceptCardIndex from '$components/conceptCardIndex.svelte';

	function goBack() {
		goto('/concepts'); // Programmatically navigate to the blog's slug
	}

	export let data: any;
	let headings: HTMLHeadingElement[] = [];

	$: headingSelector = `:is(h2, h3, h4):not(.toc-exclude)`;
</script>

<Navbar showAtScrollYMultiplier={0} initiallyVisible={true}></Navbar>
<div class="transition-background bg-white px-3.5rem duration-[300ms] ease-in-out dark:bg-black">
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
			class="mb-4rem h-auto max-h-[46rem] w-full object-cover"
		/>

		<div class="prose mb-[8rem] mt-[12rem] flex !max-w-none">
			<div class="w-[30%]">
				<Toc
					bind:headings
					{headingSelector}
					--toc-li-hover-color="#af1315"
					--toc-active-bg="#af1315f1"
					--toc-active-border-radius="0"
				>
					<div slot="title">
						<button
							class="rounded-full bg-red px-4rem py-1rem font-pavelt text-lg text-white transition duration-150 hover:scale-105"
							on:click={() => goBack()}
						>
							Go Back
						</button>

						<div class="mx-auto mt-2.5rem h-[1px] bg-gray-800"></div>

						<p class="font-red font-neuemachina text-2xl font-bold text-red">Table of Contents:</p>
					</div>
					<span let:idx let:heading slot="toc-item" class=" dark:text-white">
						{heading.innerText}
					</span>
				</Toc>
			</div>
			<div class="blog mx-2rem w-[70%]">
				<svelte:component this={data.content} {...data.metadata} />
			</div>
		</div>

		<h1 class="mb-6rem font-pavelt text-8.5xl text-red">Related Resources</h1>
		<div class="container-card my-16 grid grid-cols-12 justify-items-stretch gap-4rem">
			<!-- TODO: pass parent data here -->
			<!-- or calculate data depending on type -->
			{#each staticData.concepts.slice(0, 3) as concept}
				<div class="col-span-4">
					<ConceptCardIndex {...concept}></ConceptCardIndex>
				</div>
			{/each}
		</div>

		<NewsLetterCta></NewsLetterCta>
		<LetsConnect simplified={true}></LetsConnect>
	</div>
</div>

<div class=" dark:bg-black">
	<Footer></Footer>
</div>
