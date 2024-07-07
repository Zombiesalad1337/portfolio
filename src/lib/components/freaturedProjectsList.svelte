<script lang="ts">
    export let data : any;
</script>


<style>
</style>

{#each data as row}
<div class="flex items-end">

    <div class="text-3xl text-white">
        {row.title}
    </div>

    <div class="align-middle">
        
    </div>

</div>
{/each}
