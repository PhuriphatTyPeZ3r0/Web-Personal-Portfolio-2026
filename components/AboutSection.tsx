'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { User, Sparkles, Heart, Code2, Cpu, Compass } from 'lucide-react';

export const AboutSection = () => {
  const { lang } = useLanguage();
  const { about, profile } = PORTFOLIO_DATA;

  return (
    <section className="py-16 relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>PILOT PROFILE // DOSSIER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-orbitron tracking-tight text-white uppercase">
            {lang === 'th' ? 'เกี่ยวกับ' : 'ABOUT'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {lang === 'th' ? 'ผู้พัฒนา' : 'ME'}
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-3 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Card (8 Columns) */}
          <div className="lg:col-span-8 mecha-panel rounded-2xl p-6 sm:p-8 relative mecha-corner">
            <h3 className="font-orbitron font-bold text-lg text-cyan-300 mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span>{lang === 'th' ? 'ประวัติและความเป็นมา' : 'Background & Engineering Philosophy'}</span>
            </h3>
            
            <p className="font-prompt text-sm sm:text-base leading-relaxed text-slate-300 mb-6 whitespace-pre-line">
              {lang === 'th' ? about.bioTh : about.bioEn}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-cyan-500/20">
                <Code2 className="w-4 h-4 text-cyan-400 mb-2" />
                <div className="font-orbitron font-bold text-xs text-white mb-1">CLEAN ARCHITECTURE</div>
                <div className="text-[11px] font-prompt text-slate-400">
                  {lang === 'th' ? 'ออกแบบ OOP และ MVC เพื่อการขยายตัวระดับองค์กร' : 'Enterprise OOP, MVC & Scalable Systems'}
                </div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-emerald-500/20">
                <Cpu className="w-4 h-4 text-emerald-400 mb-2" />
                <div className="font-orbitron font-bold text-xs text-white mb-1">APPLIED AI & CV</div>
                <div className="text-[11px] font-prompt text-slate-400">
                  {lang === 'th' ? 'MediaPipe, Keras CNN 30 FPS และ Thai NLP' : 'Real-time Computer Vision & Thai NLP'}
                </div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-blue-500/20">
                <Sparkles className="w-4 h-4 text-blue-400 mb-2" />
                <div className="font-orbitron font-bold text-xs text-white mb-1">NEXT-GEN WEB</div>
                <div className="text-[11px] font-prompt text-slate-400">
                  {lang === 'th' ? 'Next.js 15, Turbopack และ Three.js WebGL' : 'High-Performance 3D & Responsive Web'}
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Quick Specs (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Interests Card */}
            <div className="mecha-panel rounded-2xl p-6 mecha-corner-green">
              <h4 className="font-orbitron font-bold text-sm text-emerald-300 mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'th' ? 'ความสนใจเฉพาะด้าน' : 'SPECIALIZATIONS'}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {(lang === 'th' ? about.interestsTh : about.interestsEn).map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-prompt text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-emerald-400/60 hover:text-emerald-300 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Spec Box */}
            <div className="mecha-panel rounded-2xl p-6">
              <h4 className="font-orbitron font-bold text-sm text-cyan-300 mb-3">
                {lang === 'th' ? 'พิกัดและที่อยู่' : 'LOCATION SPEC'}
              </h4>
              <p className="text-xs font-prompt text-slate-300 mb-1">
                {profile.location}
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
                <span>TIMEZONE: GMT+7</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  AVAILABLE
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
