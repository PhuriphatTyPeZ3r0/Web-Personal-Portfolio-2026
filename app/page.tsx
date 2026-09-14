'use client';

import React, { useState, useEffect } from 'react';
import SpaceLoading from '@/components/SpaceLoading';
import { VantaBackground } from '@/components/VantaBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { SocialSection } from '@/components/SocialSection';
import { Interests3DSection } from '@/components/Interests3DSection';
import { AboutSection } from '@/components/AboutSection';
import { EducationSection } from '@/components/EducationSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { FooterSection } from '@/components/FooterSection';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3.5s initial boot sequence animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SpaceLoading />;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-[#f8fafc] relative overflow-hidden font-prompt">
      {/* 3D Vanta.js Interactive Network Globe */}
      <VantaBackground />

      {/* Persistent Mecha Navbar */}
      <Navbar />

      {/* Main Dashboard Layout */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <StatsSection />
        <SocialSection />
        <Interests3DSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      {/* Terminal Footer */}
      <FooterSection />
    </div>
  );
}