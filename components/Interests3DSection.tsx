'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { TouchCarousel } from './TouchCarousel';
import { Gamepad2, Trophy, Eye } from 'lucide-react';

export const Interests3DSection = () => {
  const { lang } = useLanguage();
  const { carouselItems } = PORTFOLIO_DATA;

  return (
    <section className="py-16 relative z-10" id="interests-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-[11px] font-mono text-sky-400 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>MANCHESTER CITY FC // 3D SKY BLUE CHRONICLES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-orbitron tracking-tight text-white uppercase">
            {lang === 'th' ? 'เกียรติยศและประวัติศาสตร์' : 'MANCHESTER CITY FC'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300">
              {lang === 'th' ? 'MANCHESTER CITY 3 มิติ' : 'SKY BLUE DYNASTY'}
            </span>
          </h2>
          <p className="font-prompt text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl">
            {lang === 'th'
              ? 'บันทึกเส้นทางความสำเร็จอันยิ่งใหญ่ของแมนเชสเตอร์ ซิตี้ ในโลกเกมฟุตบอลเสมือนจริง จากแชมป์พรีเมียร์ลีก สู่ทริปเปิลแชมป์ยุโรปประวัติศาสตร์ และการสร้างตำนานแชมป์ลีก 4 สมัยติดต่อกันในยุค EA SPORTS FC'
              : 'Chronicling the historic triumphs of Manchester City across football gaming history—from Premier League dominance and the European Treble to the unprecedented 4-in-a-row dynasty in the EA SPORTS FC era.'}
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-400 via-cyan-400 to-amber-400 mt-3 rounded-full" />
        </div>

        {/* 3D Carousel Canvas Container */}
        <div className="max-w-4xl mx-auto">
          <TouchCarousel items={carouselItems} />
          
          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
            <span className="flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>TIMELINE: 5 SEASONS [2021 — 2026] // MANCHESTER CITY FC</span>
            </span>
            <span className="text-slate-500">
              TOUCH & DRAG TO REVOLVE 360°
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
