<script lang="ts">
	import { onMount } from 'svelte';

	export let showAtScrollYMultiplier: number = 0.9;
	export let initiallyVisible: boolean = false;

	let activeLink = 'Services';
	let navs = ['Services'];
	let showNavbar: boolean = initiallyVisible;
	let lastScrollTop: number = 0;
	let inactivityTimeout: NodeJS.Timeout | null = null;

	onMount(() => {
		const handleScroll = () => {
			if (initiallyVisible && window.scrollY === 0) {
				showNavbar = true;
			}
			if (window.scrollY >= showAtScrollYMultiplier * window.innerHeight) {
				const currentScrollTop = window.scrollY;
				if (currentScrollTop < lastScrollTop) {
					showNavbar = true;
				} else {
					showNavbar = false;
				}
			} else {
				showNavbar = false;
			}
			lastScrollTop = window.scrollY;
			resetInactivityTimer();
		};

		const handleMouseMove = () => {
			resetInactivityTimer();
		};

		const resetInactivityTimer = () => {
			if (inactivityTimeout) {
				clearTimeout(inactivityTimeout);
			}
			if (showNavbar && window.scrollY > 0) {
				inactivityTimeout = setTimeout(() => {
					showNavbar = false;
				}, 2000); // Set to 2 seconds
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
			if (inactivityTimeout) {
				clearTimeout(inactivityTimeout);
			}
		};
	});
</script>

<!-- TODO: breaks for mobile view, handle -->

<!-- TODO: fix navbar overlap  -->
<nav
	class="navbar {showNavbar
		? 'visible'
		: ''} grid w-full grid-cols-12 items-center gap-2rem bg-white px-3.5rem transition-all duration-[300ms] ease-in-out dark:bg-black"
>
	<div class="col-span-4">
		<!-- TODO: GET SVG OF LOGO, then animate -->
		<img class="h-20" src="/logo-header.png" alt="Logo" />
	</div>
	<div class="content-right col-span-4 font-pavelt">
		<div class="flex transform justify-between space-x-2 rounded-full bg-red px-2 py-1 text-white">
			<a
				href="#Services"
				class="relative rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white"
			>
				Services
			</a>
			<a
				href="#Process"
				class="relative rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white"
			>
				Process
			</a>
			<a
				href="#Concepts"
				class="relative rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white"
			>
				Concepts
			</a>
			<a
				href="#Connect"
				class="relative rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white"
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
		position: sticky;
		top: 0;
		z-index: 20;
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
