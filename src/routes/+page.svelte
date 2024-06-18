<script lang="ts">

	import Navbar from "$lib/components/navbar.svelte";
  import ProcessCard from "$lib/components/serviceCard.svelte";
	import ProcessCardDeprecated from "$lib/components/processCardDeprecated.svelte";
  import ServiceCardDeprecated from "$lib/components/serviceCardDeprecated.svelte";
  import ServiceCard from "$lib/components/serviceCard.svelte";
  import FeaturedProject from "$lib/components/featuredProject.svelte";
  import staticData from "$lib/staticData.json";
  import * as Carousel from "$lib/components/ui/carousel/index.ts";
  import * as Card from "$lib/components/ui/card/index.ts";
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="bg-black">
  <Navbar />


  <h1 id="Services" class="text-5xl text-red"> Services </h1>

  <p class="text-white"> Let me tell you what GOD said next. He said, “You’re my son, And today is your birthday. What do you want? Name it: Nations as a present? continents as a prize? You can command them all to dance for you, Or throw them out with tomorrow’s trash.” So, rebel-kings, use your heads; Upstart-judges, learn your lesson: Worship GOD in adoring embrace, Celebrate in trembling awe. Kiss Messiah! Your very lives are in danger, you know; His anger is about to explode, But if you make a run for God—you won’t regret it! </p>


  <!-- <div class="flex justify-center mx-4 space-x-4">
    {#each staticData.service as service}
      <div class="w-1/3 px-2 aspect-square">
        <ServiceCard {...service}></ServiceCard>
      </div>
    {/each}
  </div>
  <div class="flex items-center justify-between"> -->

  <div class="grid container grid-gap-default gap-y-10 lg:gap-y-8 my-16 lg:my-24 lg:grid-cols-3">
    {#each staticData.service as service}
        <ServiceCard {...service}></ServiceCard>
    {/each}
  </div>
  <div class="flex items-center justify-between">

    <!-- <ServiceCardDeprecated {...staticData.service[0]}></ServiceCardDeprecated>
    <ServiceCardDeprecated {...staticData.service[1]}></ServiceCardDeprecated>
    <ServiceCardDeprecated {...staticData.service[2]}></ServiceCardDeprecated> -->
  </div>


  <h1 id="Process" class="text-5xl text-red"> Process </h1>


  <div class="flex items-center justify-between text-white">

    <ProcessCardDeprecated {...staticData.process[0]}></ProcessCardDeprecated>
    <ProcessCardDeprecated {...staticData.process[1]}></ProcessCardDeprecated>
    <ProcessCardDeprecated {...staticData.process[2]}></ProcessCardDeprecated>
  </div>


  <div class="flex justify-between">
    <h1 id="Insights" class="text-5xl text-red"> Insights </h1>
    <a class="bg-red-500 rounded-full px-8 py-2 text-white text-center" href="/projects">All Projects -></a>
  </div>

    


  <div class="flex items-center justify-between">
    <!-- TODO:Added to center this fucking shit -->
    <p>test</p>
  <Carousel.Root
    opts={{
      align: "center"
    }}
    class="w-full max-w-sm text-white"
  >
    <Carousel.Content>
      {#each Array(5) as _, i (i)}
        <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
          <div class="p-1">
            <Card.Root>
              <Card.Content
                class="flex aspect-square items-center justify-center p-6"
              >
                <span class="text-3xl font-semibold">{i + 1}</span>
              </Card.Content>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>

    
    <p>test</p>


  </div>


  <h1 class="text-5xl"> Featured Projects </h1>


  <Carousel.Root
    class="mx-10 px-5"
  >
    <Carousel.Content>
      <Carousel.Item>
        <FeaturedProject>

        </FeaturedProject>
      </Carousel.Item>
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>

</div>