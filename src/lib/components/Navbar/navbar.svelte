<script lang="ts">
	import staticData from '$lib/staticData.json';
	import NavbarItem from '$lib/components/Navbar/navbarItem.svelte';
	import NavbarSvgIcon from './navbarSvgIcon.svelte';
</script>

<div class="flex justify-between items-center border-b-2 border-gray-700 px-3.5rem sticky">
	<a href="/">
		<p class="text-white text-base font-bold py-1.5rem hover:bg-gray-700">Name</p>
	</a>
	<div class="flex justify-between gap-x-1rem text-white">
		{#each staticData.navLinks as navLink}
			<div class="hover:bg-gray-700">
				<NavbarItem {...navLink}></NavbarItem>
			</div>
		{/each}
	</div>
	<!-- dark theme -->
	<NavbarSvgIcon
		path="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
	></NavbarSvgIcon>
</div>
