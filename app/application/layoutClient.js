'use client';

import { ThemeProvider } from "@/app/application/context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { CurrencyProvider } from "@/app/application/context/CurrencyContext";
import Navigation from "@/components/app-nav/navigation";
import { TopMessageProvider } from "./context/ResponseContext";
import React from 'react'

const LayoutClient = ({ children, image }) => {
  return (
    <main className="w-full h-lvh flex flex-col scrollbar-custom">
      <TopMessageProvider>
        <CurrencyProvider>
          <LanguageProvider>
            <ThemeProvider>
              <Navigation image={image}>
                {children}
              </Navigation>
            </ThemeProvider>
          </LanguageProvider>
        </CurrencyProvider>
      </TopMessageProvider>
    </main>
  )
}

export default LayoutClient;
