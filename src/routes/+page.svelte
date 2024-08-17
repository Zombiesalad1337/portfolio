<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import Navbar from '$lib/components/navbar.svelte';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import ProcessCard from '$lib/components/processCard.svelte';
	import ProcessCardDeprecated from '$lib/components/processCardDeprecated.svelte';
	import ServiceCardDeprecated from '$lib/components/serviceCardDeprecated.svelte';
	import ServiceCard from '$lib/components/serviceCard.svelte';
	import FeaturedProject from '$lib/components/featuredProject.svelte';
	import FeaturedProjectsList from '$lib/components/featuredProjectsList.svelte';
	import staticData from '$lib/staticData.json';
	// import * as Carousel from "$lib/components/ui/carousel/index.ts";
	import * as Card from '$lib/components/ui/card/index.ts';
	import Button from '$lib/components/ui/button/button.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Testimonial from '$lib/components/testimonial.svelte';
	import ConceptCard from '$lib/components/conceptCard.svelte';
	import Header from '$lib/components/header.svelte';
	import LandingPage from '$lib/components/landingPage.svelte';
	import AboutUsPopup from '$lib/components/aboutUsPopup.svelte';
	import { quadInOut } from 'svelte/easing';
	import CarouselSlider from '$lib/components/carouselSlider.svelte';
	import FeaturedProjectsListItem from '$lib/components/featuredProjectsListItem.svelte';
	import CarouselSliderDrag from '$lib/components/carouselSliderDrag.svelte';

  import { highlightedIndex } from '../stores/carouselIndexStore.ts';
	import StarryBackground from '$lib/components/starryBackground.svelte';

	let currentPageIndexGlobal: number = 0;


	let carousel; // for calling methods of the carousel instance const handleNextClick = () => {
	let isAboutUsPopupOpen: boolean = false;

	const handleNextClick = () => {
		carousel.goToNext();
	};
	const options = {};

	const successToast = (m: string) => {
		toast.push(m, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A',
				'--toastBarHeight': 0
			}
		});
	};
	const failureToast = (m: string) => {
		toast.push(m, {
			theme: {
				'--toastColor': 'white',
				'--toastBackground': '#af1315',
				'--toastBarBackground': '#2F855A',
				'--toastBarHeight': 0
			}
		});
	};

	function openAboutUsPopup() {
		isAboutUsPopupOpen = true;
	}

	function carouselGoTo(idx : number) {
		carousel.goTo(idx, { animated: true });
		currentPageIndexGlobal = idx;
	}
	function closeAboutUsPopup() {
		isAboutUsPopupOpen = false;
	}

	export let form;
	$: if (form?.success) {
		successToast('Successfully registered!');
	}
	$: if (form?.invalid) {
		failureToast('Invalid Email');
	}
	$: {
		currentPageIndexGlobal = $highlightedIndex;
		if (carousel){
			carouselGoTo(currentPageIndexGlobal);
		}
	}
</script>

<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
<StarryBackground></StarryBackground>

<LandingPage></LandingPage>

