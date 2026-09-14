'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Cpu, Orbit, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const GithubOrbitScene = dynamic(
  () => import('@/components/GithubOrbitScene').then((mod) => mod.GithubOrbitScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[440px] sm:h-[500px] rounded-xl bg-slate-950/80 border border-cyan-500/20 flex flex-col items-center justify-center gap-3">
        <Orbit className="w-8 h-8 text-cyan-400 animate-spin" />
        <span className="font-mono text-xs text-cyan-400/80 tracking-widest uppercase">
          INITIALIZING 3D CELESTIAL ORBIT...
        </span>
      </div>
    ),
  }
);

export const SkillsSection = () => {
  const { lang } = useLanguage();
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <section className="py-16 relative z-10" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES // RADAR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-orbitron tracking-tight text-white uppercase">
            {lang === 'th' ? 'ทักษะและความ' : 'SKILLS'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {lang === 'th' ? 'เชี่ยวชาญ' : 'MATRIX'}
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-3 rounded-full" />
        </div>

        {/* 3D Celestial Skills Orbit Live Showcase */}
        <div id="skills-orbit" className="scroll-mt-24 mb-14">
          <div className="mecha-panel rounded-2xl p-4 sm:p-6 relative overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            
            {/* 3D Scene HUD Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-400">
                  <Orbit className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-orbitron font-bold text-sm sm:text-base text-white tracking-wide">
                      3D CELESTIAL SKILLS ORBIT
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] uppercase">
                      LIVE 360°
                    </span>
                  </div>
                  <p className="text-xs font-prompt text-slate-400">
                    {lang === 'th'
                      ? 'คลิกลากหมุนสำรวจ 9 แกนเทคโนโลยีรอบ GitHub Core ในมุมมอง 3 มิติ'
                      : 'Drag to rotate and explore 9 core tech nodes orbiting GitHub Core'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 self-end sm:self-auto">
                <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-cyan-400">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>DRAG TO ROTATE // AUTO-ROTATING</span>
                </div>
                <a
                  href="https://github.com/PhuriphatTyPeZ3r0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-orbitron font-bold tracking-wider text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-sm"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>

            {/* Embedded 3D Canvas */}
            <div className="relative w-full rounded-xl overflow-hidden border border-slate-800/80">
              <GithubOrbitScene className="w-full h-[440px] sm:h-[500px]" />
              
              {/* Bottom HUD Overlay Info */}
              <div className="pointer-events-none absolute bottom-3 inset-x-3 flex items-center justify-between text-[11px] font-mono text-slate-400/90">
                <span className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800/80">
                  9 CORE ENGINES // THREE.JS WEBGL
                </span>
                <span className="hidden sm:inline bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800/80 text-cyan-400/80">
                  ORBIT DAMPING: ACTIVE
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="mecha-panel rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-400/60 transition-all duration-300 flex flex-col"
            >
              <h3 className="font-orbitron font-bold text-sm text-cyan-300 mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>{lang === 'th' ? category.titleTh : category.titleEn}</span>
                <span className="text-[10px] font-mono text-slate-500">[{category.skills.length}]</span>
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 rounded-xl text-xs font-prompt font-medium text-slate-200 bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all whitespace-nowrap shadow-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
