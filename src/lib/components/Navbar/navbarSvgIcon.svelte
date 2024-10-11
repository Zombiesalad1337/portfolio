<script lang="ts">
	export let path: string; // Path data for the SVG
	export let size = '1.5rem'; // Default size
	export let strokeWidth = 1.5; // Default stroke width
	export let color = 'text-white';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width={strokeWidth}
	stroke="currentColor"
	class={color}
	style="width: {size}; height: {size};"
>
	<path d={path} stroke-linecap="round" stroke-linejoin="round" />
</svg>
