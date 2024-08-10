<script lang="ts">
    import { onMount } from "svelte";
	let activeLink = 'Services';

	let navs = ['Services'];
	let showNavbar: boolean = false;
	onMount(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight) {
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

<nav class="{showNavbar ? 'visible' : ''} flex w-full items-center justify-between px-3.5rem">
    <div>
        <!-- TODO: GET SVG OF LOGO, then animate -->
        <img class="h-20" src="/logo-header.png" alt="Logo" />
    </div>
    <div class="flex justify-between rounded-full bg-red px-6 py-1 text-white space-x-10">
        <a href="#Services" class="relative text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Services
        </a>
        <a href="#Process" class="relative text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Process
        </a>
        <a href="#Insights" class="relative text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Insights
        </a>
        <a href="#Connect" class="relative text-sm font-medium px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Connect
        </a>
    </div>
    <button class="flex justify-around items-center text-white rounded-full bg-red px-4 py-2 md:block">
        	Let's talk
			<span class="btn-circle ml-2rem"> </span>
    </button>
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