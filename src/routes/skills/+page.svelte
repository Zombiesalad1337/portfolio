<script lang="ts">
	import SkillCard from '$components/skills/skillCard.svelte';
	import staticData from '$lib/staticData.json';
</script>

<div class="~/md:~px-1rem/2rem ~/md:~py-1rem/2rem">
	<div class="container-card grid md:grid-cols-12 grid-cols-4 justify-items-stretch md:gap-4rem ~/md:~gap-1rem/2rem">
		{#each staticData.skillTypes as skillType}
			<h2 class="col-span-4 md:col-span-12 text-white">{skillType.title}</h2>
			{#each skillType.items as skill}
				<div class="col-span-4">
					<SkillCard {...skill}></SkillCard>
				</div>
			{/each}
		{/each}
	</div>
</div>
