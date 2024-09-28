<script lang="ts">
	export let content: { heading: string; text: string }[];
</script>

<div>
	{#each content as item}
		<h3 class="font-pavelt text-4xl text-red">{item.heading}</h3>
		<p class="text-3.5xl text-white">{item.text}</p>
	{/each}
</div>
