'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// @ts-ignore
import GLOBE from 'vanta/dist/vanta.globe.min';

export const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE, // Pass Three.js dependency
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x22d3ee, // Age FX Cyan
          color2: 0x2563eb, // Age FX Blue
          size: 1.2,
          backgroundColor: 0x020617, // Deep Slate (Mecha Space background)
        })
      );
    }
    
    // Cleanup on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 z-0 w-full h-full"
    />
  );
};
