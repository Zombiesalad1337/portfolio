<script lang="ts">
  import { highlightedIndex } from '$lib/stores/carouselIndexStore.ts';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  let n: number = 3; // number of sections
  let barWidth: number;
  let sectionWidth: number;
  let dragging: boolean = false;

  let barElement: HTMLDivElement;

  onMount(() => {
    console.log("highlighted index: " + get(highlightedIndex));
    if (barElement) {
      barWidth = barElement.offsetWidth;
      sectionWidth = barWidth / n;
    }
  });

  function onMouseDown(event: MouseEvent) {
    event.preventDefault(); // Prevents any default actions
    dragging = true;
    document.body.style.cursor = 'pointer'; // Set cursor for entire body
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  function onMouseMove(event: MouseEvent) {
    if (dragging) {
      event.preventDefault();
      const rect = barElement.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      let newIndex = Math.floor(mouseX / sectionWidth);
      console.log("newIndex: " + newIndex);
      
      if (newIndex >= 0 && newIndex < n) {
        highlightedIndex.set(newIndex);
      }
    }
  }

  function onMouseUp() {
    dragging = false;
    document.body.style.cursor = ''; // Reset cursor
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    snapToSection();
  }

  function snapToSection() {
    let currentIndex = get(highlightedIndex);
    let nearestIndex = Math.round(currentIndex);
    highlightedIndex.set(nearestIndex);
  }
</script>

<style>
  .bar {
    display: flex;
    width: 25%;
    left: 50%;
    transform: translate(-50%);
    height: 1.5rem;
    background-color: #101010; /* Dark gray color */
    position: relative;
    cursor: pointer;
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;
    box-sizing: border-box;
  }

  .highlighted {
    background-color: #af1315; /* Red color */
    color: white;
    border-radius: 1rem;
  }
</style>

<div
  class="bar"
  bind:this={barElement}
  on:mousedown={onMouseDown}
>
  {#each Array(n) as _, index}
    <div
      class="section {index === $highlightedIndex ? 'highlighted' : 'non-highlighed'}"
      style="width: {100 / n}%"
    >
    </div>
  {/each}
</div>
