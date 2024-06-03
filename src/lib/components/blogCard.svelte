<script>
  export let headerImage;
  export let type;
  export let date;
  export let title;
  export let category;
  export let slug;
</script>

<a href="/concepts/{slug}">

<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <!-- Image -->
  <img class="w-full" src={headerImage} alt={title} />
  <div class="px-6 py-4">
    <!-- Type and Date -->
    <div class="flex justify-between mb-4">
      <span class="text-sm">{type}</span>
      <span class="text-sm text-gray-600">{date}</span>
    </div>
    <!-- Title -->
    <div class="font-bold text-xl mb-4">{title}</div>
    <!-- Category -->
    <div class="inline-block bg-gray-500 text-white font-bold py-1 px-3 rounded-full">{category}</div>
  </div>
</div>

  
</a>

