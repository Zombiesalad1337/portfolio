<script lang="ts">
	import SkillCard from '$components/skills/skillCard.svelte';
	import staticData from '$lib/staticData.json';
</script>

<div class="~/md:~px-1rem/2rem ~/md:~my-[3rem]/[6rem]">
	{#each staticData.skillTypes as skillType, index}
		<div class="container-card grid md:grid-cols-12 grid-cols-4 justify-items-stretch md:gap-4rem ~/md:~gap-1rem/2rem {index < staticData.skillTypes.length - 1 ? '~/md:~mb-[3rem]/[6rem]' : ''}">
			<h2 class="flex items-center text-center col-span-4 md:col-span-12 text-gray-400 leading-none  ~/md:~text-[0.8rem]/[1.6rem] ~/md:~my-[0.5rem]/[1rem]">
				<span class="border-t border-gray-600 ~/md:~w-[4rem]/[8rem] ~/md:~mr-[0.5rem]/[1rem] "></span>
				{skillType.title}
				<span class="border-t border-gray-600 flex-grow ~/md:~ml-[0.5rem]/[1rem]"></span>
			</h2>
			{#each skillType.items as skill}
				<div class="col-span-4">
					<SkillCard {...skill}></SkillCard>
				</div>
			{/each}

		</div>
	{/each}
</div>
