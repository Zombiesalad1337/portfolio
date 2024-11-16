<script lang="ts">
	import { onMount } from 'svelte';
	import staticData from '$lib/staticData.json';
	import NavbarItem from '$lib/components/Navbar/navbarItem.svelte';
	import NavbarSvgIcon from './navbarSvgIcon.svelte';
	import Hamburger from './hamburger.svelte';
	import { fly } from 'svelte/transition';

	let hamburgerOpen = false;
	let hamburgerClick = (): void => {
		console.log('navbar on click');
		hamburgerOpen = !hamburgerOpen;
	};

	// Function to calculate dynamic navbar height
</script>

<div
	class="flex justify-between items-center border-b-2 border-secondary ~px-1rem/3.5rem sticky ~py-0.5rem/1rem z-20 bg-background"
>
	<a href="/">
		<div class="relative group">
			<p class="rounded-full text-text ~text-sm/lg font-bold py-0.5rem group-hover:text-secondary">
				Rohit Choudhary
			</p>
			<span
				class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-secondary group-hover:w-full"
			></span>
		</div>
	</a>
	<div class="hidden md:flex md:justify-between md:~gap-x-0.5/2rem text-text">
		{#each staticData.navLinks as navLink}
			<div class="relative group px-1rem py-0.5rem">
				<NavbarItem {...navLink} hoverColor="group-hover:text-secondary"></NavbarItem>
				<span
					class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-secondary group-hover:w-full"
				></span>
			</div>
		{/each}
	</div>
	<!-- dark theme -->
	<div class="hidden md:block">
		<NavbarSvgIcon
			path="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
		></NavbarSvgIcon>
	</div>
	<div class="block md:hidden text-text">
		<Hamburger open={hamburgerOpen} onClick={hamburgerClick} width={35}></Hamburger>
	</div>
</div>
{#if hamburgerOpen}
	<!-- Side pane with nav links, positioned below the dynamic navbar height -->
	<div class="fixed inset-0 bg-black bg-opacity-50 z-10" on:click={hamburgerClick}></div>
	<nav
		transition:fly={{ x: 200, duration: 400 }}
		class="fixed top-[2rem] right-0 w-1/2 h-full bg-primary text-white z-10 ~px-1rem/2rem ~/md:~py-1rem/2rem flex flex-col items-start md:hidden"
	>
		{#each staticData.navLinks as navLink}
			<div class="relative ~px-0rem/2rem w-full border-b border-accent items-start">
				<NavbarItem
					{...navLink}
					className="h-full w-full ~/md:~py-1rem/2rem"
					hoverColor="group-hover:text-accent"
					onClick={hamburgerClick}
				></NavbarItem>
				<span
					class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-secondary group-hover:w-full"
				></span>
			</div>
		{/each}
	</nav>
{/if}
