<script>
	import Bgbugtest from "$lib/components/bgbugtest.svelte";
// import StarryBackground from "$lib/components/starryBackground.svelte";

</script>

<!-- <StarryBackground></StarryBackground> -->
<!-- <Bgbugtest></Bgbugtest> -->

<main>
  <slot></slot>
</main>

<style>
    main {
    position: relative;
    z-index: 1; /* Ensure content is above the background */
  }
</style>
