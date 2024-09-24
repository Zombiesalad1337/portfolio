<script lang="ts">
	import Footer from '$components/footer.svelte';
	import Navbar from '$components/navbar.svelte';
</script>

<div class="bg-black">
	<Navbar showAtScrollYMultiplier={0} initiallyVisible={true}></Navbar>
	<Footer></Footer>
</div>
