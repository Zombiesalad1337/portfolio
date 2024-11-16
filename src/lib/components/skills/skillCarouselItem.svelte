<script lang="ts">
	export let name: string;
	export let img: string;
</script>

<div class="flex flex-col justify-center items-center min-w-[2rem] gap-y-1rem">
	<img src={img} class="~h-[8rem]/[10rem] max-h-[10rem]" />
	<p class="text-text text-xl">{name}</p>
</div>
