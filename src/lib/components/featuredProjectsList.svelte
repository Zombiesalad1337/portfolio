<script lang="ts">
	import FeaturedProjectsListItem from "./featuredProjectsListItem.svelte";

    export let data : any;
</script>


<style>
</style>

<div class="mt-4 mb-4">
{#each data as row, index}
    <FeaturedProjectsListItem {...row} {index} ></FeaturedProjectsListItem>
{/each}
</div>
