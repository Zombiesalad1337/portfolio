<script lang="ts">
	import NavbarSvgIcon from './navbarSvgIcon.svelte';

	export let text: string;
	export let link: string;
	export let path: string;
</script>

<a href={link} class="group">
	<div
		class="flex justify-start gap-x-0.5rem items-center transition-colors group-hover:text-secondary"
	>
		<NavbarSvgIcon {path} hoverColor="group-hover:text-secondary"></NavbarSvgIcon>
		<div class="block md:hidden lg:block">
			<p class="font-white ~/md:~text-base/xl">{text}</p>
		</div>
	</div>
</a>
