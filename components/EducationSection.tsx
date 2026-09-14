'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, School, CheckCircle2 } from 'lucide-react';

export const EducationSection = () => {
  const { lang } = useLanguage();
  const { education } = PORTFOLIO_DATA;

  return (
    <section className="py-16 relative z-10" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC TIMELINE // CURRICULUM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-orbitron tracking-tight text-white uppercase">
            {lang === 'th' ? 'ประวัติการศึกษาและ' : 'ACADEMIC'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {lang === 'th' ? 'ผลการเรียน' : 'JOURNEY'}
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-3 rounded-full" />
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className={`mecha-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all ${
                item.current ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]' : 'border-slate-800'
              }`}
            >
              {item.current && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-emerald-500 text-slate-950 font-orbitron font-bold text-[10px] tracking-widest px-4 py-1 rounded-bl-xl shadow-md uppercase">
                  ACTIVE // CURRENT
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <School className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white">
                      {lang === 'th' ? item.institutionTh : item.institutionEn}
                    </h3>
                  </div>
                  <div className="font-prompt text-sm sm:text-base font-medium text-emerald-400">
                    {lang === 'th' ? item.degreeTh : item.degreeEn} — {lang === 'th' ? item.majorTh : item.majorEn}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs font-orbitron font-bold text-emerald-300">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.gpax}</span>
                  </div>
                </div>
              </div>

              <p className="font-prompt text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-slate-800/80">
                {lang === 'th' ? item.detailsTh : item.detailsEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
