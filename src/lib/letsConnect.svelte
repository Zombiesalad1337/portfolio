<script lang="ts">
	import { InlineCalendar } from 'svelte-calendar';
	// import { DatePicker } from '@svelte-plugins/datepicker';
	let companyEmail: string = 'test@gmail.com';

	// Function to copy the email to clipboard
	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(companyEmail);
			alert('Email copied to clipboard!');
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};
	let name = '';
	let email = '';
	let typeOfService = '';
	let budget = '';
	let message = '';
	export let maxChars = 800;
	export let simplified = false;

	let isOpen: Boolean = true;
	let startDate = new Date();
	let dateFormat = 'MM/dd/yy';
	let formattedStartDate = '';
	// Compute remaining characters
	$: remainingChars = maxChars - message.length;

	const budgetOptions = ['Under $3K', '$3K-$5K', '$5K-$15K', '$25K+'];

	const setBudget = (value: string) => {
		budget = value;
	};

	const submitForm = () => {
		// Validate and submit form logic here
	};

	const darkTheme = {
		calendar: {
			width: '20vw',
			maxWidth: '100vw',
			border: {
				radius: '40px'
			},
			legend: {
				height: '2rem'
			},
			shadow: '0px 20px 52px rgba(175, 19, 21,0.25)',
			colors: {
				text: {
					primary: '#eeeeee',
					highlight: '#ffffff'
				},
				background: {
					primary: '#000000',
					highlight: '#af1315',
					hover: '#222'
				},
				border: 'rgba(175, 19, 21, 0.5)'
			},
			font: {
				regular: '1em',
				large: '25em'
			},
			grid: {
				disabledOpacity: '.5',
				outsiderOpacity: '.7'
			}
		}
	};
</script>

<!-- TODO: add theme -->
<div class="mb-3.5rem flex items-center justify-between px-3.5rem">
	<h1 class="text-bold font-pavelt text-8.5xl text-red">Let's Connect</h1>
	<div class="text-left">
		<p class="font-neuemachina text-4xl text-red">Email Address</p>
		<!-- Clicking on the email or button will copy it -->
		<!-- TODO: add tooltip and toast to button -->
		<button
			class="space-1rem flex items-center justify-start rounded p-2 text-red transition duration-150 hover:scale-105"
			on:click={copyToClipboard}
		>
			<!-- Copy Icon (can be SVG or icon font) -->
			<img src="/icons/copyButton.svg" class="w-3.5rem" />
			<p class="cursor-pointer font-neuemachina text-4xl text-white">
				{companyEmail}
			</p>
		</button>
	</div>
</div>

<section class="flex flex-col px-3.5rem md:flex-row md:space-x-8 md:space-y-0">
	<!-- Left Column -->
	<div class="flex w-full flex-col items-center justify-start font-neuemachina md:w-2/5">
		<!-- Calendar Placeholder -->
		<div class="flex items-center justify-start"></div>
		<div class="h-1/2">
			<!-- <p class="mb-2 text-4xl text-white">Select Meeting Dates</p> -->
			<!-- Social Media Icons Placeholder -->
			<!-- TODO: set end to end of 6th month or next button breaks-->
			<!-- <InlineCalendar
				start={new Date(new Date().setDate(new Date().getDate() + 1))}
				end={new Date(new Date().setDate(new Date().getDate() + 180))}
				theme={darkTheme}
			></InlineCalendar> -->
			<!-- <DatePicker bind:isOpen bind:startDate enabledDates={['1/14/23:3/16/24']} enableFutureDates>
				<input type="date" placeholder="Select date" bind:value={formattedStartDate} />
			</DatePicker> -->
		</div>

		<!-- Social Media Section -->
		{#if !simplified}
			<div class="flex h-1/2 flex-col items-center justify-center">
				<p class="font-pavelt text-6xl text-white">SOCIAL MEDIA</p>
				<div class="grid grid-cols-2 gap-4">
					<!-- Social Media Icons Placeholder -->
					<img src="/icons/upwork.svg" class="w-[15rem]" />
					<img src="/icons/upwork.svg" class="w-[15rem]" />
					<img src="/icons/upwork.svg" class="w-[15rem]" />
					<img src="/icons/upwork.svg" class="w-[15rem]" />
				</div>
			</div>
		{/if}
	</div>

	<!-- Right Column -->
	<div class="w-full space-y-3rem font-neuemachina md:w-3/5">
		<div class="flex items-end justify-between space-y-2rem border-b-2 border-white">
			<label class="pl-4rem text-left text-4xl font-bold text-white">Name</label>
			<input
				type="text"
				bind:value={name}
				placeholder="Enter your name"
				class="appearance-none border-none bg-transparent pr-4rem text-right text-4xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
			/>
		</div>
		<div class="flex items-end justify-between border-b-2 border-white">
			<label class="pl-4rem text-left text-4xl font-bold text-white">Email</label>
			<input
				type="email"
				bind:value={email}
				placeholder="Enter your email"
				class="appearance-none border-none bg-transparent pr-4rem text-right text-4xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
			/>
		</div>
		<div class="flex items-end justify-between border-b-2 border-white">
			<label class=" pl-4rem text-left text-4xl font-bold text-white">Type of Service</label>
			<!-- TODO: hover background color. PAIN IN ASS TO STYLE THIS SHI -->
			<div class="pr-4rem">
				<select
					bind:value={typeOfService}
					required
					placeholder="Select a service"
					class="round w-full appearance-none overflow-hidden border-none pr-2rem text-right text-4xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
				>
					<option value="" disabled selected hidden>Please Choose...</option>
					<option value="design" class="text-center">Design</option>
					<option value="development" class="text-center">Development too long</option>
					<option value="marketing" class="text-center">Marketing</option>
				</select>
			</div>
		</div>

		{#if !simplified}
			<div class="space-y-1rem">
				<div class="flex items-end justify-between border-b-2 border-white">
					<label class="pl-4rem text-left text-4xl font-bold text-white">Budget</label>
					<input
						type="text"
						bind:value={budget}
						placeholder="Enter your budget"
						class="appearance-none border-none bg-transparent pr-4rem text-right text-4xl leading-tight text-red focus:border-transparent focus:outline-none focus:ring-0"
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

			<div class="pr-0rem space-y-1rem border-b-2 border-white pb-1rem pl-4rem">
				<label class="text-left text-4xl font-bold text-white">Message</label>

				<div class="relative">
					<textarea
						bind:value={message}
						placeholder="Enter Your Manifesto you dimwitted cock guzzling landwhale"
						maxlength="800"
						required
						class="h-[16rem] w-full rounded-2xl border-b border-red bg-black bg-opacity-50 p-1rem text-2xl text-white outline-none transition-all duration-100 ease-in-out focus:border-2 focus:border-red focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-0"
					></textarea>

					<!-- Character counter positioned at the bottom-right -->
					<div class="pointer-events-none absolute bottom-1rem right-1rem text-lg text-white">
						{remainingChars}
					</div>
				</div>
			</div>
		{/if}

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
