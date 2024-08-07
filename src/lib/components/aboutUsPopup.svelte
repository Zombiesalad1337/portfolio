<script lang="ts">
	import { expoInOut, quintInOut, sineInOut } from 'svelte/easing';
  import {fade} from 'svelte/transition';
  import {scale} from 'svelte/transition';
  export let closePopup: Function;

  function close() {
    closePopup();
  }
</script>

<div class="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 backdrop-blur-sm" transition:scale={{ duration: 150, easing:  sineInOut}}>
  <div class="bg-white p-8 rounded-lg w-[95%] h-[90%] relative">
    <button on:click={close} class="absolute top-4 right-4 text-gray-600">X</button>
    <!-- Popup Content -->
    <div>
      <h2 class="text-3xl font-bold mb-4">About Us</h2>
      <p class="text-gray-800">
        We are HUMA. A strategic brand agency working across strategy, design, technology...
      </p>
    </div>
  </div>
</div>

<style>
  /* Optional: additional styles */
  .backdrop-blur-sm {
    backdrop-filter: blur(2px); /* Adjust the blur radius as needed */
  }
</style>
