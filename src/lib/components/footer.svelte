<script lang="ts">
	import { isDarkMode } from '$lib/stores/theme';
</script>

<div class="flex w-full items-start justify-between">
	<!-- Left item rotated -90 degrees (90 degrees clockwise) -->
	<img src="/footerHumaL.svg" class=" w-auto" />
	<!-- Center content -->
	<div class="mx-4rem flex-grow flex-col justify-between pt-4rem">
		<!-- Your center content here -->
		<div class="flex justify-between gap-x-4rem">
			<p class="font-pavelt text-4.5xl text-black dark:text-white">
				Thank you for doing what's right and upboating this thread!!!
			</p>
			<div>
				<p class="font-pavelt text-5.5xl text-red">Contact</p>
				<p class="ml-[0.5rem] font-neuemachina text-2xl text-black dark:text-white">
					humastudios@gmail.com
				</p>
				<p class="ml-[0.5rem] font-neuemachina text-2xl text-black dark:text-white">
					Ph:4206942070
				</p>
			</div>
		</div>
		<div class="mt-8rem flex justify-between gap-x-4rem">
			<div>
				<p class="max-w-[20ch] font-pavelt text-3xl text-black dark:text-white">
					Stay updated. Get HUMA in your inbox.
				</p>
				<div class="mt-2rem">
					<form>
						<input
							type="email"
							placeholder="Enter your email address"
							class="placeholder-gray w-full border-0 border-b border-white bg-transparent text-black focus:border-b-2 focus:border-white focus:outline-none dark:text-white"
						/>
					</form>
				</div>
				<button
					class="mt-1rem w-full rounded-2xl bg-red font-neuemachina text-4xl text-black dark:text-white"
					>Subscribe</button
				>
			</div>

			<div>
				<p class="font-pavelt text-5.5xl text-red">Connect</p>
				<div class="flex justify-between">
					<img src="/icons/insta.svg" class="w-4rem" />
					<img src="/icons/insta.svg" class="w-4rem" />
					<img src="/icons/insta.svg" class="w-4rem" />
					<img src="/icons/insta.svg" class="w-4rem" />
				</div>
			</div>
		</div>
		<div class="mt-8rem flex items-center justify-between">
			<button
				class="mt-1rem rounded-2rem border border-red px-2rem py-1rem font-neuemachina text-base text-black dark:text-white"
				>Huma Studios © 2024</button
			>
			<p class="font-neuemachina text-4.5xl text-black text-opacity-15 dark:text-white">
				Based in Chandigarh
			</p>
			<button
				class="mt-1rem rounded-2rem border border-red px-2rem py-1rem font-neuemachina text-base text-black dark:text-white"
				>Privacy Policy & Code of Conduct</button
			>
		</div>
	</div>

	<!-- Right item rotated 90 degrees clockwise and flipped vertically -->
	<img src="/footerHumaR.svg" class=" w-auto" />
</div>

<!-- <div class="spotlight"></div> -->
{#if $isDarkMode}
	<h1 class="flicker text-center font-pavelt text-red">STUDIOS</h1>
{:else}
	<h1
		class="bg-cover bg-clip-text text-center font-pavelt text-transparent"
		style="background-image: url('/yellowClouds.gif');"
	>
		STUDIOS
	</h1>
{/if}

<style>
	:root {
		/* Base font size */

		/* Set neon color */
		--neon-text-color: #af1315;
		--neon-border-color: #af1315;
	}

	body {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #000;
		min-height: 100vh;
	}

	h1 {
		font-size: 22.5rem;
		font-weight: 200;
		text-transform: uppercase;
	}

	h1:focus {
		outline: none;
	}
	.flicker {
		animation: flicker 1.5s infinite alternate;
	}

	/* Animate neon flicker */
	@keyframes flicker {
		0%,
		19%,
		21%,
		23%,
		25%,
		54%,
		56%,
		100% {
			text-shadow:
				-0.2rem -0.2rem 1rem #fff,
				0.2rem 0.2rem 1rem #fff,
				0 0 2rem var(--neon-text-color),
				0 0 4rem var(--neon-text-color),
				0 0 6rem var(--neon-text-color),
				0 0 8rem var(--neon-text-color),
				0 0 10rem var(--neon-text-color);
		}

		20%,
		24%,
		55% {
			text-shadow: none;
		}
	}
	.spotlight {
		width: 100px; /* Change this to control the spotlight size */
		height: 100px; /* Keep the height equal to width for a circular spotlight */
		background: radial-gradient(circle, rgba(255, 0, 0, 0.8) 0%, rgba(255, 0, 0, 0) 70%);
		opacity: 0.9;
		top: 50%; /* Center vertically */
		left: 50%; /* Center horizontally */
		transform: translate(-50%, -50%);
		pointer-events: none; /* Make sure it doesn't interfere with interactions */
		filter: blur(10px); /* Add some blur to soften the spotlight */
	}
</style>
