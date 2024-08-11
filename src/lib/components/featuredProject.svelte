<script lang=ts>
    import { browser } from '$app/environment';
    import { fade } from "svelte/transition";
    import Carousel from 'svelte-carousel';
	import { onMount } from 'svelte';
    let designActive : boolean = true;
    let projectActive : boolean = false;
    let executionActive: boolean = false;
    let images: string[] = [];

    export let designText : string;
    export let projectText : string;
    export let executionText : string;
    export let imagesDesign : string[];
    export let imagesProject : string[];
    export let imagesExecution : string[];


    onMount(() => {
        designActive = true;
        images = imagesDesign;
    });

    let carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
        carousel.goToNext()
    }

    function toggleDesign() : void {
            designActive = true;
            projectActive = false;
            executionActive = false;
            images = imagesDesign;
    }

    function toggleProject() : void {
            designActive = false;
            projectActive = true;
            executionActive = false;
            images = imagesProject;
    }

    function toggleExecution() : void {
            designActive = false;
            projectActive = false;
            executionActive = true;
            images = imagesExecution;
    }


</script>
<style>
    .image-container {
        position: relative;
        width: 100%;
        padding-top: 56.25%; /* 16:9 aspect ratio */
        overflow: hidden;
        border-radius: 20px;
    }

    .image-container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>

<div class="grid grid-row-1 grid-cols-5 bg-black text-gray-600 px-3.5rem">
    <!-- left -->
    <div class="col-span-2 grid grid-cols-1 grid-rows-9">   
        <div class="row-start-1 row-span-3 grid grid-cols-1 grid-rows-3 font-pavelt text-5.5xl">
            <button class="border-l-4 px-4 text-left {designActive ? 'text-red border-red' : 'text-gray-600 border-gray-600'}"
            on:click={toggleDesign}>Design</button>

            <button class="border-l-4 px-4 text-left {projectActive ? 'text-red border-red' : 'text-gray-600 border-gray-600'}"
            on:click={toggleProject}>Project</button>

            <button class="border-l-4 px-4 text-left {executionActive ? 'text-red border-red' : 'text-gray-600 border-gray-600'}"
            on:click={toggleExecution}>Execution</button>
        

        </div>

        <div class="row-start-5 row-span-5 font-neuemachina text-2xl">

            {#if designActive}
                <p in:fade={{ duration: 200 }}>
                    {designText}
                </p>
            {:else if projectActive}
                <p in:fade={{ duration: 200 }}>
                    {projectText}
                </p>
            {:else if executionActive}
                <p in:fade={{ duration: 200 }}>
                    {executionText}
                </p>
            {/if} </div>
    </div>




    <!-- right, image -->
    <!-- TODO: keep images same aspect ratio or styling fucking breaks -->
    <!-- TODO: Or find a way to make them occupy same space -->


    <div class="col-span-3">
        {#if browser}
        <Carousel particlesToShow={1}
        particlesToScroll={1}
        arrows={false}
        dots={false}
        autoplay={true}
        duration={200}
        autoplayProgressVisible={false}
            bind:this={carousel}
        >

        {#each images as img}
        <!-- <div class=" pt-0 top-0 bottom-auto right-0 left-auto overflow-hidden z-0 rounded-lg"> -->
        <div class="image-container">
            <img
                sizes="(max-width: 767px) 93vw, (max-width: 991px) 52vw, 54vw"
                src="{img}"
                alt="Projects"
                class="image radius-20"
            />
        </div>
        {/each}
        </Carousel>
        {/if}

    </div>
</div>