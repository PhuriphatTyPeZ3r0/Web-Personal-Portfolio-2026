'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { 
  FaGithub, 
  FaLinkedin, 
  FaDiscord, 
  FaFacebook, 
  FaInstagram, 
  FaEnvelope 
} from 'react-icons/fa6';
import { Radio, ExternalLink } from 'lucide-react';

export const SocialSection = () => {
  const { lang } = useLanguage();
  const { socialLinks } = PORTFOLIO_DATA;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <FaGithub className="w-5 h-5" />;
      case 'linkedin': return <FaLinkedin className="w-5 h-5" />;
      case 'discord': return <FaDiscord className="w-5 h-5" />;
      case 'facebook': return <FaFacebook className="w-5 h-5" />;
      case 'instagram': return <FaInstagram className="w-5 h-5" />;
      default: return <FaEnvelope className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-8 relative z-10" id="social-hud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 border-b border-cyan-500/20 pb-3">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <h2 className="font-orbitron font-bold text-xs sm:text-sm tracking-widest text-cyan-300 uppercase">
              {lang === 'th' ? 'ช่องทางการติดต่อและเครือข่าย' : 'COCKPIT COMMS // SOCIAL MATRIX'}
            </h2>
          </div>
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            STATUS: BROADCASTING
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mecha-panel mecha-panel-hover rounded-xl p-3.5 flex flex-col items-center justify-center text-center gap-2 group relative overflow-hidden"
            >
              <div className="text-cyan-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300">
                {getIcon(link.icon)}
              </div>
              <div className="flex flex-col items-center">
                <span className="font-orbitron font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                  {link.name}
                </span>
                <span className="font-mono text-[10px] text-slate-400 truncate max-w-[120px]">
                  {link.handle}
                </span>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3 h-3 text-cyan-400" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
