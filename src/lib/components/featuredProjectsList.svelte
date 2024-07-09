<script lang="ts">
	import FeaturedProjectsListItem from "./featuredProjectsListItem.svelte";

    export let data : any;
</script>


<style>
</style>

<div class="mt-4 mb-4">
{#each data as row}
    <FeaturedProjectsListItem {...row}></FeaturedProjectsListItem>
{/each}
</div>
