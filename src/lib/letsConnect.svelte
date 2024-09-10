<script lang="ts">
	let name = '';
	let email = '';
	let typeOfService = '';
	let budget = '';
	let message = '';

	const budgetOptions = ['5k-10k', '10k-50k'];

	const setBudget = (value: string) => {
		budget = value;
	};

	const submitForm = () => {
		// Validate and submit form logic here
	};
</script>

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
				class="appearance-none border-none bg-transparent pr-4rem text-4.5xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
			/>
		</div>
		<div class="flex items-center justify-between border-b-2 border-white">
			<label class="pl-4rem text-left text-4xl font-bold text-white">Email</label>
			<input
				type="email"
				bind:value={email}
				placeholder="Enter your email"
				class="appearance-none border-none bg-transparent pr-4rem text-4.5xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
			/>
		</div>

		<select
			bind:value={typeOfService}
			required
			class="w-full border-b border-gray-400 bg-black p-2 text-white focus:border-red-500"
		>
			<option value="" disabled>Select a service</option>
			<option value="design">Design</option>
			<option value="development">Development</option>
			<option value="marketing">Marketing</option>
		</select>

		<div class="space-y-2">
			<input
				type="text"
				bind:value={budget}
				placeholder="Budget"
				required
				class="w-full border-b border-gray-400 bg-black p-2 text-white focus:border-red-500"
			/>
			<div class="flex space-x-2">
				{#each budgetOptions as option}
					<button
						type="button"
						on:click={() => setBudget(option)}
						class="rounded bg-red-500 p-2 text-white"
					>
						{option}
					</button>
				{/each}
			</div>
		</div>

		<textarea
			bind:value={message}
			placeholder="Message (Max 500 characters)"
			maxlength="500"
			required
			class="h-32 w-full border-b border-gray-400 bg-black p-2 text-white focus:border-red-500"
		></textarea>

		<button on:click={submitForm} class="w-full rounded bg-red-500 p-4 text-white"> Submit </button>
	</div>
</section>
