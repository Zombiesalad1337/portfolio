<script lang="ts">
	import { enhance } from '$app/forms';
	import { toast } from '@zerodevx/svelte-toast';

	export let form;

	const successToast = (m: string) => {
		toast.push(m, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A',
				'--toastBarHeight': 0
			}
		});
	};

	const failureToast = (m: string) => {
		toast.push(m, {
			theme: {
				'--toastColor': 'white',
				'--toastBackground': '#af1315',
				'--toastBarBackground': '#2F855A',
				'--toastBarHeight': 0
			}
		});
	};

	$: if (form?.success) {
		successToast('Successfully registered!');
	}

	$: if (form?.invalid) {
		failureToast('Invalid Email');
	}
</script>

<!-- TODO: FIX: Submit broke after moving to component -->
<div class="w-full py-20">
	<h1 class="text-center font-pavelt text-5xl text-white underline">Let's Know the World Better</h1>

	<div class="mb-2rem mt-1rem text-center font-neuemachina text-4.5xl text-white">
		<h1>Subscribe and receive our</h1>
		<h1>Newsletter to follow the news about</h1>
	</div>

	<div>
		<form method="POST" action="?/subscribe" use:enhance class="flex items-center justify-center">
			<div class="relative w-[70vw]">
				<input
					name="email"
					type="email"
					class="h-20 w-full rounded-[4rem] border border-red bg-black bg-opacity-50 pl-[2rem] pr-[4rem] font-neuemachina text-[2rem] text-white outline-none transition-all duration-300 ease-in-out focus:border-red focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-0"
					placeholder="Your Email"
				/>
				<button
					type="submit"
					class="absolute inset-y-0 right-0 flex h-full w-auto items-center justify-center"
				>
					<img src="/icons/subscribeArrow.svg" class="h-full" alt="Submit" />
				</button>
			</div>
		</form>
	</div>

	{#if form?.invalid}
		<p class="mt-0.5rem text-center font-neuemachina text-red">Email is invalid</p>
	{/if}
	{#if form?.success}
		<p class="text-green mt-0.5rem text-center font-neuemachina">You are successfully registered</p>
	{/if}
</div>