<div class="">
	<Navbar />

	<div id="aboutUs" class="px-3.5rem">
		<div class="my-10rem flex items-center justify-between">
			<button class="flex" on:click={openAboutUsPopup}>
				<img src="/icons/topRightArrow.svg" class="mr-2rem w-5.25rem" />
				<p class="font-pavelt text-5.5xl text-red">About</p>
			</button>
			<div class="max-w-[65%]">
				<p class="break-words text-right font-neuemachina text-4.5xl text-white">
					We are HUMA. A strategic brand agency working across strategy, design, technology...
				</p>
			</div>
		</div>
	</div>

	{#if isAboutUsPopupOpen}
		<div class="h-4/5 w-4/5">
			<AboutUsPopup closePopup={closeAboutUsPopup}></AboutUsPopup>
		</div>
	{/if}

	<!-- TODO: change url on scroll -->
	<div id="Services" class="px-3.5rem">
		<Header name="Services"></Header>

		<p class="text-center font-neuemachina text-4.5xl text-white">
			SPQR, an initialism for Senatus Populusque Romanus (Classical Latin: transl. "The Senate and
			People of Rome"), is an emblematic phrase referring to the government of the Roman Republic.
		</p>

		<div class="container-card my-16 grid grid-cols-12 justify-items-stretch gap-2rem">
			{#each staticData.service as service}
				<div class="col-span-4">
					<ServiceCard {...service}></ServiceCard>
				</div>
			{/each}
		</div>
	</div>

	<div id="Process" class="px-3.5rem">
		<Header name="Process"></Header>
		<p class="text-left font-neuemachina text-4.5xl text-white">
			You can do it with ease, just get on your knees.
		</p>
		<div class="container-card my-16 grid grid-cols-12 justify-items-stretch gap-2rem">
			{#each staticData.process as process}
				<div class="col-span-4">
					<ProcessCard {...process}></ProcessCard>
				</div>
			{/each}
		</div>
	</div>

	<!-- <div class="flex justify-between">
    <h1 id="Insights" class="text-5xl text-red"> Insights </h1>
    <a class="bg-red-500 rounded-full px-8 py-2 text-white text-center" href="/projects">All Projects -></a>
  </div> -->

	<div id="Concepts" class="px-3.5rem">
		<Header name="Concepts"></Header>
		<p class="text-left font-neuemachina text-4.5xl text-white">
			I felt sorry for guys packed into gyms, trying to look like how Calvin Klein or Tommy Hilfiger
			said they should. Is that what a man looks like? Self improvement is masturbation. Now
			self-destruction.
		</p>
		<!-- TODO: infinite scroll bug -->
		<div class="container-card my-16 grid grid-cols-12 justify-items-stretch gap-2rem">
			{#each staticData.concepts as concept}
				<div class="col-span-4">
				<ConceptCard  {...concept}></ConceptCard>
				</div>
			{/each}
		</div>
	</div>

	<div class="px-3.5rem">
		<div class="flex items-center justify-between">
			<h1 class="text-bold font-pavelt text-7xl text-red">Featured Projects</h1>
			<button class="flex items-center">
				<p class="font-pavelt text-4xl text-white">All Projects</p>
				<img src="/icons/topRightArrow.svg" class="ml-2rem w-4.5rem" />
			</button>
		</div>

		<FeaturedProjectsList {...staticData.featuredProjectsList}></FeaturedProjectsList>
	</div>

	<div class="py-10rem"></div>
	<div class="py-10rem"></div>

	{#if browser}
		<Carousel
			let:currentPageIndex
			let:pagesCount
			let:showPage
			particlesToShow={1}
			particlesToScroll={1}
			arrows={false}
			dots={true}
			autoplay={false}
			infinite={false}
			pauseOnFocus={true}
			bind:this={carousel}
		>
			<div slot="dots" class="flex justify-center w-full ">
				{#each Array(3) as _, pageIndex (pageIndex)}
					<CarouselSlider
						symbol={pageIndex + 1}
						active={currentPageIndexGlobal === pageIndex}
						on:click={() => carouselGoTo(pageIndex)}
					></CarouselSlider>
				{/each}
			</div>
			{#each staticData.featuredProjects as featuredProject}
				<FeaturedProject {...featuredProject}></FeaturedProject>
			{/each}
		</Carousel>
	{/if}

	<CarouselSliderDrag></CarouselSliderDrag>
	<h1 id="Process" class="mt-5 font-pavelt text-5xl text-red">Testimonials</h1>

	<div class="grid grid-cols-3 grid-rows-1 gap-x-10">
		<Testimonial></Testimonial>
		<Testimonial></Testimonial>
		<Testimonial></Testimonial>
	</div>

	<div class="m-20"></div>

	<div class="peak-gradient w-full py-20">
		<div class="flex items-center justify-center text-white">
			<img src="/emailSub.svg" class="w-20" />
			<h1 class="text-2xl">Let's Know the World Better</h1>
		</div>

		<div class="text-center text-white">
			<h1 class="text-xl">Subscribe and receive our</h1>
			<h1 class="text-xl">Newsletter to follow the news about</h1>
		</div>

		<div>
			<form method="POST" action="?/subscribe" use:enhance class="flex items-center justify-center">
				<label>
					<input
						name="email"
						type="email"
						class="bg-black-10 h-20 w-[70vw] rounded rounded-2xl text-xl text-white"
						placeholder="Your Email"
					/>
				</label>

				<button formaction="?/subscribe" class="flex items-center justify-center">
					<img src="/subscribeArrow.svg" class="mx-3 w-10" />
				</button>
			</form>
		</div>
		{#if form?.invalid}
			<p class="text-center text-red">Email is invalid</p>
		{/if}
		{#if form?.success}
			<p class="text-green text-center">You are successfully registered</p>
		{/if}
	</div>

	<div class="p-10"></div>

	<div class="flex justify-between">
		<h1 id="Process" class="font-pavelt text-5xl text-red">Testimonials</h1>
		<div>
			<h3 class="text-2xl text-red">Email Address</h3>
			<h3 class="text-xl text-white">humastudios@gmail.com</h3>
		</div>
	</div>

	<div>
		<div class="grid grid-cols-3 grid-rows-2 gap-4">
			<div class="bg-black-10 col-span-1 p-4">Column 1, Row 1</div>
			<div class="bg-black-10 col-span-2 p-4">Column 2, Row 1</div>
			<div class="bg-black-10 col-span-1 p-4">Column 1, Row 2</div>
			<div class="bg-black-10 col-span-2 p-4">Column 2, Row 2</div>
		</div>
	</div>
</div>

<style>
	@import '../app.css';
	:root {
		--toastContainerTop: auto;
		--toastContainerRight: auto;
		--toastContainerBottom: 1rem;
		--toastContainerLeft: calc(100vw - 20rem);
	}

	.container-card {
		box-sizing: border-box;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	@media (min-width: 1024px) {
		.container-card {
		}
	}
	.lg\:grid-cols-3 {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	.font-pavelt {
		font-family: pavelt, sans-serif;
	}

	.peak-gradient {
		background: linear-gradient(to bottom, #000000 0%, #af1315 60%, #af1315 60%, #000000 100%);
	}
</style>
