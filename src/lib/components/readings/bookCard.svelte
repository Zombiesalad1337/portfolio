<script lang="ts">
	export let id: number;
	export let title: string;
	export let author: string;
	export let description: string;
	export let img: string;
	export let type: string;
</script>

<div
	class="flex w-full aspect-[4] bg-primary bg-opacity-25 justify-between ~/md:~h-[6.5rem]/[13rem]"
>
	<!-- text -->
	<div class="grow"></div>
	<!-- img -->
	<div class="w-[30%] text-center">
		<img src={img} class="object-cover w-full h-full bg-center" />
	</div>
</div>
