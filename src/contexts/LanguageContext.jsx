import { createContext, useContext, useState, useEffect } from 'react';

import en from '../locales/en';
import fr from '../locales/fr';
import ar from '../locales/ar';

const translations = { en, fr, ar };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    if (saved && ['en', 'fr', 'ar'].includes(saved)) return saved;
    const browser = navigator.language.split('-')[0];
    return ['fr', 'ar'].includes(browser) ? browser : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key, params = {}) => {
    const dict = translations[lang] || translations.en;
    let text = dict[key] || key;
    return text.replace(/{([^}]+)}/g, (_, p) => params[p] ?? `{${p}}`);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}