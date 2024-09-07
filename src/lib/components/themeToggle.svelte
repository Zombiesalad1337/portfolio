<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode = true;

	//TODO: Use cookies to set theme during SSR to prevent FUOC.
	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<div class="flex justify-center">
	<button
		on:click={handleSwitchDarkMode}
		class="relative h-8 w-16 rounded-full bg-gray-300 shadow-inner transition-all duration-300 ease-in-out {darkMode
			? 'bg-dark'
			: 'bg-light'} bg-cover bg-center"
	>
		<div
			class="absolute left-0.5 top-0.5 h-7 w-7 rounded-full transition-transform duration-300 ease-in-out {darkMode
				? 'translate-x-8 bg-[#707070]'
				: 'translate-x-0 bg-white'}"
		></div>
	</button>
</div>

<style>
	/* Background images for toggled and untoggled states */
	.bg-light {
		background-image: url('/blog-2.jpg');
	}

	.bg-dark {
		background-image: url('/blog-1.jpg');
	}
</style>
