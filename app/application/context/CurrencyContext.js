'use client';

import { createContext, useContext, useState } from "react";

import { currency } from "@/data";

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [curCurrency, setCurrency] = useState(1); 

  const currentCurrencySymbol = currency.find(item => item.key === curCurrency).value;

  const value = {
    currency,
    currentCurrencySymbol,
    setCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
