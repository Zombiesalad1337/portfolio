<script lang="ts">
	import { browser } from '$app/environment';
	import { isDarkMode } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let darkMode = true;

	//TODO: Use cookies to set theme during SSR to prevent FUOC.
	// function handleSwitchDarkMode() {
	// 	darkMode = !darkMode;

	// 	localStorage.setItem('theme', darkMode ? 'dark' : 'light');

	// 	darkMode
	// 		? document.documentElement.classList.add('dark')
	// 		: document.documentElement.classList.remove('dark');
	// }

	// TODO: FIX: Light theme doesn't preserve on switching to main page and back
	function toggleDarkMode(): void {
		isDarkMode.update((current) => {
			const newMode = !current;
			if (newMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
			return newMode;
		});
	}

	onMount(() => {
		if (browser) {
			console.log('IsDarkMode: ' + $isDarkMode);
			// Check the user's theme preference from localStorage or their system preference
			const localStorageTheme = localStorage.getItem('theme');
			const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

			// Initialize darkMode based on localStorage or system preference
			darkMode = localStorageTheme === 'dark' || (!localStorageTheme && userPrefersDark);

			// Apply the dark class if dark mode is enabled
			if (darkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}

			// Sync the initial state to the store
			isDarkMode.set(darkMode);
		}
	});

	// if (browser) {
	// 	if (
	// 		localStorage.theme === 'dark' ||
	// 		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	// 	) {
	// 		document.documentElement.classList.add('dark');
	// 		darkMode = true;
	// 	} else {
	// 		document.documentElement.classList.remove('dark');
	// 		darkMode = false;
	// 	}
	// }
</script>

<div class="flex justify-center">
	<button
		on:click={toggleDarkMode}
		class="relative h-8 w-16 rounded-full bg-gray-300 shadow-inner transition-all duration-300 ease-in-out {$isDarkMode
			? 'bg-dark'
			: 'bg-light'} bg-cover bg-center"
	>
		<div
			class="absolute left-0.5 top-0.5 h-7 w-7 rounded-full transition-transform duration-300 ease-in-out {$isDarkMode
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
