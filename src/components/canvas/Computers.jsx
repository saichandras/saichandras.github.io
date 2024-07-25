'use client';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Computers = ({ isMobile, isTablet, isSmallTablet }) => {
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

  return (
    <mesh>
      <hemisphereLight intensity={3.5} groundColor="black" />
      <pointLight intensity={2} position={[0, 1, 0]} />
      <primitive object={scene} scale={scale} position={position} rotation={[-0.01, -0.2, -0.1]} />
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
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallTablet, setIsSmallTablet] = useState(false);

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

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Computers isMobile={isMobile} isTablet={isTablet} isSmallTablet={isSmallTablet} />
      <Preload all />
    </Canvas>
  );
};

ComputersCanvas.propTypes = {};

export default ComputersCanvas;
