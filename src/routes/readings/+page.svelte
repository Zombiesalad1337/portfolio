<script lang="ts">
	import BookCard from '$components/readings/bookCard.svelte';
	import SkillCard from '$components/skills/skillCard.svelte';
	import staticData from '$lib/staticData.json';
</script>

<div class="~/md:~px-1rem/2rem ~/md:~my-[3rem]/[6rem]">
	<div class="gap-y-1rem md:grid grid-cols-2 gap-x-1rem space-y-1rem md:space-y-0">
		{#each staticData.readings.technicalDevelopment as book}
			<BookCard {...book}></BookCard>
		{/each}
	</div>
</div>
