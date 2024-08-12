<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { gsap } from 'gsap';
	import LoadingScreen from './loadingScreen.svelte';
	import { slide } from 'svelte/transition';
	let canvas;
	let baseScrollSpeed = 0.5;
	let amplifiedScrollSpeed = baseScrollSpeed;
	let scrollAmount = 0;
	let lastScrollTime = 0;
	let scrollDirection = 1;

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setClearColor(0x000000, 1); // Set background color to black
		renderer.setSize(window.innerWidth, window.innerHeight);
		scene.add(new THREE.AmbientLight(0x404040));

		// Render a basic object
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		camera.position.z = 5;

            const resizeHandler = () => {
      console.log("resize: " + window.innerWidth + " " + window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', resizeHandler);

    const scrollHandler = () => {
      let currentScroll = window.scrollY;
      scrollDirection = currentScroll > scrollAmount ? 1 : -1;
      scrollAmount = currentScroll;
      lastScrollTime = Date.now();
      amplifiedScrollSpeed = baseScrollSpeed * 24;
    };

    window.addEventListener('scroll', scrollHandler);
		function animate() {
			requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		}
		animate();

	});
</script>

<canvas bind:this={canvas} class="canvas"></canvas>

<style>
	.canvas {
		margin: 0;
		overflow: hidden;
		position: fixed;
        background-color: black;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -10;
		/* TODO: force GPU rendering */
		/* -webkit-transform: translateZ(0);
    transform: translateZ(0); */
	}
</style>
