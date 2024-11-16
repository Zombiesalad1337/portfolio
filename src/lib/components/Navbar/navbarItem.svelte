<script lang="ts">
	import NavbarSvgIcon from './navbarSvgIcon.svelte';

	export let className = '';
	export let text: string;
	export let link: string;
	export let path: string;
	export let hoverColor: string;
</script>

<a href={link} class="group">
	<div
		class="flex justify-start gap-x-0.5rem items-center transition-colors {hoverColor} {className}"
	>
		<NavbarSvgIcon {path} {hoverColor}></NavbarSvgIcon>
		<div class="block md:hidden lg:block">
			<p class="font-white ~/md:~text-base/xl">{text}</p>
		</div>
	</div>
</a>
