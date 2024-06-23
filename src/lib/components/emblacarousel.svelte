<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
    import { onMount } from 'svelte';




  let emblaApi;
  let emblaNode;
  let options = { loop: true };
  let count = 0;

  onMount(() => {

  });
  function onInit(event) {
    emblaApi = event.detail;
    console.log(emblaApi.slideNodes()) // Access API
  }
    function next(){
        count++;
        if (emblaApi)
        emblaApi.scrollNext();
    }

    function prev(){
        count++;
        if (emblaApi)
        emblaApi.scrollPrev();
        emblaApi.scrollTo(3);
    }


</script>

<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 33%; /* Each slide covers 80% of the viewport */
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>




<div bind:this={emblaNode} class="embla text-white" use:emblaCarouselSvelte="{{options}}" on:emblaInit="{onInit}">
  <div class="embla__viewport">
    <div class="embla__container">
      <div class="embla__slide">{count} 1</div>
      <div class="embla__slide">Slide 2</div>
      <div class="embla__slide">Slide 3</div>
      <div class="embla__slide">Slide 4</div>
      <div class="embla__slide">Slide 5</div>
      <div class="embla__slide">Slide 6</div>
    </div>
  </div>
  <button class="embla__prev" on:click="{prev}">Prev</button>
  <button class="embla__next" on:click="{next}">Next</button>
</div>