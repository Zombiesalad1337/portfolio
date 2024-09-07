<script lang="ts">
  import { Toc } from "svelte-toc"; 
    import { page } from '$app/stores'
  import BlogCard from "$lib/components/blogCard.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import ThemeToggle from "$lib/components/themeToggle.svelte";

  export let data : any;
    $: headingSelector =
    { '/contributing': `main > h2`, '/changelog': `main > h4` }[$page.url.pathname] ??
    `main :where(h2, h3)`

</script>

<Navbar showAtScrollYMultiplier={0}></Navbar>

<div class="bg-white dark:bg-black">

  <ThemeToggle></ThemeToggle>
  <div class="flex">
    <div class="w-4/5">
      <!-- TODO: reduce gap on after mobile breakpoint triggered -->
      Concepts / {data.metadata.category}
    </div>
    <div class="w-1/5 text-right">
      <p>Published on {data.metadata.date}</p>
      <p>Read time {data.metadata.readTime}</p>
    </div>
  </div>

  <div class="flex pt-20 pb-20">
    <div class="w-4/5 text-5xl">
    <strong>{data.metadata.title}</strong>
    </div>
    <div class="w-1/5 flex flex-col items-end">
      <div class="mt-auto">
        <div class="flex items-center">
          <p>Share: </p>
          <!-- TODO: Add dynamic sharable link logic -->
          <button class="ml-2 rounded-full h-12 w-12 flex items-center justify-center bg-red-500">f</button> 
          <button class="ml-2 rounded-full h-12 w-12 flex items-center justify-center bg-red-500">in</button> 
          <button class="ml-2 rounded-full h-12 w-12 flex items-center justify-center bg-red-500">x</button> 
        </div>
      </div>
    </div>
  </div>

  <img src="{data.metadata.headerImage}" alt="Description of image" class="mb-10 w-full max-h-[50vh] h-auto object-cover">



  <div class="mb-20 flex prose !max-w-none">
      <div class="w-1/5 mr-10">
          <Toc />
          <div>Find me in the alps</div>
      </div>
      <div class="w-4/5">
          <svelte:component this={data.content} {...data.metadata} />
      </div>
  </div>

<h1 class="text-4xl mb-5"> Related Resources</h1>
<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each data.blogs.slice(0, 3) as blog}
    <div>
      <BlogCard {...blog} />
    </div>
  {/each}
</div>

</div>
  

