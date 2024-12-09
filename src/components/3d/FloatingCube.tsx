import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import Scene from './Scene';

function AnimatedCube() {
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      cubeRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.5) * 0.2;
      cubeRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <Box ref={cubeRef} args={[1, 1, 1]}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.1}
        speed={1}
        roughness={0}
        metalness={1}
        envMapIntensity={0.5}
      />
    </Box>
  );
}

export default function FloatingCube({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Scene cameraPosition={[0, 0, 4]}>
        <AnimatedCube />
      </Scene>
    </div>
  );
}