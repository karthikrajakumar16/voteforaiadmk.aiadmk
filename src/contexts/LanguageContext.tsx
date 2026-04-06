import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ta" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (ta: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ta",
  toggleLang: () => {},
  t: (ta) => ta,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("ta");

  const toggleLang = () => setLang((l) => (l === "ta" ? "en" : "ta"));
  const t = (ta: string, en: string) => (lang === "ta" ? ta : en);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
