'use client';

import { createContext, useContext, useState } from "react";

import { currency } from "@/data";

const PreContext = createContext(null);

export function PreProvider({ children }) {
  const [email, setEmail] = useState('');
  
  const value = {
    setEmail,
  };

  return (
    <PreContext.Provider value={value}>
      {children}
    </PreContext.Provider>
  );
}

export function usePre() {
  return useContext(PreContext);
}
