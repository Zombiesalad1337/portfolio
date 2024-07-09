<script lang="ts">
    export let title : string;
    export let  company: string;
    export let  type: string;
    export let  link: string;
    export let  images: string[];
    
    import { browser } from '$app/environment';
    import Carousel from 'svelte-carousel';

    let carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
        carousel.goToNext()
    }
</script>


<style>
</style>

<a href={link}>
        <div class="group relative flex justify-between pt-4 pb-4 border-b border-red hover:bg-red transition duration-600 ease-in-out">

            <div class="text-4xl text-white">
                {title}
            </div>

            <div class="flex flex-col justify-center items-end text-right text-sm">
            <p class="text-white text-weight">{company}</p> 
            <p class="text-gray-600">{type}</p>
            </div>
            <!-- <img src="/blog-1.jpg" class="absolute top-1/2 left-1/2 w-96 h-96 object-cover hidden group-hover:block z-10"> -->
            
            <div class="absolute top-1/2 left-1/2 w-96 h-96 object-cover hidden group-hover:block z-10">
                {#if browser}
                    <Carousel particlesToShow={1} particlesToScroll={1}
                    arrows={false}
                    dots={false}
                    autoplay={true}
                    duration={200}
                    autoplayProgressVisible={false}
                        bind:this={carousel}
                    >

                    {#each images as img}
                    <!-- <div class=" pt-0 top-0 bottom-auto right-0 left-auto overflow-hidden z-0 rounded-lg"> -->
                    <img
                        src="{img}"
                        alt="Projects"
                        class="image radius-20"
                    />
                    {/each}
                    </Carousel>
                {/if}
            </div>

    </div>
</a>
