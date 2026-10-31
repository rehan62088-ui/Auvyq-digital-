import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Procedural dynamic texture generating scrolling high-contrast luxury website layouts in warm monochrome palette
function createWebsitePreviewTexture(): { texture: THREE.CanvasTexture; canvas: HTMLCanvasElement } {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d')!;

  // Background: Smoky Black #11120D
  ctx.fillStyle = '#11120D';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const drawSiteSection = (yOffset: number, brand: string, tag: string, style: 'hotel' | 'minimal' | 'agency' | 'architecture') => {
    // Header bar in Olive Drab / Smoky Black tone
    ctx.fillStyle = 'rgba(86, 84, 73, 0.4)';
    ctx.fillRect(40, yOffset + 30, 944, 50);
    ctx.strokeStyle = 'rgba(216, 207, 188, 0.20)';
    ctx.strokeRect(40, yOffset + 30, 944, 50);

    // Brand logo in Floral White
    ctx.fillStyle = '#FFFBF4';
    ctx.font = '600 20px sans-serif';
    ctx.fillText(brand, 65, yOffset + 62);

    // Nav pills in Bone
    ctx.fillStyle = 'rgba(216, 207, 188, 0.7)';
    ctx.font = '400 13px sans-serif';
    ctx.fillText('Overview', 620, yOffset + 61);
    ctx.fillText('Experience', 720, yOffset + 61);
    ctx.fillText('Reserve', 830, yOffset + 61);

    // Hero title in Floral White
    ctx.fillStyle = '#FFFBF4';
    ctx.font = '700 44px sans-serif';
    ctx.fillText(tag, 65, yOffset + 155);

    // Subtitle in Bone
    ctx.fillStyle = 'rgba(216, 207, 188, 0.7)';
    ctx.font = '400 16px sans-serif';
    ctx.fillText('Engineered for direct conversion, sub-second latency and brand authority.', 65, yOffset + 195);

    // Hero visual mockup frame
    ctx.fillStyle = 'rgba(86, 84, 73, 0.3)';
    ctx.fillRect(65, yOffset + 230, 894, 210);
    ctx.strokeStyle = 'rgba(216, 207, 188, 0.15)';
    ctx.strokeRect(65, yOffset + 230, 894, 210);

    // Visual elements inside mockup
    if (style === 'hotel') {
      ctx.fillStyle = '#1A1B15';
      ctx.fillRect(95, yOffset + 255, 420, 155);
      ctx.fillStyle = 'rgba(86, 84, 73, 0.5)';
      ctx.fillRect(535, yOffset + 255, 395, 70);
      ctx.fillStyle = '#FFFBF4';
      ctx.font = '600 15px sans-serif';
      ctx.fillText('Cliffside Ocean Sanctuary · Uluwatu', 545, yOffset + 295);
      // Button: Floral White fill, Smoky Black text
      ctx.fillStyle = '#FFFBF4';
      ctx.fillRect(535, yOffset + 345, 180, 42);
      ctx.fillStyle = '#11120D';
      ctx.font = '600 13px sans-serif';
      ctx.fillText('Book Direct ↗', 565, yOffset + 371);
    } else if (style === 'architecture') {
      ctx.fillStyle = '#181914';
      ctx.fillRect(95, yOffset + 255, 500, 155);
      ctx.fillStyle = '#FFFBF4';
      ctx.font = '300 24px serif';
      ctx.fillText('Villa Vanta Monograph', 120, yOffset + 310);
      ctx.fillStyle = 'rgba(216, 207, 188, 0.7)';
      ctx.font = '400 13px sans-serif';
      ctx.fillText('Brutalist private sanctuary in Zurich', 120, yOffset + 340);
    } else {
      ctx.fillStyle = '#181914';
      ctx.fillRect(95, yOffset + 255, 260, 155);
      ctx.fillRect(380, yOffset + 255, 260, 155);
      ctx.fillRect(665, yOffset + 255, 260, 155);
    }

    // Divider
    ctx.strokeStyle = 'rgba(216, 207, 188, 0.14)';
    ctx.beginPath();
    ctx.moveTo(40, yOffset + 480);
    ctx.lineTo(984, yOffset + 480);
    ctx.stroke();
  };

  drawSiteSection(0, 'AZURE HAVEN', 'Direct Oceanfront Sanctuary', 'hotel');
  drawSiteSection(512, 'AURA ATHLETICS', 'Architecture in Motion', 'minimal');
  drawSiteSection(1024, 'VANTA REALTY', 'Collectible Modern Sanctuaries', 'architecture');
  drawSiteSection(1536, 'NOIR ATELIER', 'Avant-Garde Tasting Monograph', 'agency');

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 0.5);
  texture.needsUpdate = true;
  return { texture, canvas };
}

