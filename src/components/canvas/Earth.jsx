'use client';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return <primitive object={earth.scene} scale={3.37} position-y={0} rotation-y={0} />;
};

Earth.propTypes = {};

const AutoRotatingControls = (props) => {
  const controlsRef = useRef();

  useFrame((state, delta) => {
    if (controlsRef.current) {
      controlsRef.current.update(delta);
    }
  });

  return <OrbitControls ref={controlsRef} {...props} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <AutoRotatingControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
      <Preload all />
    </Canvas>
  );
};

EarthCanvas.propTypes = {};

export default EarthCanvas;
