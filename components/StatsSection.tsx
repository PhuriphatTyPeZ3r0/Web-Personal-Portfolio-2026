'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { FolderGit2, Trophy, BookOpen, Layers } from 'lucide-react';

export const StatsSection = () => {
  const { lang } = useLanguage();
  const { stats } = PORTFOLIO_DATA;

  const icons = [
    <FolderGit2 className="w-5 h-5 text-cyan-400" key="0" />,
    <Trophy className="w-5 h-5 text-emerald-400" key="1" />,
    <BookOpen className="w-5 h-5 text-blue-400" key="2" />,
    <Layers className="w-5 h-5 text-amber-400" key="3" />,
  ];

  return (
    <section className="py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="mecha-panel mecha-panel-hover rounded-2xl p-5 text-center relative overflow-hidden group"
            >
              <div className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-900/80 mb-3 border border-slate-700/60 group-hover:border-cyan-400/50 transition-colors">
                {icons[i % icons.length]}
              </div>
              <div className="font-orbitron font-black text-2xl sm:text-4xl text-white tracking-tight mb-1 flex items-center justify-center gap-0.5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  {stat.value}
                </span>
                <span className="text-emerald-400 text-xl">{stat.suffix}</span>
              </div>
              <div className="font-prompt text-xs sm:text-sm text-slate-300 font-medium">
                {lang === 'th' ? stat.labelTh : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
