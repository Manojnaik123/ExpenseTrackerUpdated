'use client';

import { createContext, useContext, useState } from "react";
import { languageData, navBarData } from "@/data";
import { useEffect } from 'react';


const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lan, setLan] = useState(); // selected language ID

  useEffect(() => {
    const languageId = localStorage.getItem('languageId');

    if (languageId) {
      setLan(Number(languageId))
    }

  }, [])

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
