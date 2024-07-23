<script lang="ts">
	import { enhance } from '$app/forms';
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

	let carousel; // for calling methods of the carousel instance const handleNextClick = () => {
      const handleNextClick = () => {
      carousel.goToNext()
  }
	const options = {};

	const successToast = (m : string) => {
		toast.push(m, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A',
				'--toastBarHeight': 0
			}
		});
	};
	const failureToast = (m : string) => {
		toast.push(m, {
			theme: {
					'--toastColor': 'white',
					'--toastBackground': '#af1315',
					'--toastBarBackground': '#2F855A',
					'--toastBarHeight': 0
			}
		});
	};

	export let form;
    $: if (form?.success) {
    successToast("Successfully registered!");
  }
    $: if (form?.invalid) {
    failureToast("Invalid Email");
  }
</script>

<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
<div class="bg-black px-8">
	<Navbar />

	<button on:click={handleNextClick}>Next</button>

	<h1 id="Services" class="text-bold font-pavelt text-5xl text-red">Services</h1>

	<p class="text-white">
		Let me tell you what GOD said next. He said, “You’re my son, And today is your birthday. What do
		you want? Name it: Nations as a present? continents as a prize? You can command them all to
		dance for you, Or throw them out with tomorrow’s trash.” So, rebel-kings, use your heads;
		Upstart-judges, learn your lesson: Worship GOD in adoring embrace, Celebrate in trembling awe.
		Kiss Messiah! Your very lives are in danger, you know; His anger is about to explode, But if you
		make a run for God—you won’t regret it!
	</p>

	<!-- <div class="flex justify-center mx-4 space-x-4">
    {#each staticData.service as service}
      <div class="w-1/3 px-2 aspect-square">
        <ServiceCard {...service}></ServiceCard>
      </div>
    {/each}
  </div>
  <div class="flex items-center justify-between"> -->

	<div class="container-card my-16 grid gap-x-10 gap-y-10 lg:my-24 lg:grid-cols-3 lg:gap-y-8">
		{#each staticData.service as service}
			<ServiceCard {...service}></ServiceCard>
		{/each}
	</div>

	<h1 id="Process" class="font-pavelt text-5xl text-red">Process</h1>

	<div class="container-card my-16 grid gap-x-10 gap-y-10 lg:my-24 lg:grid-cols-3 lg:gap-y-8">
		{#each staticData.process as process}
			<ProcessCard {...process}></ProcessCard>
		{/each}
	</div>

	<!-- <div class="flex justify-between">
    <h1 id="Insights" class="text-5xl text-red"> Insights </h1>
    <a class="bg-red-500 rounded-full px-8 py-2 text-white text-center" href="/projects">All Projects -></a>
  </div> -->

	<h1 id="Concepts" class="font-pavelt text-5xl text-red">Concepts</h1>
	<p class="text-2xl text-white">
		I felt sorry for guys packed into gyms, trying to look like how Calvin Klein or Tommy Hilfiger
		said they should. Is that what a man looks like? Self improvement is masturbation. Now
		self-destruction.
	</p>

	<div class="container-card my-16 grid gap-x-10 gap-y-10 lg:my-24 lg:grid-cols-3 lg:gap-y-8">
		{#each staticData.concepts as concept}
			<ConceptCard {...concept}></ConceptCard>
		{/each}
	</div>

	<h1 id="FeaturedProjects" class="font-pavelt text-5xl text-red">FEATURED PROJECTS</h1>

	<FeaturedProjectsList {...staticData.featuredProjectsList}></FeaturedProjectsList>

	{#if browser}
		<Carousel
			particlesToShow={1}
			particlesToScroll={1}
			arrows={false}
			dots={true}
			autoplay={false}
			infinite={false}
			pauseOnFocus={true}
			bind:this={carousel}
		>
			{#each staticData.featuredProjects as featuredProject}
				<FeaturedProject {...featuredProject}></FeaturedProject>
			{/each}
		</Carousel>
	{/if}

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
						class="rounded rounded-2xl bg-black-10 text-white text-xl w-[70vw] h-20"
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
</div>

<style>
	:root {
		--toastContainerTop: auto;
		--toastContainerRight: auto;
		--toastContainerBottom: 1rem;
		--toastContainerLeft: calc(100vw - 20rem);
	}
	@import '../app.css';

	.container-card {
		box-sizing: border-box;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		max-width: 2000px;
		padding-left: 1rem;
		padding-right: 1rem;
	}
	@media (min-width: 1024px) {
		.container-card {
			padding-left: 2rem;
			padding-right: 2rem;
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
