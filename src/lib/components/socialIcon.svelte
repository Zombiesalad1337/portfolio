<script lang="ts">
	export let src: string;
	export let classes: string;
	export let link: string;
	export let srcDark: string;
</script>

<a href={link} target="_blank" rel="noopener noreferrer">
	<img src={srcDark} class="{classes} filter invert brightness-100 w-1.5rem" />
</a>
