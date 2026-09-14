'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-expect-error - maath does not provide types for this deep import
import * as random from 'maath/random/dist/maath-random.esm';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!);
  // สร้างพิกัดดาวแบบสุ่มในทรงกลม (ใช้ 5000 ดวง * 3 แกน x,y,z = 15000)
  const sphere = useMemo(() => random.inSphere(new Float32Array(15000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // หมุนแกนและขยับดาวให้ดูเหมือนพุ่งไปข้างหน้า
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#22d3ee" // Age-FX Cyan
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function SpaceLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // อัปเดต % จาก 0 ถึง 100 ภายในเวลาประมาณ 3.5-4 วินาที
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 35); // 35ms * 100 = 3.5s (เผื่อเวลาค้าง 100% สักแปปก่อนตัดออกตอน 4 วิ)
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        {/* เทคนิค 2: เพิ่ม Bloom Effect ให้ดาวเรืองแสง */}
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

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
        {/* ข้อความ LOADING */}
        <h1 className="font-orbitron text-xl md:text-3xl lg:text-5xl text-white tracking-[0.3rem] md:tracking-[0.5rem] lg:tracking-[0.7rem] font-bold animate-pulse drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
          LOADING
        </h1>

        {/* เทคนิค 3: ระบบ Progress % ของ Drei */}
        <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col items-center gap-2">
          <p className="text-xs md:text-sm lg:text-base text-age-cyan tracking-[0.15em] md:tracking-[0.3em] font-mono opacity-80 text-center">
            SYSTEM INITIALIZATION
          </p>
          <div className="w-48 md:w-64 lg:w-96 h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-age-cyan shadow-[0_0_10px_#22d3ee] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[10px] md:text-xs lg:text-sm text-age-cyan font-mono mt-1 opacity-70">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
}
