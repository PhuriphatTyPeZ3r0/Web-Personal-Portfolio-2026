'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Stars, Float, OrbitControls } from '@react-three/drei';
import type { Group } from 'three';
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa6';
import { SiTypescript, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

type SkillIcon = {
  name: string;
  color: string;
  Icon: React.ComponentType<{ size?: number }>;
};

const SKILLS: SkillIcon[] = [
  { name: 'Java', color: '#ED8B00', Icon: FaJava },
  { name: 'Python', color: '#3776AB', Icon: FaPython },
  { name: 'TypeScript', color: '#007ACC', Icon: SiTypescript },
  { name: 'React', color: '#61DAFB', Icon: FaReact },
  { name: 'Next.js', color: '#f8fafc', Icon: SiNextdotjs },
  { name: 'Node.js', color: '#43853D', Icon: FaNodeJs },
  { name: 'PostgreSQL', color: '#4169E1', Icon: SiPostgresql },
  { name: 'Git', color: '#E44C30', Icon: FaGitAlt },
  { name: 'C#', color: '#239120', Icon: TbBrandCSharp },
];

const RADIUS = 3.6;

function fibonacciSphere(count: number, radius: number): [number, number, number][] {
  const points: [number, number, number][] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push([x * radius, y * radius * 0.7, z * radius]);
  }

  return points;
}

function SkillNode({ skill, position }: { skill: SkillIcon; position: [number, number, number] }) {
  const { Icon, color, name } = skill;

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0} floatIntensity={0.6}>
        <Html center distanceFactor={11} occlude={false}>
          <div
            className="flex flex-col items-center gap-1 select-none pointer-events-none"
            style={{ ['--glow' as string]: color }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
              style={{
                background: 'rgba(26, 27, 39, 0.75)',
                border: `1px solid ${color}`,
                boxShadow: `0 0 18px 2px ${color}66`,
              }}
            >
              <Icon size={26} />
            </div>
            <span
              className="text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(26, 27, 39, 0.75)', color }}
            >
              {name}
            </span>
          </div>
        </Html>
      </Float>
    </group>
  );
}

function CoreHub() {
  const meshRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#7aa2f7" wireframe transparent opacity={0.55} />
      </mesh>
      <Html center distanceFactor={11} occlude={false}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center pointer-events-none"
          style={{
            background: 'rgba(26, 27, 39, 0.85)',
            border: '1px solid #bb9af7',
            boxShadow: '0 0 22px 4px #bb9af799',
            color: '#c0caf5',
          }}
        >
          <FaGithub size={20} />
        </div>
      </Html>
    </group>
  );
}

export function GithubOrbitScene({ className }: { className?: string } = {}) {
  const positions = useMemo(() => fibonacciSphere(SKILLS.length, RADIUS), []);

  return (
    <div
      className={className || "relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden"}
      style={{ background: 'radial-gradient(circle at 50% 40%, #161b26 0%, #0c1017 70%, #06090e 100%)' }}
    >
      <Canvas camera={{ position: [0, 0.4, 10.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={40} color="#7aa2f7" />
        <pointLight position={[-6, -4, -6]} intensity={25} color="#bb9af7" />

        <Stars radius={60} depth={40} count={2500} factor={2.5} saturation={0} fade speed={0.5} />

        <group position={[0, -0.5, 0]}>
          <CoreHub />

          {SKILLS.map((skill, i) => (
            <SkillNode key={skill.name} skill={skill} position={positions[i]} />
          ))}
        </group>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          target={[0, -0.5, 0]}
          minDistance={8}
          maxDistance={18}
          minPolarAngle={Math.PI * 0.28}
          maxPolarAngle={Math.PI * 0.72}
          autoRotate
          autoRotateSpeed={0.8}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
}
