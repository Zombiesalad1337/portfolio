<script lang="ts">
	import SkillCard from '$components/skills/skillCard.svelte';
</script>

<div class="px-3.5rem">
	<div class="container-card my-16 grid grid-cols-12 justify-items-stretch gap-4rem">
		{#each Array(12) as concept}
			<div class="col-span-4">
				<SkillCard></SkillCard>
			</div>
		{/each}
	</div>
</div>
