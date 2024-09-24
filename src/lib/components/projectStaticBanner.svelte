<script lang="ts">
	type Line = {
		text: string;
		style?: string; // Optional style property for each line
	};

	export let imageUrl: string;
	export let lines: Line[] = []; // Array of lines with optional styles
</script>

<div class="relative w-full">
	<img src={imageUrl} alt="Project banner" class="max-h-screen w-full object-cover" />

	<div class="absolute bottom-0 right-0 w-full max-w-[60%] p-1rem text-white">
		{#each lines as line, index}
			<p class="break-words text-right leading-tight {line.style} " class:mt-2={index > 0}>
				{line.text}
			</p>
		{/each}
	</div>
</div>
