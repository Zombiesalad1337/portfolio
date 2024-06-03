<script lang="ts">

	import BlogLayout from "$lib/components/blogLayout.svelte";
    
    import staticData from '$lib/staticData.json';

    // let blogData = JSON.parse(staticData);

    import TocLayout from "$lib/components/tocLayout.svelte";

    import Toc from 'svelte-toc';

  import BlogCard from "$lib/components/blogCard.svelte";

  export let data: { title: string; date: string; slug: string }[];
  $: console.log(data);
</script>


<!-- <BlogLayout blog={staticData.sections}>
</BlogLayout> -->

<!-- <TocLayout></TocLayout> -->



<h1 class="text-3xl">Blog Posts</h1>
<!-- <ul>
  {#each data.blogs as blog}
    <li>
      <a href={`/concepts/${blog.slug}`} data-sveltekit-preload-data="tap" data-sveltekit-preload-code="hover">{blog.title}</a> - {blog.date}
    </li>
  {/each}
</ul> -->

<div class="mx-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each data.blogs as blog}
    <div>
      <BlogCard {...blog} />
    </div>
  {/each}
</div>