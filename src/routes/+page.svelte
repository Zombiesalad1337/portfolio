<script lang="ts">

	import Navbar from "$lib/components/navbar.svelte";
  import ProcessCard from "$lib/components/processCard.svelte";
	import ProcessCardDeprecated from "$lib/components/processCardDeprecated.svelte";
  import ServiceCardDeprecated from "$lib/components/serviceCardDeprecated.svelte";
  import ServiceCard from "$lib/components/serviceCard.svelte";
  import FeaturedProject from "$lib/components/featuredProject.svelte";
  import FeaturedProjectsList from "$lib/components/featuredProjectsList.svelte";
  import staticData from "$lib/staticData.json";
  // import * as Carousel from "$lib/components/ui/carousel/index.ts";
  import * as Card from "$lib/components/ui/card/index.ts";
	import Button from "$lib/components/ui/button/button.svelte";
   import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';
	import Testimonial from "$lib/components/testimonial.svelte";
      let carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
        carousel.goToNext()
    }

</script>

<style>
@import '../app.css';

.container-card {
    box-sizing: border-box;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 2000px;
    padding-left: 1rem;
    padding-right: 1rem;
}
@media (min-width: 1024px) {
    .container-card {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}
    .lg\:grid-cols-3 {
        grid-template-columns: repeat(3,minmax(0,1fr))
    }
  .font-pavelt {
    font-family: pavelt, sans-serif;
  }
</style>

<div class="bg-black px-8">
  <Navbar />


<button on:click={handleNextClick}>Next</button>


  <h1 id="Services" class="font-pavelt text-bold text-5xl text-red"> Services </h1>

  <p class="text-white"> Let me tell you what GOD said next. He said, “You’re my son, And today is your birthday. What do you want? Name it: Nations as a present? continents as a prize? You can command them all to dance for you, Or throw them out with tomorrow’s trash.” So, rebel-kings, use your heads; Upstart-judges, learn your lesson: Worship GOD in adoring embrace, Celebrate in trembling awe. Kiss Messiah! Your very lives are in danger, you know; His anger is about to explode, But if you make a run for God—you won’t regret it! </p>


  <!-- <div class="flex justify-center mx-4 space-x-4">
    {#each staticData.service as service}
      <div class="w-1/3 px-2 aspect-square">
        <ServiceCard {...service}></ServiceCard>
      </div>
    {/each}
  </div>
  <div class="flex items-center justify-between"> -->

  <div class="grid container-card gap-x-10 gap-y-10 lg:gap-y-8 my-16 lg:my-24 lg:grid-cols-3">
    {#each staticData.service as service}
        <ServiceCard {...service}></ServiceCard>
    {/each}
  </div>


  <h1 id="Process" class="text-5xl text-red font-pavelt"> Process </h1>


  <div class="grid container-card gap-x-10 gap-y-10 lg:gap-y-8 my-16 lg:my-24 lg:grid-cols-3">
    {#each staticData.process as process}
        <ProcessCard {...process}></ProcessCard>
    {/each}
  </div>



  <!-- <div class="flex justify-between">
    <h1 id="Insights" class="text-5xl text-red"> Insights </h1>
    <a class="bg-red-500 rounded-full px-8 py-2 text-white text-center" href="/projects">All Projects -></a>
  </div> -->


  <h1 id="FeaturedProjects" class="text-5xl text-red font-pavelt"> FEATURED PROJECTS </h1>

  <FeaturedProjectsList {...staticData.featuredProjectsList}></FeaturedProjectsList>








    {#if browser}
    <Carousel particlesToShow={1}
    particlesToScroll={1}
    arrows={false}
    dots={true}
    autoplay={false}
    infinite={false}
    pauseOnFocus={true}
        bind:this={carousel}
    >

    {#each staticData.featuredProjects as featuredProject}
      <FeaturedProject {...featuredProject}></FeaturedProject>
    {/each}
    </Carousel>
    {/if}


  <h1 id="Process" class="text-5xl text-red font-pavelt mt-5"> Testimonials </h1>

  <div class="grid grid-cols-3 grid-rows-1 gap-x-10">
    <Testimonial></Testimonial>
    <Testimonial></Testimonial>
    <Testimonial></Testimonial>
  </div>
</div>
