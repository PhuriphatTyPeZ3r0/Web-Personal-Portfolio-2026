'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'th' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('th');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved && (saved === 'th' || saved === 'en')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const toggleLang = () => {
    const next = lang === 'th' ? 'en' : 'th';
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
