'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA, ProjectItem } from '@/data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Star, 
  Sparkles, 
  Orbit, 
  Layers,
  Terminal,
  Search
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

type FilterCategory = 'all' | 'featured' | 'ai_ml' | 'web' | 'iot' | 'coursework';

export const ProjectsSection = () => {
  const { lang } = useLanguage();
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: FilterCategory; labelEn: string; labelTh: string }[] = [
    { key: 'featured', labelEn: 'Featured Stars ★', labelTh: 'ผลงานเด่นติดดาว ★' },
    { key: 'ai_ml', labelEn: 'AI & Machine Learning', labelTh: 'ปัญญาประดิษฐ์และ ML' },
    { key: 'web', labelEn: 'Full-Stack Web', labelTh: 'เว็บและแพลตฟอร์ม' },
    { key: 'iot', labelEn: 'IoT & Systems', labelTh: 'IoT และระบบฝังตัว' },
    { key: 'coursework', labelEn: 'Academic Courses (PIM)', labelTh: 'คลังรายวิชาทางการ (12 วิชา)' },
    { key: 'all', labelEn: 'All Repositories [28]', labelTh: 'ทั้งหมด [28 คลัง]' },
  ];

  const filteredProjects = projects.filter((project) => {
    // Category match
    const categoryMatch = 
      activeCategory === 'all' 
        ? true 
        : project.category === activeCategory;

    // Search match
    const query = searchQuery.toLowerCase();
    const searchMatch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.titleTh.toLowerCase().includes(query) ||
      project.tags.some((t) => t.toLowerCase().includes(query));

    return categoryMatch && searchMatch;
  });

  return (
    <section className="py-20 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>DEPLOYED REPOSITORIES // CATALOG</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-orbitron tracking-tight text-white uppercase">
            {lang === 'th' ? 'ผลงานและคลังรายวิชา' : 'PROJECTS &'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {lang === 'th' ? 'ทั้ง 28 รายการ' : 'SHOWCASES'}
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-3 rounded-full" />
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-prompt font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {lang === 'th' ? cat.labelTh : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={lang === 'th' ? 'ค้นหาผลงานหรือเทคโนโลยี...' : 'Search tags, tech...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-4 py-1.5 text-xs font-prompt text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6 px-1">
          <span>
            {lang === 'th' 
              ? `แสดงผล: ${filteredProjects.length} จาก 28 คลังผลงาน` 
              : `SHOWING: ${filteredProjects.length} OF 28 REPOSITORIES`}
          </span>
          <a
            href="#skills-orbit"
            className="text-cyan-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            <Orbit className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{lang === 'th' ? 'ไปยังมุมมอง 3D Orbit' : 'Jump to 3D Orbit View'}</span>
          </a>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`mecha-panel rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ${
                project.highlight 
                  ? 'border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:border-cyan-300' 
                  : 'hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header Title & Badge */}
                <div className="flex items-start justify-between gap-2.5 mb-2.5">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-orbitron font-bold text-base text-white group-hover:text-cyan-300 transition-colors break-words">
                      {project.title}
                    </h3>
                    <div className="font-prompt text-xs text-emerald-400 font-medium mt-0.5 break-words">
                      {project.titleTh}
                    </div>
                  </div>
                  {project.badge && (
                    <span className="shrink-0 px-2 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-400/40 text-[10px] font-orbitron font-bold text-cyan-300 tracking-wider whitespace-nowrap">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="font-prompt text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {lang === 'th' ? project.descriptionTh : project.descriptionEn}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-300 bg-slate-950/80 border border-slate-800 whitespace-nowrap shrink-0"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-orbitron font-semibold text-slate-300 hover:text-cyan-300 transition-colors whitespace-nowrap"
                >
                  <FaGithub className="w-3.5 h-3.5 shrink-0" />
                  <span>REPOSITORY</span>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-orbitron font-bold tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-[0_0_10px_rgba(34,211,238,0.3)] whitespace-nowrap shrink-0"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
