
<script lang="ts">

  export let sno: string;
  export let title: string;
  export let text: string;
  export let keyPoints: string[];

</script>

<div class="transition rounded-lg  border-red border hover:bg-red hover:bg-opacity-10 text-white">
  <div class=" p-7">
    <p class="text-sm text-white font-bold leading-[1.4] tracking-[0.04em]">
      {sno}
    </p>

    <div class="">
      <p class="whitespace-pre-line text-lg font-medium mt-7 lg:text-3xl">{title}</p>
    </div>

    <div class="">
      <p class="whitespace-pre-line text-lg font-medium mt-7">{text}</p>
    </div>

  </div>

  <div class="flex items-end justify-between px-7 py-8  ">
    {#each keyPoints as keyPoint}
        <p class="text-sm leading-[1.2]">{keyPoint}</p>
    {/each}
</div>
</div>
