'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowUp, Terminal, Heart, ShieldCheck } from 'lucide-react';

export const FooterSection = () => {
  const { lang } = useLanguage();
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-cyan-500/20 bg-[#020617]/90 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Status Banner */}
        <div className="mb-8 p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">●</span>
            <span className="text-slate-400">systemctl status portfolio.service:</span>
            <span className="text-emerald-300 font-bold">active (running)</span>
            <span className="text-slate-500 hidden md:inline">| NODE_ENV=production</span>
          </div>
          <div className="text-[11px] text-slate-500">
            HOST: VERCEL_EDGE // BANGKOK-BKK1
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Info */}
          <div className="text-center md:text-left">
            <div className="font-orbitron font-bold text-sm text-white tracking-wider mb-1 flex items-center justify-center md:justify-start gap-2">
              <span>{profile.fullNameEn}</span>
              <span className="text-cyan-400 text-xs">({profile.username})</span>
            </div>
            <p className="font-prompt text-xs text-slate-400">
              {lang === 'th' 
                ? 'สาขาวิชาวิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์ (CAI) — สถาบันการจัดการปัญญาภิวัฒน์' 
                : 'Computer Engineering & Artificial Intelligence — Panyapiwat Institute of Management'}
            </p>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-orbitron font-bold tracking-wider text-cyan-300 bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
          >
            <span>{lang === 'th' ? 'กลับสู่ด้านบน' : 'BACK TO TOP'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Subfooter */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500 text-center">
          <div>
            &copy; {new Date().getFullYear()} Phuriphat Hemakul. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Powered by Next.js 15</span>
            <span>&middot;</span>
            <span>React 19</span>
            <span>&middot;</span>
            <span>Three.js WebGL</span>
            <span>&middot;</span>
            <span>Tailwind v4</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
