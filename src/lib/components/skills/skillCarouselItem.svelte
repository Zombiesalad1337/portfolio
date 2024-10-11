<script lang="ts">
	export let name: string;
	export let img: string;
</script>

<div class="flex flex-col justify-center items-center min-w-[2rem] gap-y-1rem">
	<img src={img} class="w-6rem" />
	<p class="text-white text-xl">{name}</p>
</div>
