<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import gsap from 'gsap';

	let canvas;

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); // alpha: true makes the background transparent
		renderer.setSize(window.innerWidth, window.innerHeight);

		// Create an ellipse shape
		const ellipseShape = new THREE.Shape();
		ellipseShape.absellipse(0, 0, 5, 3.5, 0, 2 * Math.PI, false);

		const geometry = new THREE.ShapeGeometry(ellipseShape, 64);
		const material = new THREE.MeshBasicMaterial({ color: 0x101010 });
		const ellipse = new THREE.Mesh(geometry, material);
		const ellipse2 = new THREE.Mesh(geometry, material);
		scene.add(ellipse);
		scene.add(ellipse2);

		camera.position.z = 5;

		ellipse.position.set(0, 4.5, 0);
		ellipse2.position.set(0, -4.5, 0);

		function animate() {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		}
		animate();

		window.addEventListener('resize', () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		});

		canvas.style.position = 'relative';
		canvas.style.top = '0';
		canvas.style.left = '0';
		canvas.style.width = '100%';
		canvas.style.height = '100%';
		canvas.style.zIndex = '-1'; // Ensure canvas is behind other content

		// Example GSAP animation
		// gsap.to(ellipse.scale, { duration: 2, x: 2, y: 2, repeat: -1, yoyo: true });
	});
</script>

<canvas bind:this={canvas} class="canvas"></canvas>

<!-- Add a button between the ellipses -->
<a href="/concepts">
	<button class="get-started-button">Get Started</button>
</a>

<style>
	.canvas {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.get-started-button {
		position: absolute;
		top: 50vh;
		left: 50vw;
		transform: translate(-50%, -50%);
		padding: 10px 20px;
		font-size: 16px;
		color: white;
		background-color: red;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		z-index: 1; /* Ensure button is above the canvas */
	}

	.get-started-button:hover {
		background-color: darkblue;
	}
</style>
