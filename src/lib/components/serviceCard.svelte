
<script lang="ts">
  import { fly } from 'svelte/transition';

  export let sno: string;
  export let title: string;
  export let header: string;
  export let points: string[];

  let showContent: boolean = false;

  function toggleContent() {
    showContent = !showContent;
  }

  let rotate = 0;

  function handleClick() {
    rotate += 45;
  }
</script>

<!-- TODO: Figure out how to increase height without increasing content -->


<style>
  .rotate-45-on-hover:hover {
    transform: rotate(45deg);
  }
    .transition-transform {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .invisible-fly {
    transform: translateY(-20px);
    opacity: 0;
  }

  .visible-fly {
    transform: translateY(+0px);
    opacity: 1;
  }
</style>


<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions (because of reasons) -->
<div on:click={toggleContent} class="relative transition rounded-2rem  border-white border hover:scale-105 hover:border-red hover:border-2 hover:bg-opacity-10 text-white">
	<div class="absolute inset-0 rounded-2rem bg-black bg-opacity-75"></div>
  <div class="relative content p-7 mx-0 font-neuemachina">
    <p class="text-red text-3xl leading-[1.4] tracking-[0.04em]">
      {sno}
    </p>

    <div class="font-neuemachina transition-transform {showContent ? 'visible-fly' : 'invisible-fly'}">
      <!-- <p class="text-lg font-medium mt-7 lg:text-2xl" style="opacity: 1; transform: none;">{header}</p> -->
      <!-- TODO: GET FONTS WITH MORE WEIGHTS -->
      <p class="whitespace-pre-line text-3xl font-medium mt-7 lg:text-2xl">{header}</p>

      <ul class="whitespace-pre-line list-disc pl-5 pb-16 mt-3 lg:mt-6 marker:text-red">
          {#each points as point}
              <!-- <li class="whitespace-pre-line  max-w-[45ch] text-base lg:text-lg" style="opacity: 1; transform: none;">{point}</li> -->
              <!-- <li class="whitespace-pre-line  max-w-[45ch] text-base lg:text-lg">{point}</li> -->
              <li class="whitespace-pre-line  max-w-[45ch] text-2xl lg:text-2xl">{point}</li>
          {/each}
      </ul>

    </div>
  </div>
  <div class="overlay absolute top-0 left-0 w-full h-full flex items-end justify-between py-8 cursor-pointer transition">
    <p class="pl-7 text-4xl lg:text-4xl font-pavelt leading-[1.2]">{title}</p>

      <span class="mr-7 flex items-center justify-center border border-white border-opacity-20 transition duration-500 rounded-full h-7 w-7 group hover:bg-red hover:bg-opacity-10"><img src="/icons/close.svg" class=" cursor-pointer transition-transform duration-300 {showContent ? 'rotate-0' : 'rotate-45 group-hover:rotate-[30deg]'} ease-in-out"></span>
  </div>
</div>
