import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';
import Scene from './Scene';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <>
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
      <Sphere ref={sphereRef} args={[1, 32, 32]} scale={2}>
        <MeshDistortMaterial
          color="#1e1b4b"
          attach="material"
          distort={0.3}
          speed={1}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      <Scene>
        <AnimatedSphere />
        <fog attach="fog" args={['#1e1b4b', 5, 15]} />
      </Scene>
    </div>
  );
}