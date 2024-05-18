<script lang="ts">

	import BlogLayout from "$lib/components/blogLayout.svelte";
    
    import staticData from '$lib/staticData.json';

    // let blogData = JSON.parse(staticData);

</script>


<BlogLayout blog={staticData.sections}>
</BlogLayout>
