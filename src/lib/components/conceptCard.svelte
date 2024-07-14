<script lang="ts">
  export let type = "Case Study";
  export let title = "Example Blog Post Title";
  export let description = "This is a brief description of the blog post. It flies in from the right on hover.";
  export let imageUrls = [
    "/blog-9.jpg",
    "/blog-10.jpg",
    "/blog-11.jpg"
  ];

  let currentImageIndex = 0;
  let change = true;

  function nextImage() {
    if (change){
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
    change = false;
  }
  function onMouseLeave(){
    change = true;
  }

  // Start auto change on component mount
  import { onMount } from 'svelte';

  onMount(() => {
    startAutoChange();
    return stopAutoChange; // Clean up on component unmount
  });
</script>

<div class="transition rounded-lg border-red border hover:bg-red hover:bg-opacity-10 text-white"
     style="background-image: url({imageUrls[currentImageIndex]}); background-size: cover; background-position: center;"
     on:mouseover={onMouseEnter} on:mouseleave={onMouseLeave}>
  <div class="p-7">
    <p class="text-sm text-white font-bold leading-[1.4] tracking-[0.04em]">
      {type}
    </p>

    <div>
      <p class="whitespace-pre-line text-lg font-medium mt-7 lg:text-3xl">{title}</p>
    </div>

    <div>
      <p class="whitespace-pre-line text-lg font-medium mt-7">{description}</p>
    </div>

  </div>
</div>
