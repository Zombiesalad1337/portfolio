<script lang="ts">
</script>

<div class="flex w-full items-start justify-between">
	<!-- Left item rotated -90 degrees (90 degrees clockwise) -->
	<div class="w-[10.5rem] flex-none rotate-90 transform whitespace-nowrap font-pavelt text-red">
		<p class="text-center text-[13.25rem]">HUMA</p>
	</div>

	<!-- Center content -->
	<div class="mx-4rem flex-grow flex-col justify-between pt-6rem">
		<!-- Your center content here -->
		<div class="flex justify-between gap-x-4rem">
			<p class="font-pavelt text-4.5xl text-white">
				Thank you for doing what's right and upboating this thread!!!
			</p>
			<div>
				<p class="font-pavelt text-5.5xl text-red">Contact</p>
				<p class="ml-[0.5rem] font-neuemachina text-2xl text-white">humastudios@gmail.com</p>
				<p class="ml-[0.5rem] font-neuemachina text-2xl text-white">Ph:4206942070</p>
			</div>
		</div>
		<div class="mt-8rem flex justify-between gap-x-4rem">
			<div>
				<p class="max-w-[20ch] font-pavelt text-3xl text-white">
					Stay updated. Get HUMA in your inbox.
				</p>
				<div class="mt-2rem">
					<form>
						<input
							type="email"
							placeholder="Enter your email address"
							class="w-full border-0 border-b border-white bg-transparent text-white placeholder-gray focus:border-b-2 focus:border-white focus:outline-none"
						/>
					</form>
				</div>
                <button class="bg-red text-white font-neuemachina text-4xl w-full mt-1rem rounded-2xl">Subscribe</button>
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
		<div class="mt-8rem flex justify-between items-center">
            <button class="border border-red text-white font-neuemachina text-base mt-1rem rounded-2rem px-2rem py-1rem">Huma Studios © 2024</button>
            <p class="text-white font-neuemachina text-4.5xl text-opacity-15">Based in Chandigarh</p>
            <button class="border border-red text-white font-neuemachina text-base mt-1rem rounded-2rem px-2rem py-1rem">Privacy Policy & Code of Conduct</button>
        </div>
	</div>

	<!-- Right item rotated 90 degrees clockwise and flipped vertically -->
	<div
		class="block w-[10.5rem] flex-none rotate-90 -scale-y-100 transform whitespace-nowrap font-pavelt text-red"
	>
		<p class="text-center text-[13.25rem]">HUMA</p>
	</div>
</div>

<div class="spotlight"></div>
<h1 class="text-center font-pavelt text-red">STUDIOS</h1>

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
  animation: flicker 1.5s infinite alternate;     
}


h1:focus {
  outline: none;
}

/* Animate neon flicker */
@keyframes flicker {
    
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      
        text-shadow:
            -0.2rem -0.2rem 1rem #fff,
            0.2rem 0.2rem 1rem #fff,
            0 0 2rem var(--neon-text-color),
            0 0 4rem var(--neon-text-color),
            0 0 6rem var(--neon-text-color),
            0 0 8rem var(--neon-text-color),
            0 0 10rem var(--neon-text-color);
        
    }
    
    20%, 24%, 55% {        
        text-shadow: none;
    }    
}    
    .spotlight {
        width: 100px; /* Change this to control the spotlight size */
        height: 100px; /* Keep the height equal to width for a circular spotlight */
        background: radial-gradient(circle, rgba(255, 0, 0, 0.8) 0%, rgba(255, 0, 0, 0) 70%);
        opacity: 0.9;
        position: absolute;
        top: 50%; /* Center vertically */
        left: 50%; /* Center horizontally */
        transform: translate(-50%, -50%);
        pointer-events: none; /* Make sure it doesn't interfere with interactions */
        filter: blur(10px); /* Add some blur to soften the spotlight */
    }
</style>