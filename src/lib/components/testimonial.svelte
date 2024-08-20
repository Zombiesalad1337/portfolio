<script lang="ts">
	export let logo: string;
	export let company: string;
	export let testimony: string;
	export let stars: number;
	export let userPic: string;
	export let userName: string;
	export let userPost: string;

	// Function to generate an array of stars based on the rating
	function generateStars(stars: number) {
		const fullStars = Math.floor(stars);
		const halfStar = stars % 1 !== 0;
		return { fullStars, halfStar };
	}
</script>

<div
	class="relative rounded-2rem border border-white text-white transition hover:scale-105 hover:border hover:border-red"
>
	<div class="absolute inset-0 rounded-2rem bg-black bg-opacity-75"></div>
	<div class="relative p-7">
		<div class="flex items-start justify-between">
			<div class="">
				<img src="quote.svg" alt="quote" class="h-auto w-8.5rem object-contain" />
			</div>
			<!-- TODO: fix your fucking logos goddammit, remove extra padding -->
			<div class="flex items-end">
				<img src={logo} alt={company} class="h-auto w-4.5rem object-contain" />
				<p class="ml-4 text-xl text-white">
					{company}
				</p>
			</div>
		</div>
		<div class="h-[10rem] my-4rem flex items-center">
			<div class="">
				<p class="text-2xl font-bold text-white font-neuemachina">
					{testimony}
				</p>
			</div>
		</div>

		<!-- Stars Section -->
		<div class="mb-4 flex">
			{#each Array(generateStars(stars).fullStars) as _, index}
				<!-- Full star -->
				<svg
					key={index}
					class="h-6 w-6 fill-current text-red"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path
						d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
					/>
				</svg>
			{/each}
			{#if generateStars(stars).halfStar}
				<!-- Half star -->
				<svg
					class="h-6 w-6 fill-current text-red"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V2z" />
				</svg>
			{/if}
		</div>

		<!-- User Info Section -->
		<div class="flex items-center">
			<img src={userPic} alt={userName} class="h-auto w-5.5rem rounded-full object-cover" />
			<div class="ml-1.5rem">
				<p class="font-semibold text-red font-neuemachina text-2xl max-w-[20ch]">
					{userName}, {userPost}
				</p>
			</div>
		</div>
	</div>
</div>