export const Hero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.2, 4.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Warm monochrome lighting
    // Ambient light: Olive-tinted graphite tone
    const ambientLight = new THREE.AmbientLight(0x565449, 1.0);
    scene.add(ambientLight);

    // Key Light: Warm-white (#FFFDF8)
    const keyLight = new THREE.DirectionalLight(0xFFFDF8, 2.4);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    // Rim Light: Bone (#D8CFBC)
    const boneRimLight = new THREE.DirectionalLight(0xD8CFBC, 1.8);
    boneRimLight.position.set(-5, 3, -2);
    scene.add(boneRimLight);

    // Subtle upward bounce light in warm tone
    const bounceLight = new THREE.PointLight(0xD8CFBC, 0.8, 8);
    bounceLight.position.set(0, -2, 2.5);
    scene.add(bounceLight);

    // Main Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials: Chrome, Smoky Black, Olive-tinted graphite
    const smokyChromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x11120D,
      metalness: 0.95,
      roughness: 0.12,
    });

    const oliveGraphiteMaterial = new THREE.MeshStandardMaterial({
      color: 0x2A2A23,
      metalness: 0.88,
      roughness: 0.26,
    });

    const boneAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xD8CFBC,
      metalness: 0.6,
      roughness: 0.35,
    });

    // Texture
    const { texture: previewTexture } = createWebsitePreviewTexture();
    const screenMaterial = new THREE.MeshStandardMaterial({
      map: previewTexture,
      roughness: 0.22,
      metalness: 0.08,
    });

    // Monitor Group
    const monitorGroup = new THREE.Group();
    monitorGroup.position.set(0, 0.1, 0);
    mainGroup.add(monitorGroup);

    // 1. Monitor Bezel Frame (Smoky Chrome)
    const bezelGeo = new THREE.BoxGeometry(3.2, 2.0, 0.08);
    const bezelMesh = new THREE.Mesh(bezelGeo, smokyChromeMaterial);
    bezelMesh.position.set(0, 0.35, 0);
    monitorGroup.add(bezelMesh);

    // 2. Inner Screen Display
    const screenGeo = new THREE.PlaneGeometry(3.05, 1.85);
    const screenMesh = new THREE.Mesh(screenGeo, screenMaterial);
    screenMesh.position.set(0, 0.35, 0.045);
    monitorGroup.add(screenMesh);

    // 3. Monitor Back Housing (Olive-tinted Graphite)
    const backGeo = new THREE.BoxGeometry(1.8, 1.2, 0.08);
    const backMesh = new THREE.Mesh(backGeo, oliveGraphiteMaterial);
    backMesh.position.set(0, 0.35, -0.06);
    monitorGroup.add(backMesh);

    // 4. Stand Neck
    const neckGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.9, 32);
    const neckMesh = new THREE.Mesh(neckGeo, smokyChromeMaterial);
    neckMesh.position.set(0, -0.6, -0.04);
    neckMesh.rotation.x = 0.1;
    monitorGroup.add(neckMesh);

    // 5. Heavy Graphite Pedestal Base
    const baseGeo = new THREE.CylinderGeometry(0.7, 0.75, 0.06, 48);
    const baseMesh = new THREE.Mesh(baseGeo, oliveGraphiteMaterial);
    baseMesh.position.set(0, -1.05, 0.05);
    monitorGroup.add(baseMesh);

    // Monolithic faceted accents (strictly no circles, rings or orbs)
    const slab1Geo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const slab1 = new THREE.Mesh(slab1Geo, smokyChromeMaterial);
    slab1.position.set(-2.4, 1.2, -0.6);
    slab1.rotation.set(0.4, 0.6, 0.2);
    mainGroup.add(slab1);

    const slab2Geo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const slab2 = new THREE.Mesh(slab2Geo, oliveGraphiteMaterial);
    slab2.position.set(2.4, -1.1, -0.4);
    slab2.rotation.set(-0.3, 0.5, 0.4);
    mainGroup.add(slab2);

    const prismGeo = new THREE.ConeGeometry(0.35, 0.7, 4);
    const prism = new THREE.Mesh(prismGeo, boneAccentMaterial);
    prism.position.set(2.3, 1.1, -0.7);
    prism.rotation.set(0.8, 0.4, 0.5);
    mainGroup.add(prism);

    // Mouse Parallax & Scroll tracking
    const mouse = { x: 0, y: 0 };
    let scrollProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = window.innerHeight;
      scrollProgress = Math.min(Math.max(scrollY / heroHeight, 0), 1);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll the live website canvas preview texture
      previewTexture.offset.y = (elapsedTime * 0.035) % 1;

      // Subtle breathing float for monitor
      const floatY = Math.sin(elapsedTime * 1.2) * 0.04;
      monitorGroup.position.y = 0.1 + floatY;

      // Gentle interactive tilt following mouse + scroll tilt
      const targetRotY = mouse.x * 0.25;
      const targetRotX = -mouse.y * 0.15 + (scrollProgress * 0.3);

      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.05;

      // Slow floating rotation of geometric monolithic accents
      slab1.rotation.x += 0.004;
      slab1.rotation.y += 0.005;
      slab2.rotation.x -= 0.003;
      slab2.rotation.z += 0.004;
      prism.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      previewTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing relative"
    >
      {/* Soft Bone-colored radial spotlight (6–10% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(216,207,188,0.08)_0%,transparent_70%)]" 
        aria-hidden="true" 
      />
    </div>
  );
};
