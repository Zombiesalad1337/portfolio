<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { gsap } from 'gsap';

  let canvas;
  let baseScrollSpeed = 0.5; // Base speed of the effect
  let amplifiedScrollSpeed = baseScrollSpeed; // Initial amplified speed is the base speed
  let scrollAmount = 0;
  let lastScrollTime = 0;
  let scrollDirection = 1; // Initial scroll direction (1 for down, -1 for up)

  onMount(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create star geometry and material
    const starCount = 1000;
    const starGeometry = new THREE.CircleGeometry(1, 6); // Base geometry for the star

    const createStarMaterial = (color) => {
      return new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide
      });
    };

    // Array to hold star references
    const stars = [];

    // Create stars
    const createStar = (position) => {
      const starMaterial = createStarMaterial(0xffffff); // Initial white color
      const star = new THREE.Mesh(starGeometry, starMaterial);

      star.position.set(...position);

      // Add star to the scene
      scene.add(star);
      stars.push(star);

      // Randomize twinkle effect
      const twinkleDuration = THREE.MathUtils.randFloat(0.5, 2); // Random duration for twinkle
      const twinkleScale = THREE.MathUtils.randFloat(1.5, 3); // Random max scale for twinkle

      gsap.to(star.scale, {
        x: twinkleScale,
        y: twinkleScale,
        duration: twinkleDuration,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.1, // Stagger delay for a more natural effect
          from: "random"
        }
      });
    };

    // Create stars with random positions
    for (let i = 0; i < starCount; i++) {
      createStar([
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000)
      ]);
    }

    // Position the camera
    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);

      // Decay the scroll intensity gradually
      const now = Date.now();
      if (now - lastScrollTime > 100) { // 100ms after scroll stops
        amplifiedScrollSpeed += (baseScrollSpeed - amplifiedScrollSpeed) * 0.1; // Adjust decay rate here
      }

      // Update star positions based on the amplified scroll speed and direction
      stars.forEach(star => {
        star.position.z -= amplifiedScrollSpeed * scrollDirection;
        if (star.position.z < -1000) {
          star.position.z = 1000; // Reset position for a continuous effect
        }
        if (star.position.z > 1000) {
          star.position.z = -1000; // Reset position for a continuous effect
        }

        // Update star color based on scroll direction and speed
        const colorIntensity = Math.min(Math.max(0.15 * amplifiedScrollSpeed / baseScrollSpeed + 0.2, 1), 5);
        const colorShift = scrollDirection === 1
          ? new THREE.Color(1, 1 - 0.2 * colorIntensity, 1 - 0.2 * colorIntensity) // Red shift
          : new THREE.Color(1 - 0.2 * colorIntensity, 1 - 0.2 * colorIntensity, 1); // Blue shift
        star.material.color = colorShift;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Handle scroll event
    window.addEventListener('scroll', () => {
      let currentScroll = window.scrollY;
      scrollDirection = currentScroll > scrollAmount ? 1 : -1;
      scrollAmount = currentScroll;
      lastScrollTime = Date.now();
      amplifiedScrollSpeed = baseScrollSpeed * 24; // Amplify the speed during scroll, adjust multiplier as needed
    });

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1'; // Ensure canvas is behind other content
  });
</script>

<canvas bind:this={canvas} style="display: block;"></canvas>

<style>
  body {
    margin: 0;
    overflow: hidden;
    background: transparent; /* Ensure body background is transparent */
  }
</style>
