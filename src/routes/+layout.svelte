<script>
	import StarryBackground from "$lib/components/starryBackground.svelte";

</script>

<StarryBackground></StarryBackground>

<main>
  <slot></slot>
</main>

<style>
    main {
    position: relative;
    z-index: 1; /* Ensure content is above the background */
    background: rgba(0, 0, 0, 0.1); /* Example for semi-transparent background */
  }
</style>
