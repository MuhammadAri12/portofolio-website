/* ============================================================
   Hero 3D scene — Three.js
   Partikel orbit + wireframe geometri + parallax mouse
   ============================================================ */
(function () {
  const canvas = document.getElementById("bg3d");
  if (!canvas || typeof THREE === "undefined") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 760px)").matches;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0b, 0.055);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 26);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  /* ---------- Partikel (kubah orbit) ---------- */
  const COUNT = isMobile ? 500 : 1100;
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);

  const accent = new THREE.Color(0x8ab4ff);
  const white = new THREE.Color(0xffffff);

  for (let i = 0; i < COUNT; i++) {
    // sebar partikel dalam bola hollow
    const r = 14 + Math.random() * 22;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = r * Math.cos(phi);

    const mix = Math.random();
    const c = white.clone().lerp(accent, mix);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const pMat = new THREE.PointsMaterial({
    size: isMobile ? 0.1 : 0.075,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  /* ---------- Wireframe shapes ---------- */
  const shapes = [];
  const geos = [
    new THREE.IcosahedronGeometry(3.2, 1),
    new THREE.TorusKnotGeometry(2, 0.55, 90, 10),
    new THREE.OctahedronGeometry(2.2, 0),
  ];

  const layout = [
    { x: 9.5, y: 2.5, z: -6, s: 1 },
    { x: -10, y: -3, z: -4, s: 0.85 },
    { x: -6.5, y: 4.5, z: -10, s: 0.7 },
  ];

  if (isMobile) {
    layout[0].x = 5; layout[0].y = 5;
    layout[1].x = -5; layout[1].y = -5;
  }

  geos.forEach((geo, i) => {
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({
        color: i === 1 ? 0x8ab4ff : 0x555558,
        transparent: true,
        opacity: i === 1 ? 0.5 : 0.3,
      })
    );
    const inner = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: 0x0a0a0b })
    );
    inner.scale.setScalar(0.97);

    const group = new THREE.Group();
    group.add(inner, wire);
    group.position.set(layout[i].x, layout[i].y, layout[i].z);
    group.scale.setScalar(layout[i].s);
    group.userData = {
      rotX: (Math.random() - 0.5) * 0.004,
      rotY: (Math.random() - 0.5) * 0.005 + 0.002,
      baseY: layout[i].y,
      floatOffset: Math.random() * Math.PI * 2,
    };
    scene.add(group);
    shapes.push(group);
  });

  /* ---------- Interaksi ---------- */
  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  window.addEventListener("mousemove", (e) => {
    target.x = (e.clientX / window.innerWidth - 0.5) * 2;
    target.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Parallax scroll halus
  let scrollY = 0;
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
  }, { passive: true });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  /* ---------- Loop ---------- */
  const clock = new THREE.Clock();

  function animate() {
    const t = clock.getElapsedTime();

    // lerp mouse biar halus
    mouse.x += (target.x - mouse.x) * 0.04;
    mouse.y += (target.y - mouse.y) * 0.04;

    camera.position.x = mouse.x * 2.2;
    camera.position.y = -mouse.y * 1.6 - scrollY * 0.0022;
    camera.lookAt(0, 0, 0);

    points.rotation.y = t * 0.028 + mouse.x * 0.12;
    points.rotation.x = Math.sin(t * 0.1) * 0.05 - mouse.y * 0.08;

    shapes.forEach((s) => {
      s.rotation.x += s.userData.rotX;
      s.rotation.y += s.userData.rotY;
      s.position.y =
        s.userData.baseY + Math.sin(t * 0.6 + s.userData.floatOffset) * 0.7;
    });

    renderer.render(scene, camera);
    if (!reduceMotion) requestAnimationFrame(animate);
  }

  if (reduceMotion) {
    renderer.render(scene, camera); // satu frame statis
  } else {
    animate();
  }
})();
