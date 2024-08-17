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

<div class="bg-black-10 rounded-lg p-4">
	<div class="flex items-center justify-between">
		<div class="">
			<img src="quote.svg" alt="quote" class="h-auto w-full object-contain" />
		</div>
		<div class="flex items-center">
			<img src={logo} alt={company} class="h-8 w-auto object-contain" />
			<p class="ml-4 text-xl text-white">
				{company}
			</p>
		</div>
	</div>
	<div class="my-4">
		<p class="text-xl font-bold text-white">
			{testimony}
		</p>
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
		<img src={userPic} alt={userName} class="h-10 w-10 rounded-full object-cover" />
		<div class="ml-4">
			<p class="font-semibold text-white">
				{userName}, {userPost}
			</p>
		</div>
	</div>
</div>
