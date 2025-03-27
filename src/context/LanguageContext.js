import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Simple fallback if translation files don't load
    try {
      const translationData = {
        en: {
          app_title: "NOUR",
          ai_spiritual_guide: "AI Spiritual Guide",
          quran: "Quran",
          hadith: "Hadith"
        },
        ar: {
          app_title: "نور",
          ai_spiritual_guide: "مرشد الذكاء الاصطناعي",
          quran: "القرآن",
          hadith: "الحديث"
        }
      };
      setTranslations(translationData[language] || translationData.en);
    } catch (error) {
      console.error("Error loading translations:", error);
    }
  }, [language]);

  const translate = (key) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};