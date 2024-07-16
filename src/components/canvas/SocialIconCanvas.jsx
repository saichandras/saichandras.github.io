import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const SocialIcon = ({ link, iconPath, args }) => {
  const { scene } = useGLTF(iconPath);

  const handleIconClick = () => {
    console.log('clicked');
    window.open(link, '_blank');
  };

  return (
    <mesh onClick={handleIconClick}>
      <hemisphereLight intensity={4.5} groundColor="black" />
      <pointLight intensity={3.5} position={[0, 0, 2]} />
      <primitive object={scene} scale={args.scale} position={args.position} />
    </mesh>
  );
};

const AutoRotatingControls = (props) => {
  const controlsRef = useRef();

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  }, []);

  return <OrbitControls ref={controlsRef} {...props} />;
};

const SocialIconCanvas = ({ link, iconPath, args }) => {
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
        position: [1, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <AutoRotatingControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping
          dampingFactor={0.1}
        />
        <SocialIcon link={link} iconPath={iconPath} args={args} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SocialIconCanvas;
