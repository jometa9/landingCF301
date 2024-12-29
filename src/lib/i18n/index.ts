import { en } from './translations/en';
import { es } from './translations/es';

export type Language = 'en' | 'es';

const translations = {
  en,
  es
};

export function getLanguage(): Language {
  // Check localStorage first
  const savedLang = localStorage.getItem('language') as Language;
  if (savedLang && ['en', 'es'].includes(savedLang)) {
    return savedLang;
  }

  // Check browser language
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'es') {
    return 'es';
  }

  // Default to English
  return 'en';
}

export function setLanguage(lang: Language) {
  localStorage.setItem('language', lang);
}

export function t(key: string): string {
  const lang = getLanguage();
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value === undefined) return key;
    value = value[k];
  }

  return value || key;
}