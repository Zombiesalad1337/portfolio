
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
</script>

<div class="border rounded-lg bg-serviceBg/20 text-white p-4 w-72 mx-4 my-4 min-h-[150px]">
  <div class="mb-2">
    <p class="text-left text-red font-bold">{sno}</p>
  </div>
  <div class="relative pb-5 overflow-hidden min-h-[50px]">  <!-- Ensure this has a min-height -->
    <!-- {#if showContent} -->
      <div class="mb-2 {showContent ? '' : 'invisible'}" in:fly={{ y: 200, duration: 300 }} out:fly={{ y: 200, duration: 1000 }}>
        <p class="text-left py-5">{header}</p>
        <ul class="list-disc pl-5">
            {#each points as point}
                <li>{point}</li>
            {/each}
        </ul>
      </div>
    <!-- {/if} -->
  </div>
  <div class="flex justify-between items-center">
    <p class="text-left">{title}</p>
    <button class="bg-red text-white rounded-full px-3 py-1" on:click={toggleContent}>
      {showContent ? 'x' : '+'}
    </button>
  </div>
</div>
