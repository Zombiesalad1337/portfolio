<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { gsap } from 'gsap';

  let canvas;
  let baseScrollSpeed = 0.5;
  let amplifiedScrollSpeed = baseScrollSpeed;
  let scrollAmount = 0;
  let lastScrollTime = 0;
  let scrollDirection = 1;

  onMount(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create star geometry and material
    const starCount = 1000;
    const starGeometry = new THREE.CircleGeometry(1, 6);

    const createStarMaterial = (color) => new THREE.MeshBasicMaterial({
      color: color,
      side: THREE.DoubleSide
    });

    const stars = [];

    const createStar = (position) => {
      const starMaterial = createStarMaterial(0xffffff);
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(...position);
      scene.add(star);
      stars.push(star);

      const twinkleDuration = THREE.MathUtils.randFloat(0.5, 2);
      const twinkleScale = THREE.MathUtils.randFloat(1.5, 3);

      gsap.to(star.scale, {
        x: twinkleScale,
        y: twinkleScale,
        duration: twinkleDuration,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: { each: 0.1, from: "random" }
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

    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);

      const now = Date.now();
      if (now - lastScrollTime > 100) {
        amplifiedScrollSpeed += (baseScrollSpeed - amplifiedScrollSpeed) * 0.1;
      }

      stars.forEach(star => {
        star.position.z -= amplifiedScrollSpeed * scrollDirection;
        if (star.position.z < -1000) star.position.z = 1000;
        if (star.position.z > 1000) star.position.z = -1000;

        const colorIntensity = Math.min(Math.max(0.15 * amplifiedScrollSpeed / baseScrollSpeed + 0.2, 1), 5);
        const colorShift = scrollDirection === 1
          ? new THREE.Color(1, 1 - 0.2 * colorIntensity, 1 - 0.2 * colorIntensity)
          : new THREE.Color(1 - 0.2 * colorIntensity, 1 - 0.2 * colorIntensity, 1);
        star.material.color.set(colorShift);
      });

      renderer.render(scene, camera);
    };

    animate();

    const resizeHandler = () => {
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

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
  });
</script>

<canvas bind:this={canvas} style="display: block;"></canvas>

<style>
  body {
    margin: 0;
    overflow: hidden;
    background: transparent;
  }
</style>
