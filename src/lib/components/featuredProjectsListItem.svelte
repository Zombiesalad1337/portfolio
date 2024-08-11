<script lang="ts">
    export let title : string;
    export let  company: string;
    export let  type: string;
    export let  link: string;
    export let  images: string[];
    export let index : number;
    
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
        <div class="group relative flex justify-between pt-4 pb-4 border-b {index == 0 ? 'border-t' : ''} border-red hover:bg-red transition duration-600 ease-in-out">

            <div class="text-4.5xl font-neuemachina text-white">
                {title}
            </div>

            <div class="flex flex-col justify-center items-end text-right">
            <p class="text-white font-pavelt text-weight text-base">{company}</p> 
            <p class="font-neuemachina text-base text-gray-600">{type}</p>
            </div>
            <div class="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] object-cover hidden group-hover:block z-10">
                <!-- TODO: Fuck slide, use custom fade form concept card -->
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
                        class="image rounded-3xl radius-20"
                    />
                    {/each}
                    </Carousel>
                {/if}
            </div>

    </div>
</a>
