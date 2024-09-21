<script>
	export let src = '';
	export let alt = '';
	export let title = '';
</script>

<div class="my-2rem flex flex-col items-center">
	<img class="w-full max-w-screen-lg rounded-2rem object-cover" {src} {alt} loading="lazy" />
	{#if title}
		<span class=" dark:text-white-500 text-sm italic text-gray-500">{title}</span>
	{/if}
</div>
