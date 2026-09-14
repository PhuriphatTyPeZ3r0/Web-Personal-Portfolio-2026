'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Html } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

interface TouchCarouselProps {
  items: CarouselItem[];
  autoRotate?: boolean;
  autoRotateInterval?: number;
}

const CAROUSEL_RADIUS = 2.2;

function CarouselCard({ item, index, total, radius }: { item: CarouselItem; index: number; total: number; radius: number }) {
  const angle = (index / total) * Math.PI * 2;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  return (
    <group position={[x, 0, z]} rotation={[0, angle, 0]}>
      {/* Central Floating Image */}
      <Image 
        url={item.image}
        transparent 
        opacity={0.8}
        scale={[2.8, 1.6]}
        position={[0, 0, 0]}
      />
      
      {/* Holographic Wireframe Border */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[2.9, 1.7]} />
        <meshBasicMaterial color="#22d3ee" wireframe={true} transparent opacity={0.3} />
      </mesh>

    </group>
  );
}

function CarouselGroup({ items, rotationTarget }: { items: CarouselItem[]; rotationTarget: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Dynamically calculate radius to prevent overlapping cards
  // Multiply items by card width+padding (3.2), divide by 2*PI for circumference
  const radius = Math.max(2.2, (items.length * 3.2) / (2 * Math.PI));

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Smoothly interpolate rotation to the target
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        rotationTarget,
        4,
        delta
      );
    }
    if (coreRef.current) {
      // Constantly rotate the central core
      coreRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    // Shift the entire group backward by 'radius' so the front card is exactly at Z=0
    <group position={[0, 0, -radius]}>
      {/* Central Core Hologram (C-Funnel Base) */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[radius * 0.4, radius * 0.5, 4, 32]} />
        <meshBasicMaterial color="#22d3ee" wireframe={true} transparent opacity={0.1} />
      </mesh>

      <group ref={groupRef}>
        {items.map((item, i) => (
          <CarouselCard key={item.id} item={item} index={i} total={items.length} radius={radius} />
        ))}
      </group>
    </group>
  );
}

export const TouchCarousel = ({ items, autoRotate = true, autoRotateInterval = 4000 }: TouchCarouselProps) => {
  const [rotationTarget, setRotationTarget] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!autoRotate || isInteracting) return;
    
    const interval = setInterval(() => {
      setRotationTarget((r) => r - (Math.PI * 2) / items.length);
    }, autoRotateInterval);
    
    return () => clearInterval(interval);
  }, [autoRotate, autoRotateInterval, isInteracting, items.length]);

  const onPointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    setIsInteracting(true);
    setTouchStart(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    // Prevent the movement inside the carousel from affecting the background
    e.stopPropagation();
  };

  const onPointerUp = (e: React.PointerEvent) => {
    e.stopPropagation();
    setIsInteracting(false);
    if (touchStart === null) return;
    const distance = e.clientX - touchStart;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      // Swipe Right -> Rotate Left (previous card)
      setRotationTarget((r) => r + (Math.PI * 2) / items.length);
    } else if (distance < -minSwipeDistance) {
      // Swipe Left -> Rotate Right (next card)
      setRotationTarget((r) => r - (Math.PI * 2) / items.length);
    }
    setTouchStart(null);
  };

  const onPointerLeave = (e: React.PointerEvent) => {
    onPointerUp(e);
    setIsInteracting(false);
  };

  const onPointerEnter = () => {
    setIsInteracting(true);
  };

  return (
    <div 
      className="w-full h-72 sm:h-84 relative cursor-grab active:cursor-grabbing c-funnel-glow rounded-3xl overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-cyan-400/30"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerLeave}
      onPointerEnter={onPointerEnter}
      style={{ touchAction: 'none' }} // Prevent scrolling while swiping
    >
      {/* Interactive 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#22d3ee" />
        
        <CarouselGroup items={items} rotationTarget={rotationTarget} />
        
        {/* Post-processing Bloom for Sci-Fi Glow */}
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.1} 
            luminanceSmoothing={0.9} 
            height={300} 
            intensity={1.5} 
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>

      {/* Swipe Overlay Instruction */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <p className="font-orbitron text-[8px] text-age-cyan tracking-[0.3em] font-bold opacity-60 animate-pulse">
          &lt; DRAG TO ROTATE &gt;
        </p>
      </div>
    </div>
  );
};
