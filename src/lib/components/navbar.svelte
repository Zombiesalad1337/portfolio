<script lang="ts">
	import { onMount } from 'svelte';
	let activeLink = 'Services';

	let navs = ['Services'];
	let showNavbar: boolean = false;
	onMount(() => {
		const handleScroll = () => {
			if (window.scrollY > 0.9 * window.innerHeight) {
				showNavbar = true;
			} else {
				showNavbar = false;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

	<!-- TODO: breaks for mobile view, handle -->
<nav
	class="navbar {showNavbar ? 'visible' : ''} w-full items-center grid grid-cols-12 px-3.5rem gap-2rem"
>
	<div class="col-span-4">
		<!-- TODO: GET SVG OF LOGO, then animate -->
		<img class="h-20" src="/logo-header.png" alt="Logo" />
	</div>
	<div class="col-span-4 content-right font-pavelt">
		<div
			class="flex transform justify-between px-2 space-x-2 rounded-full bg-red py-1 text-white"
		>
			<a
				href="#Services"
				class="relative rounded-full px-6 py-2 text-sm font-medium  hover:bg-black hover:text-white"
			>
				Services
			</a>
			<a
				href="#Process"
				class="relative rounded-full px-6 py-2 text-sm font-medium  hover:bg-black hover:text-white"
			>
				Process
			</a>
			<a
				href="#Insights"
				class="relative rounded-full px-6 py-2 text-sm font-medium  hover:bg-black hover:text-white"
			>
				Insights
			</a>
			<a
				href="#Connect"
				class="relative rounded-full px-6 py-2 text-sm font-medium  hover:bg-black hover:text-white"
			>
				Connect
			</a>
		</div>
	</div>
	<div class="col-span-4 flex justify-end">
		<button class="rounded-full bg-red px-4 py-2 text-white md:block">
			<span class="flex items-center justify-around">
				Let's Talk
				<span class="btn-circle ml-2rem"> </span>
			</span>
		</button>
	</div>
</nav>

<style>
	.navbar {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		position: fixed;
		top: 0;
		z-index: 10;
	}
	.visible {
		opacity: 1;
	}
	.btn-circle {
		display: inline-block;
		width: 1rem; /* Adjust the size of the circle */
		height: 1rem;
		background-color: black;
		border-radius: 50%;
		align-self: center;
	}
</style>
