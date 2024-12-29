import React from 'react';
import { getLanguage, setLanguage, type Language } from '@/lib/i18n';

export function LanguageToggle() {
  const [currentLang, setCurrentLang] = React.useState<Language>(getLanguage());

  const toggleLanguage = () => {
    const newLang: Language = currentLang === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    setCurrentLang(newLang);
    window.location.reload(); // Reload to update all translations
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md text-sm font-medium bg-black text-white hover:bg-gray-800"
    >
      {currentLang.toUpperCase()}
    </button>
  );
}