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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-400 mb-3">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>GAMING & ESPORTS PASSION // 3D WEBGL REVOLVER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-orbitron tracking-tight text-white uppercase">
            {lang === 'th' ? 'ความหลงใหลในเกม' : 'GAMING &'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {lang === 'th' ? 'และอีสปอร์ตฟุตบอล 3 มิติ' : 'ESPORTS PASSION'}
            </span>
          </h2>
          <p className="font-prompt text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl">
            {lang === 'th'
              ? 'บันทึกเส้นทางวิวัฒนาการเกมฟุตบอลระดับโลกจาก FIFA 22 สู่ยุคใหม่ของ EA SPORTS FC 26 สะท้อนความหลงใหลในการวิเคราะห์แท็กติก เทคโนโลยีการจำลองฟิสิกส์ และเอนจินเกมขับเคลื่อนด้วยข้อมูล'
              : 'A 3D chronological journey through football gaming evolution from FIFA 22 to the next era of EA SPORTS FC 26, celebrating tactical intelligence, physics simulation, and data-driven gameplay engines.'}
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-3 rounded-full" />
        </div>

        {/* 3D Carousel Canvas Container */}
        <div className="max-w-4xl mx-auto">
          <TouchCarousel items={carouselItems} />
          
          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
            <span className="flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-cyan-400" />
              <span>TIMELINE: 5 MILESTONES [FIFA 22 — FC 26]</span>
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
