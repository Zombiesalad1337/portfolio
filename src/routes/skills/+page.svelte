<script lang="ts">
	import SkillCard from '$components/skills/skillCard.svelte';
</script>

<div class="~/md:~px-1rem/2rem ~/md:~py-1rem/2rem">
	<div class="container-card grid md:grid-cols-12 grid-cols-4 justify-items-stretch md:gap-4rem ~/md:~gap-1rem/2rem">
		{#each Array(12) as concept}
			<div class="col-span-4">
				<SkillCard></SkillCard>
			</div>
		{/each}
	</div>
</div>
