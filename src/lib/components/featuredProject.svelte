<script lang=ts>
    import { fade } from "svelte/transition";
    let designActive : boolean = true;
    let projectActive : boolean = false;
    let executionActive: boolean = false;
    let imgSrc : string = "/design.avif";

    function toggleDesign() : void {
        designActive = true;
        projectActive = false;
        executionActive = false;
        imgSrc = "/design.avif";
    }

    function toggleProject() : void {
        designActive = false;
        projectActive = true;
        executionActive = false;
        imgSrc = "/project.webp";
    }

    function toggleExecution() : void {
        designActive = false;
        projectActive = false;
        executionActive = true;
        imgSrc = "/execution.jpg";
    }

</script>

<div class="flex bg-black text-gray-600 px-8">
    <!-- left -->
    <div class="flex flex-col items-start w-2/5">
        <button class="border-l-4 px-4 text-3xl {designActive ? 'text-white border-red-500' : 'text-gray-600 border-gray-600'}"
        on:click={toggleDesign}>Design</button>
        <button class="border-l-4 px-4 text-3xl {projectActive ? 'text-white border-red-500' : 'text-gray-600 border-gray-600'}"
        on:click={toggleProject}>Project</button>
        <button class="border-l-4 px-4 text-3xl {executionActive ? 'text-white border-red-500' : 'text-gray-600 border-gray-600'}"
        on:click={toggleExecution}>Execution</button>
        

        <div>

            {#if designActive}
                <p in:fade out:fade>Mera loda hai japani Mera loda hai japani Mera loda hai japani Mera loda hai japani Mera loda hai japani Mera loda hai japani Mera loda hai japani Mera loda hai japani Mera loda hai japani Mera loda hai japani Mera loda hai japani </p>
            {:else if projectActive}
                <p in:fade out:fade>Meri chut hai englishtani Meri chut hai englishtani Meri chut hai englishtani Meri chut hai englishtani Meri chut hai englishtani Meri chut hai englishtani Meri chut hai englishtani Meri chut hai englishtani Meri chut hai englishtani Meri chut hai englishtani Meri chut hai englishtani </p>
            {:else if executionActive}
                <p in:fade out:fade>Meri gaand bhutani Meri gaand bhutani Meri gaand bhutani Meri gaand bhutani Meri gaand bhutani Meri gaand bhutani Meri gaand bhutani Meri gaand bhutani Meri gaand bhutani Meri gaand bhutani Meri gaand bhutani </p>
            {/if}
        </div>
    </div>




    <!-- right, image -->
    <!-- TODO: keep images same aspect ratio or styling fucking breaks -->
    <div class="relative w-3/5 h-50 overflow-hidden">
        <img class="w-full h-full object-contain" src={imgSrc}>
    </div>
</div>