<script lang="ts">

	import BlogLayout from "$lib/components/blogLayout.svelte";
    
    import staticData from '$lib/staticData.json';

    // let blogData = JSON.parse(staticData);

    import TocLayout from "$lib/components/tocLayout.svelte";

    import Toc from 'svelte-toc';

  export let data: { title: string; date: string; slug: string }[];
  $: console.log(data);
</script>


<!-- <BlogLayout blog={staticData.sections}>
</BlogLayout> -->

<!-- <TocLayout></TocLayout> -->



<h1>Blog Posts</h1>
<ul>
  {#each data.blogs as blog}
    <li>
      <a href={`/concepts/${blog.slug}`}>{blog.title}</a> - {blog.date}
    </li>
  {/each}
</ul>
