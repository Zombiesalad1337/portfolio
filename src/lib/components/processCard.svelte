<script lang="ts">
	export let sno: string;
	export let title: string;
	export let text: string;
	export let keyPoints: string[];
</script>

<div
	class="relative rounded-2rem border border-white text-white transition hover:scale-105 hover:border hover:border-red"
>
	<div class="absolute inset-0 rounded-2rem bg-black bg-opacity-75"></div>
	<div class="relative p-7">
		<p class="font-neuemachina text-3xl leading-[1.4] tracking-[0.04em] text-red">
			{sno}
		</p>

		<div class="">
			<p class="mt-7 whitespace-pre-line font-pavelt text-6xl lg:text-6xl">{title}</p>
		</div>
		<div class="">
			<p class="mb-10 mt-7 whitespace-pre-line font-neuemachina text-2xl">{text}</p>
		</div>
		<div class="flex items-end justify-between">
			{#each keyPoints as keyPoint, index}
				<p class="font-neuemachina text-base leading-[1.2] text-red  {(index < (keyPoints.length - 1)) ? 'pr-0.75rem border-r-2 border-r-red' : ''}">{keyPoint}</p>
			{/each}
		</div>
	</div>
</div>
