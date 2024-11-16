<script lang="ts">
	import NavbarSvgIcon from './navbarSvgIcon.svelte';

	export let text: string;
	export let link: string;
	export let path: string;
</script>

<a href={link} class="group">
	<div
		class="flex justify-between gap-x-0.5rem items-center transition-colors group-hover:text-secondary"
	>
		<NavbarSvgIcon {path} hoverColor="group-hover:text-secondary"></NavbarSvgIcon>
		<p class="font-white text-base">{text}</p>
	</div>
</a>
