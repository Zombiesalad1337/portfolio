<script lang="ts">
	import staticData from '$lib/staticData.json';
	import NavbarItem from '$lib/components/Navbar/navbarItem.svelte';
	import NavbarSvgIcon from './navbarSvgIcon.svelte';
	import Hamburger from './hamburger.svelte';

	let hamburgerOpen = false;
	let hamburgerClick = (): void => {
		hamburgerOpen = !hamburgerOpen;
	};
</script>

<div
	class="flex justify-between items-center border-b-2 border-secondary ~px-1rem/3.5rem sticky rounded-full ~py-0.25rem/0.5rem"
>
	<a href="/">
		<p class="rounded-full text-text ~text-sm/lg font-bold ~py-0.5rem/1rem hover:bg-primary">
			Rohit Choudhary
		</p>
	</a>
	<div class="hidden md:flex md:justify-between md:~gap-x-0.5/2rem text-text">
		{#each staticData.navLinks as navLink}
			<div class="relative group px-1rem py-0.5rem">
				<NavbarItem {...navLink}></NavbarItem>
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
		<Hamburger open={hamburgerOpen} onClick={hamburgerClick} width={45}></Hamburger>
	</div>
</div>
