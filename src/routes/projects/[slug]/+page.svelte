<script lang="ts">
	import Footer from '$components/footer.svelte';
	import Navbar from '$components/navbar.svelte';
	import ProjectBrandMarquee from '$components/projectBrandMarquee.svelte';
	import ProjectResponsibilites from '$components/projectResponsibilites.svelte';
	import ProjectStaticBanner from '$components/projectStaticBanner.svelte';
	import LetsConnect from '$lib/letsConnect.svelte';

	// TODO: load
	let staticBannerUrl: string = '/blog-1.jpg';
	type Line = {
		text: string;
		style?: string; // Optional style property for each line
	};
	let lines: Line[] = [
		{
			text: 'Air Force',
			style: 'text-white font-pavelt text-[8rem]'
		},
		{
			text: '2024',
			style: 'text-red font-pavelt text-[8rem]'
		}
	]; // Array of lines with optional styles
	let description: string =
		'Chainlink, MDU blocks, custom printed strapping, OSB, and oversized campaign imagery bringing the AF1 story to life in SoHo and the Grove.  Consumer engagement In-store tie dying activation.';

	let content: { heading: string; text: string }[] = [
		{
			heading: 'Responsibilities',
			text: 'Production oversight, Installation/Implementation Oversight, Partner Oversight, Budget oversight.'
		},
		{
			heading: 'Collaborative Partners',
			text: 'Nike Design, Nike Brand and Operations Teams'
		},
		{
			heading: 'Timeline',
			text: '8 Weeks'
		}
	];
</script>

<div class="bg-black">
	<Navbar showAtScrollYMultiplier={0} initiallyVisible={true}></Navbar>

	<ProjectStaticBanner imageUrl={staticBannerUrl} {lines}></ProjectStaticBanner>

	<div class="mx-[10rem] my-[15rem] max-w-[90ch]">
		<p class="text-5xl font-medium text-white">{description}</p>
	</div>

	<ProjectBrandMarquee text={'NIKE'}></ProjectBrandMarquee>

	<div class="grid h-screen max-h-screen grid-cols-2 grid-rows-1 gap-x-[4rem] px-3.5rem">
		<div class="">
			<img src="/hongKong.gif" class="rounded-2xl object-cover" />
		</div>
		<div class="grid grid-rows-2 gap-y-4rem">
			<ProjectResponsibilites {content}></ProjectResponsibilites>
			<div class="h-full"></div>
		</div>
	</div>

	<LetsConnect simplified={true}></LetsConnect>
	<div class="mt-6rem">
		<Footer></Footer>
	</div>
</div>
