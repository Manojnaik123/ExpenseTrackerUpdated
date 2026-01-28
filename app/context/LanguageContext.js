'use client';

import { createContext, useContext, useState } from "react";
import { languageData, navBarData } from "@/data";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lan, setLan] = useState(1); // selected language ID

  const value = {
    lan,                     // 1,2,3...
    setLan,
    languageList: languageData,
    nav: navBarData[lan],    // <-- important
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
