'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Globe, 
  Orbit, 
  Menu, 
  X, 
  Terminal, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const Navbar = () => {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelEn: 'About', labelTh: 'เกี่ยวกับ' },
    { href: '#education', labelEn: 'Education', labelTh: 'การศึกษา' },
    { href: '#skills', labelEn: 'Skills', labelTh: 'ทักษะ' },
    { href: '#projects', labelEn: 'Projects', labelTh: 'ผลงาน' },
    { href: '#interests-3d', labelEn: '3D Gallery', labelTh: 'แกลเลอรี 3D' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.7)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-slate-900 border border-cyan-400/50 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-300 transition-colors shadow-[0_0_12px_rgba(34,211,238,0.2)]">
            <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-black text-sm tracking-wider text-white flex items-center gap-1.5">
              ARM<span className="text-cyan-400">.DEV</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="System Online" />
            </span>
            <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">
              CAI-PIM // YR-3
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shrink-0">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-prompt text-xs text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-1.5 rounded-full transition-all tracking-wide whitespace-nowrap"
            >
              {lang === 'th' ? item.labelTh : item.labelEn}
            </a>
          ))}
        </nav>

        {/* Controls & Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* 3D Orbit Launcher Button */}
          <Link
            href="/github-orbit"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-orbitron font-bold tracking-wider text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all whitespace-nowrap shrink-0"
            title="Launch 3D Celestial Orbit Scene"
          >
            <Orbit className="w-3.5 h-3.5 animate-spin-slow text-cyan-400 shrink-0" />
            <span className="hidden lg:inline whitespace-nowrap">3D ORBIT</span>
          </Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-orbitron font-bold tracking-wider bg-slate-900/80 border border-slate-700/80 hover:border-emerald-400 text-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all whitespace-nowrap shrink-0"
            title="Toggle Language (TH / EN)"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="whitespace-nowrap">{lang.toUpperCase()}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/95 border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-prompt text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
            >
              {lang === 'th' ? item.labelTh : item.labelEn}
            </a>
          ))}
          <Link
            href="/github-orbit"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full mt-3 py-2.5 rounded-lg text-xs font-orbitron font-bold tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/40"
          >
            <Orbit className="w-4 h-4 text-cyan-400" />
            LAUNCH 3D ORBIT SCENE
          </Link>
        </div>
      )}
    </header>
  );
};
