'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Cpu, Orbit, Sparkles, CheckCircle2 } from 'lucide-react';

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

        {/* 3D Orbit Banner Alert */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900/70 to-emerald-950/60 border border-cyan-400/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/50">
              <Orbit className="w-6 h-6 text-cyan-400 animate-spin-slow" />
            </div>
            <div>
              <div className="font-orbitron font-bold text-sm text-white flex items-center gap-2 justify-center sm:justify-start">
                <span>3D CELESTIAL SKILLS ORBIT</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">NEW</span>
              </div>
              <p className="font-prompt text-xs text-slate-300">
                {lang === 'th' 
                  ? 'สัมผัสประสบการณ์สำรวจทักษะเทคโนโลยีและคลังโค้ดแบบ 3D Three.js หมุนรอบตัว' 
                  : 'Experience interactive 3D WebGL orbit of core tech stacks and repositories'}
              </p>
            </div>
          </div>

          <Link
            href="/github-orbit"
            className="px-5 py-2.5 rounded-xl font-orbitron font-bold text-xs tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>LAUNCH 3D ORBIT</span>
            <Orbit className="w-4 h-4" />
          </Link>
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
