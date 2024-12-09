import { ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
}

export default function Scene({ 
  children, 
  cameraPosition = [0, 0, 5] 
}: SceneProps) {
  return (
    <Canvas
      camera={{ position: cameraPosition as THREE.Vector3Tuple }}
      gl={{ 
        antialias: false,
        powerPreference: "high-performance",
        alpha: false
      }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {children}
      </Suspense>
    </Canvas>
  );
}