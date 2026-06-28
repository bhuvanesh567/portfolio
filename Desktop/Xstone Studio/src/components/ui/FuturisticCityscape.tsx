"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";

// Custom seeded pseudo-random number generator for react SSR purity
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

interface BuildingProps {
  position: [number, number, number];
  width: number;
  height: number;
  depth: number;
}

function Building({ position, width, height, depth }: BuildingProps) {
  return (
    <mesh position={[position[0], position[1] + height / 2, position[2]]}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color="#020617"
        roughness={0.15}
        metalness={0.9}
        transparent={true}
        opacity={0.7}
      />
      {/* Dynamic highlighted edges for futuristic neon grid aesthetic */}
      <Edges scale={1.002} threshold={15} color="#22d3ee" opacity={0.35} transparent={true} />
    </mesh>
  );
}

// Network particles component representing data sparks
function ParticleGalaxy() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesCount = 200;
  const positions = useMemo(() => {
    const list = new Float32Array(particlesCount * 3);
    let seed = 42;
    for (let i = 0; i < particlesCount; i++) {
      list[i * 3] = (seededRandom(seed++) - 0.5) * 50;
      list[i * 3 + 1] = seededRandom(seed++) * 30 - 5;
      list[i * 3 + 2] = (seededRandom(seed++) - 0.5) * 50;
    }
    return list;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#22d3ee"
        size={0.12}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.65}
      />
    </points>
  );
}

interface LightBeamProps {
  position: [number, number, number];
  height: number;
  seed: number;
}

function VolumetricLightBeam({ position, height, seed }: LightBeamProps) {
  const cylinderRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (cylinderRef.current) {
      const time = state.clock.getElapsedTime();
      const wave = Math.sin(time * 1.5 + seed) * 0.18 + 0.35;
      if (cylinderRef.current.material) {
        (cylinderRef.current.material as THREE.MeshBasicMaterial).opacity = wave;
      }
    }
  });

  return (
    <mesh ref={cylinderRef} position={position}>
      <cylinderGeometry args={[0.02, 0.5, height, 8, 1, true]} />
      <meshBasicMaterial
        color="#22d3ee"
        transparent={true}
        opacity={0.3}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function CityGrid() {
  const groupRef = useRef<THREE.Group>(null);
  const cursorLightRef = useRef<THREE.PointLight>(null);

  // Deterministically generate buildings and light beams
  const { buildings, lightBeams } = useMemo(() => {
    const list: JSX.Element[] = [];
    const beams: JSX.Element[] = [];
    let seed = 120;
    const gridCols = 8;
    const gridRows = 8;
    const spacing = 4.5;

    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const x = (i - gridCols / 2) * spacing + (seededRandom(seed++) - 0.5) * 1.2;
        const z = (j - gridRows / 2) * spacing + (seededRandom(seed++) - 0.5) * 1.2;
        const width = seededRandom(seed++) * 0.8 + 0.8;
        const depth = seededRandom(seed++) * 0.8 + 0.8;
        const height = seededRandom(seed++) * 7 + 2;

        list.push(
          <Building
            key={`b-${i}-${j}`}
            position={[x, -5, z]}
            width={width}
            height={height}
            depth={depth}
          />
        );

        // Volumetric beams mapping on taller skyscrapers
        if (height > 6.5 && seededRandom(seed++) > 0.6) {
          beams.push(
            <VolumetricLightBeam
              key={`beam-${i}-${j}`}
              position={[x, -5 + height + 7, z]}
              height={14}
              seed={seed}
            />
          );
        }
      }
    }
    return { buildings: list, lightBeams: beams };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation on mouse/tick
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
    if (cursorLightRef.current) {
      // Dynamic cursor tracking
      cursorLightRef.current.position.x = state.pointer.x * 22;
      cursorLightRef.current.position.y = state.pointer.y * 15 + 4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient and directional lights */}
      <ambientLight intensity={0.12} />
      <directionalLight position={[10, 20, 10]} intensity={0.4} color="#2563eb" />
      
      {/* Cursor tracking specular point light */}
      <pointLight
        ref={cursorLightRef}
        intensity={2.5}
        distance={25}
        color="#22d3ee"
        decay={1.8}
      />

      {/* Meshes groups */}
      {buildings}
      {lightBeams}
      <ParticleGalaxy />
    </group>
  );
}

export default function FuturisticCityscape() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full bg-[#030712] overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 6, 20], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={["#030712", 15, 38]} />
        <CityGrid />
      </Canvas>
    </div>
  );
}
