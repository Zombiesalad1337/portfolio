<script>
  import Toc from 'svelte-toc'
  import staticData from "$lib/staticData.json";
</script>


<div class="flex">
    <div class="w-1/5">
        <Toc />
    </div>

    <div class="w-4/5">
        <main >
        {#each staticData.sections as section}
            <h2 class="text-5xl">{section.title}</h2>
            <p class="text-xl">{section.content}</p>
        {/each}
        <h1>Page Title</h1>
        <h2>Section</h2>
        <h3>Subsection</h3>
        <h2>Next Section</h2>
        <h3 class="toc-exclude">Another Subsection</h3>
        </main>

    </div>

</div>