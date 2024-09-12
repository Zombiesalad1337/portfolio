<script lang="ts">
	let name = '';
	let email = '';
	let typeOfService = '';
	let budget = '';
	let message = '';
	export let maxChars = 800;

	// Compute remaining characters
	$: remainingChars = maxChars - message.length;

	const budgetOptions = ['Under $3K', '$3K-$5K', '$5K-$15K', '$25K+'];

	const setBudget = (value: string) => {
		budget = value;
	};

	const submitForm = () => {
		// Validate and submit form logic here
	};
</script>

<div class="flex items-center justify-between px-3.5rem">
	<h1 class="text-bold font-pavelt text-8.5xl text-red">Let's Connect</h1>
	<div class="text-left">
		<p class="font-neuemachina text-4xl text-red">Email Address</p>
		<div class="space-1rem flex items-center">
			<p class="font-neuemachina text-4xl text-white">humastudios@gmail.com</p>
		</div>
	</div>
</div>

<section class="flex flex-col space-y-8 px-3.5rem md:flex-row md:space-x-8 md:space-y-0">
	<!-- Left Column -->
	<div class="w-full space-y-8 md:w-2/5">
		<!-- Calendar Placeholder -->
		<div class="rounded bg-white p-4 text-black">
			<p>Select Meeting Dates:</p>
			<!-- Date range picker logic -->
		</div>

		<!-- Social Media Section -->
		<div>
			<p class="mb-2 text-red-500">SOCIAL MEDIA</p>
			<div class="grid grid-cols-2 gap-4">
				<!-- Social Media Icons Placeholder -->
				<div class="rounded bg-white p-4 text-center text-black">Icon 1</div>
				<div class="rounded bg-white p-4 text-center text-black">Icon 2</div>
				<div class="rounded bg-white p-4 text-center text-black">Icon 3</div>
				<div class="rounded bg-white p-4 text-center text-black">Icon 4</div>
			</div>
		</div>
	</div>

	<!-- Right Column -->
	<div class="w-full space-y-8 font-neuemachina md:w-3/5">
		<div class="flex items-center justify-between border-b-2 border-white">
			<label class="pl-4rem text-left text-4xl font-bold text-white">Name</label>
			<input
				type="text"
				bind:value={name}
				placeholder="Enter your name"
				class="appearance-none border-none bg-transparent pr-4rem text-right text-4.5xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
			/>
		</div>
		<div class="flex items-center justify-between border-b-2 border-white">
			<label class="pl-4rem text-left text-4xl font-bold text-white">Email</label>
			<input
				type="email"
				bind:value={email}
				placeholder="Enter your email"
				class="appearance-none border-none bg-transparent pr-4rem text-right text-4.5xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
			/>
		</div>
		<div class="flex items-center justify-between border-b-2 border-white">
			<label class="appearance-none pl-4rem text-left text-4xl font-bold text-white"
				>Type of Service</label
			>
			<!-- TODO: hover background color. PAIN IN ASS TO STYLE THIS SHI -->
			<div class="pr-4rem">
				<select
					bind:value={typeOfService}
					required
					placeholder="Select a service"
					class="round w-full appearance-none overflow-hidden border-none pr-2rem text-right text-4.5xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
				>
					<option value="" disabled selected hidden>Please Choose...</option>
					<option value="design" class="text-center">Design</option>
					<option value="development" class="text-center">Development too long</option>
					<option value="marketing" class="text-center">Marketing</option>
				</select>
			</div>
		</div>

		<div class="space-y-1rem">
			<div class="flex items-center justify-between border-b-2 border-white">
				<label class="pl-4rem text-left text-4xl font-bold text-white">Budget</label>
				<input
					type="text"
					bind:value={budget}
					placeholder="Enter your budget"
					class="appearance-none border-none bg-transparent pr-4rem text-right text-4.5xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
				/>
			</div>
			<div class="flex justify-center space-x-1rem border-b-2 border-white pb-1rem">
				{#each budgetOptions as option}
					<button
						type="button"
						on:click={() => setBudget(option)}
						class="rounded-1rem border border-red px-1rem py-1rem font-neuemachina text-2xl text-red hover:scale-105"
					>
						{option}
					</button>
				{/each}
			</div>
		</div>

		<div class="space-y-1rem border-b-2 border-white pb-1rem pl-4rem pr-4rem">
			<label class="text-left text-4xl font-bold text-white">Message</label>

			<div class="relative">
				<textarea
					bind:value={message}
					placeholder="Enter Your Manifesto you dimwitted cock guzzling landwhale"
					maxlength="800"
					required
					class="h-[12rem] w-full border-b border-red bg-black bg-opacity-50 p-1rem text-2xl text-white outline-none transition-all duration-100 ease-in-out focus:border-2 focus:border-red focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-0"
				></textarea>

				<!-- Character counter positioned at the bottom-right -->
				<div class="pointer-events-none absolute bottom-1rem right-1rem text-lg text-white">
					{remainingChars}
				</div>
			</div>
		</div>

		<button on:click={submitForm} class="w-full rounded-2xl bg-red py-0.5rem text-4.5xl text-white">
			Submit
		</button>
	</div>
</section>

<style>
	select {
		background: none;
		padding: 0;
	}

	select,
	select option {
		background-color: black;
	}

	select option:hover {
		box-shadow: 0 0 10px 100px red inset !important;
		color: #ffffff;
		/* background-color: red; */
	}
	select:invalid,
	select option[value=''] {
		color: #999999;
	}
</style>
