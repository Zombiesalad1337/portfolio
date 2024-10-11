<script lang="ts">
	import NavbarSvgIcon from './navbarSvgIcon.svelte';

	export let text: string;
	export let link: string;
	export let path: string;
</script>

<a href={link}>
	<div class="flex justify-between gap-x-0.5rem px-1rem items-center py-1.5rem">
		<NavbarSvgIcon {path}></NavbarSvgIcon>
		<p class="font-white text-base">{text}</p>
	</div>
</a>
