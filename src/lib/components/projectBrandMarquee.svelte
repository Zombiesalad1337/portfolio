<script lang="ts">
	export let text: string = 'Default Text';
</script>

<div class="relative w-full overflow-hidden">
	<div class="marquee flex items-center whitespace-nowrap">
		{#each Array(4).fill(0) as _}
			<!-- Duplicate the marquee content twice to create the illusion of infinite scroll -->
			{#each Array(10).fill(0) as _}
				<span class="flex items-center text-[8rem] text-white">
					{text}
					<span class="bg-red-gradient mx-2rem h-[8rem] w-[8rem] rounded-full"></span>
				</span>
			{/each}
		{/each}
	</div>
</div>

<style>
	/* Seamless Marquee Animation */
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			margin-left: -4000px;
		}
	}

	.marquee {
		display: flex;
		animation: marquee 20s linear infinite;
		/* Ensure the width of the marquee is wide enough to allow smooth looping */
		width: max-content;
	}
	.bg-red-gradient {
		background: radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0) 70%);
	}
</style>
