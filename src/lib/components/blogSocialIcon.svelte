<script lang="ts">
	export let imgSrc: string;
	export let url: string;
	export let imgClass: string = '';
</script>

<!-- TODO: SECURITY: add below target and rel to all external buttons -->
<!-- target and rel for security -->
<a href={url} target="_blank" rel="noopener noreferrer" class="social-icon-button">
	<div
		class="flex h-4rem w-4rem items-center justify-center rounded-full bg-red transition hover:scale-105"
	>
		<img src={imgSrc} alt="Social Icon" class="h-3rem w-3rem {imgClass}" />
	</div>
</a>

<style>
	.social-icon-button {
		display: inline-flex;
	}
</style>
