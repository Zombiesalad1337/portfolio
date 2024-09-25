<script lang="ts">
	import Footer from '$components/footer.svelte';
	import Navbar from '$components/navbar.svelte';
	import ProjectBrandMarquee from '$components/projectBrandMarquee.svelte';
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
</script>

<div class="bg-black">
	<Navbar showAtScrollYMultiplier={0} initiallyVisible={true}></Navbar>

	<ProjectStaticBanner imageUrl={staticBannerUrl} {lines}></ProjectStaticBanner>

	<ProjectBrandMarquee text={'NIKE'}></ProjectBrandMarquee>

	<div class="mx-[10rem] my-[15rem] max-w-[90ch]">
		<p class="text-5xl font-medium text-white">{description}</p>
	</div>

	<LetsConnect simplified={true}></LetsConnect>
	<Footer></Footer>
</div>
