<script lang="ts">
  import { fade } from 'svelte/transition';

  export let type = "Case Study";
  export let title = "Example Blog Post Title";
  export let description = "This is a brief description of the blog post. It flies in from the right on hover.";
  export let imageUrls = [
    "/blog-9.jpg",
    "/blog-10.jpg",
    "/blog-11.jpg"
  ];

  let currentImageIndex = 0;
  let hover = false;

  function nextImage() {
    if (!hover){
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    }
  }

  // Automatically change image every x seconds
  let interval : number;
  const autoChangeInterval = 5000; // Change image every 5 seconds (5000 milliseconds)

  function startAutoChange() {
    interval = setInterval(() => {
      nextImage();
    }, autoChangeInterval);
  }

  function stopAutoChange() {
    clearInterval(interval);
  }

  function onMouseEnter(){
    hover = true;
  }
  function onMouseLeave(){
    hover = false;
  }

  // Start auto change on component mount
  import { onMount } from 'svelte';

  onMount(() => {
    startAutoChange();
    return stopAutoChange; // Clean up on component unmount
  });
</script>

{#each [currentImageIndex] as index (index)}
<div transition:fade class="image-container background-image: url({imageUrls[currentImageIndex]}); transition transition-hover-card rounded-lg  text-white {hover ? 'expand' : 'expand-revert'}"
    style="background-image: url({imageUrls[currentImageIndex]});" 
     animate:fade="{{ duration: 3000 }}"
     on:mouseover={onMouseEnter} on:mouseleave={onMouseLeave} on:focus={onMouseEnter}>
  <div class="p-7">
    <p class="text-lg text-white font-bold leading-[1.4] tracking-[0.04em]">
      {type}
    </p>

    <div>
      <p class="whitespace-pre-line text-2xl font-medium mt-7">{title}</p>
    </div>

    <div class="mb-40 transition-transform-description {hover ? 'visible-slide' : 'invisible-slide'}">
    <p class="whitespace-pre-line text-base font-medium mt-7">{description}</p>
    </div>

  </div>
</div>
{/each}

<style>
  .image-container {
    transition: opacity 0.8s ease;
    background-size: cover; 
    background-position: center;
  }
    .transition-transform-description {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .transition-hover-card {
    transition: background-position 0.5s ease,translate 0.5s ease, scale 0.5s ease, blur 0.1s ease;
  }
  .expand {
    background-position: bottom right;
    translate: (500px, 500px);
    scale: 1.05;
  }
  .expand-revert {
    transform: translate(0, 0), scale(1.00);
  }
  .invisible-slide {
    transform: translateX(+50px);
    opacity: 0;
  }

  .visible-slide {
    transform: translateX(+0px);
    opacity: 1;
  }
</style>
