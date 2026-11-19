'use client';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';

const REST_YAW = -0.2;
const SWAY_AMPLITUDE = 0.24;
const SWAY_PERIOD = 8;
const RESUME_DELAY = 2;

const Computers = ({ isMobile, isTablet, isSmallTablet, draggingRef, motionRef }) => {
  const modelRef = useRef();
  const { scene } = useGLTF('./desktop_pc/scene.gltf');
  let scale, position;

  if (isMobile) {
    scale = 0.95;
    position = [0, -2, -3.02];
  } else if (isSmallTablet) {
    scale = 1.0;
    position = [0, -2.35, -2.6];
  } else if (isTablet) {
    scale = 1.0;
    position = [0, -2.35, -2.0];
  } else {
    scale = 1.1;
    position = [0, -2.25, -1.8];
  }

  useFrame((_, delta) => {
    const model = modelRef.current;
    const motion = motionRef.current;
    if (!model || !motion) return;

    if (!motion.enabled) {
      motion.sway = 0;
      motion.phase = 0;
      model.rotation.y = REST_YAW;
      return;
    }

    const step = Math.min(delta, 0.05);

    if (draggingRef.current) {
      motion.wait = RESUME_DELAY;
      model.rotation.y = REST_YAW + motion.sway;
      return;
    }

    if (motion.wait > 0) {
      motion.wait = Math.max(0, motion.wait - step);
      motion.sway += (0 - motion.sway) * 0.12;
      if (Math.abs(motion.sway) < 0.001) motion.sway = 0;
      motion.phase = 0;
      model.rotation.y = REST_YAW + motion.sway;
      return;
    }

    motion.phase += step;
    motion.sway = Math.sin((motion.phase / SWAY_PERIOD) * Math.PI * 2) * SWAY_AMPLITUDE;
    model.rotation.y = REST_YAW + motion.sway;
  });

  return (
    <mesh>
      <hemisphereLight intensity={3.5} groundColor="black" />
      <pointLight intensity={2} position={[0, 1, 0]} />
      <primitive
        ref={modelRef}
        object={scene}
        scale={scale}
        position={position}
        rotation={[-0.01, REST_YAW, -0.1]}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    </mesh>
  );
};

Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isSmallTablet: PropTypes.bool.isRequired,
  draggingRef: PropTypes.shape({ current: PropTypes.bool }).isRequired,
  motionRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallTablet, setIsSmallTablet] = useState(false);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const draggingRef = useRef(false);
  const motionRef = useRef({ enabled: true, sway: 0, phase: 0, wait: 0 });

  const onDragStart = useCallback(() => {
    draggingRef.current = true;
  }, []);

  const onDragEnd = useCallback(() => {
    draggingRef.current = false;
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 500px)');
    const smallTabletQuery = window.matchMedia('(max-width: 700px) and (min-width: 501px)');
    const tabletQuery = window.matchMedia('(max-width: 1000px) and (min-width: 701px)');

    setIsMobile(mobileQuery.matches);
    setIsSmallTablet(smallTabletQuery.matches);
    setIsTablet(tabletQuery.matches);

    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleSmallTabletQueryChange = (event) => {
      setIsSmallTablet(event.matches);
    };

    const handleTabletQueryChange = (event) => {
      setIsTablet(event.matches);
    };

    mobileQuery.addEventListener('change', handleMobileQueryChange);
    smallTabletQuery.addEventListener('change', handleSmallTabletQueryChange);
    tabletQuery.addEventListener('change', handleTabletQueryChange);

    return () => {
      mobileQuery.removeEventListener('change', handleMobileQueryChange);
      smallTabletQuery.removeEventListener('change', handleSmallTabletQueryChange);
      tabletQuery.removeEventListener('change', handleTabletQueryChange);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setReducedMotion(event.matches);
    setReducedMotion(media.matches);
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const container = document.querySelector('.computers-canvas-container');
    if (!container || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  motionRef.current.enabled = inView && !reducedMotion;

  return (
    <Canvas
      frameloop={inView && !reducedMotion ? 'always' : 'demand'}
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        onStart={onDragStart}
        onEnd={onDragEnd}
      />
      <Computers
        isMobile={isMobile}
        isTablet={isTablet}
        isSmallTablet={isSmallTablet}
        draggingRef={draggingRef}
        motionRef={motionRef}
      />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
