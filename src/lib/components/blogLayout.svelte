<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let blog : any;

  let sections : any = blog;


  // Sections data

  
  let currentSection = writable(sections[0].id);

  function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight * 0.3;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionElement = document.getElementById(sections[i].id);
      if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
        currentSection.set(sections[i].id);
        break;
      }
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function scrollToSection(id : any) {
    if (document.getElementById(id)){
        document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<style>
  .active {
    @apply font-bold text-red;
  }
</style>

<div class="flex">
  <div class="w-1/4 fixed h-screen overflow-y-auto p-4 bg-gray-100">
    <ul>
      {#each sections as section}
        <li class={$currentSection === section.id ? 'active' : ''}>
          <a on:click={() => scrollToSection(section.id)}>{section.title}</a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="w-3/4 ml-auto p-4">
    {#each sections as section}
      <div id={section.id} class="mb-8">
        <h1 class="text-5xl font-bold mb-4">{section.title}</h1>
        <p class="text-3xl">{section.content}</p>
      </div>
    {/each}
  </div>
</div>
