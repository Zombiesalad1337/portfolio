<script lang="ts">
  import NestedAccordion from './nestedAccordion.svelte';
  import { slide, fade } from 'svelte/transition';

  export let items: { question: string; answer: string | { question: string; answer: string }[] }[];

  let activeIndices: number[] = []; // Use an array instead of Set

  function toggle(index: number) {
    console.log(`Toggle function called for index ${index}`);
    const idx = activeIndices.indexOf(index);
    if (idx > -1) {
      activeIndices.splice(idx, 1); // Remove index
    } else {
      activeIndices.push(index); // Add index
    }
    activeIndices = [...activeIndices]; // Trigger reactivity by creating a new array
  }
</script>

<div class="space-y-2 mx-3.5rem">
  {#each items as item, index}
    <div class="w-full">
      <button
        class="w-full flex justify-between items-center py-1rem text-left text-red font-neuemachina text-6.5xl focus:outline-none focus-visible:ring focus-visible:ring-white-300"
        on:click={() => toggle(index)}
      >
        <span>{item.question}</span>
        <img class="text-xl"
          src={activeIndices.includes(index) ? '/icons/accordionCloseMinus.svg' : '/icons/accordionOpen.svg'}
        />
      </button>
      {#if activeIndices.includes(index)}
        <div
          class="mt-6rem px-6 pb-4 pt-0 text-3.5xl text-white font-neuemachina"
          in:slide={{ duration: 300 }}
          out:slide={{ duration: 300 }}
        >
          <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }} class="mt-6rem">
            {#if Array.isArray(item.answer)}
              <!-- Recursively render NestedAccordion if the answer is an array of items -->
              <NestedAccordion items={item.answer} />
            {:else}
              <!-- Render the plain text answer -->
              {item.answer}
            {/if}
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>
