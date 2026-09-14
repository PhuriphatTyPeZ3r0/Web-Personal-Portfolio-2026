'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { 
  Award, 
  GraduationCap, 
  Calendar, 
  ArrowRight, 
  Mail, 
  Terminal, 
  Sparkles,
  MapPin,
  Download
} from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  const { lang } = useLanguage();
  const { profile } = PORTFOLIO_DATA;

  // Typing effect
  const roles = [
    lang === 'th' ? 'นักพัฒนา Full-Stack Web' : 'Full-Stack Web Engineer',
    lang === 'th' ? 'ผู้สนใจงานวิจัย AI & Computer Vision' : 'AI & Computer Vision Enthusiast',
    lang === 'th' ? 'สถาปัตยกรรมซอฟต์แวร์ Clean OOP' : 'Clean Architecture & OOP Specialist',
    lang === 'th' ? 'ระบบโทรมาตรและ IoT ฝังตัว' : 'IoT & Embedded Systems Engineer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Profile Avatar Frame (Mecha HUD Style) */}
          <div className="relative mb-6 group">
            <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-25 group-hover:opacity-40 transition-opacity animate-pulse" />
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 bg-slate-900/90 border-2 border-cyan-400/40 relative z-10 shadow-[0_0_25px_rgba(34,211,238,0.25)] overflow-hidden">
              <img 
                src={profile.avatarUrl} 
                alt={profile.fullNameEn} 
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Cyber Corner Accents */}
            <div className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t-2 border-r-2 border-emerald-400 z-20 pointer-events-none" />
            <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5 border-b-2 border-l-2 border-emerald-400 z-20 pointer-events-none" />
          </div>

          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
            <span>HELLO WORLD, I'M</span>
          </div>

          {/* Full Name */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-orbitron tracking-tight text-white uppercase mb-3">
            {profile.fullNameEn}
            <span className="block text-xl sm:text-2xl font-prompt font-semibold text-cyan-400 mt-1">
              ({lang === 'th' ? profile.fullNameTh : profile.nickname})
            </span>
          </h1>

          {/* Typing Effect Subtitle */}
          <div className="h-8 sm:h-10 flex items-center justify-center font-prompt text-base sm:text-xl font-medium text-slate-300 mb-6">
            <span className="text-cyan-400 font-mono mr-2">&gt;</span>
            <span className="text-emerald-400 font-semibold">{displayText}</span>
            <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse" />
          </div>

          {/* Institutional Quote HUD Box */}
          <div className="w-full max-w-xl mx-auto bg-slate-900/60 backdrop-blur-md px-5 py-3.5 rounded-xl border border-cyan-500/30 mb-8 shadow-[0_0_20px_rgba(2,6,23,0.9)] relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-emerald-400" />
            <p className="text-xs sm:text-sm font-orbitron tracking-wide text-slate-200 italic">
              {profile.quote}
            </p>
            <div className="mt-1 text-[10px] font-mono text-slate-400 uppercase tracking-widest text-right">
              — Eureka Seven / Personal Creed
            </div>
          </div>

          {/* Institutional Badges (GPAX, Year 3, PIM) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-9">
            <div className="mecha-panel rounded-xl p-3 flex items-center justify-start sm:justify-center gap-3 border-emerald-500/30 hover:border-emerald-400 transition-colors">
              <Award className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left min-w-0">
                <div className="font-orbitron font-bold text-sm text-emerald-300 whitespace-nowrap">GPAX {profile.gpax}</div>
                <div className="text-[11px] font-prompt text-slate-400 whitespace-nowrap">{lang === 'th' ? 'เกียรตินิยมอันดับ 1' : 'First-Class Honors'}</div>
              </div>
            </div>

            <div className="mecha-panel rounded-xl p-3 flex items-center justify-start sm:justify-center gap-3 border-cyan-500/30 hover:border-cyan-400 transition-colors">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-left min-w-0">
                <div className="font-orbitron font-bold text-sm text-cyan-300 whitespace-nowrap">PIM — CAI</div>
                <div className="text-[11px] font-prompt text-slate-400 whitespace-nowrap">{lang === 'th' ? 'วิศวกรรมคอมพิวเตอร์ & AI' : 'Computer Eng. & AI'}</div>
              </div>
            </div>

            <div className="mecha-panel rounded-xl p-3 flex items-center justify-start sm:justify-center gap-3 border-blue-500/30 hover:border-blue-400 transition-colors">
              <Calendar className="w-5 h-5 text-blue-400 shrink-0" />
              <div className="text-left min-w-0">
                <div className="font-orbitron font-bold text-sm text-blue-300 whitespace-nowrap">{lang === 'th' ? 'ชั้นปีที่ 3' : '3rd Year'}</div>
                <div className="text-[11px] font-prompt text-slate-400 whitespace-nowrap">{lang === 'th' ? 'ภาคเรียน 1/2569' : 'Active Term 2026'}</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-orbitron font-bold text-xs tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>{lang === 'th' ? 'สำรวจ 27 ผลงาน' : 'EXPLORE 27 REPOSITORIES'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-3 rounded-xl font-orbitron font-bold text-xs tracking-wider text-cyan-300 bg-slate-900/80 border border-cyan-500/40 hover:border-cyan-300 hover:bg-cyan-950/40 shadow-[0_0_15px_rgba(2,6,23,0.8)] transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'th' ? 'ติดต่อผู้พัฒนา' : 'CONTACT ME'}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
