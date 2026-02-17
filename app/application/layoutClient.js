'use client';
import React from 'react';
import Navigation from "@/components/app-nav/navigation";

import { ThemeProvider } from "@/app/application/context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { CurrencyProvider } from "@/app/application/context/CurrencyContext";
import { TopMessageProvider } from "./context/ResponseContext";
import { PreProvider } from "./context/PreContext";

const LayoutClient = ({ children, image }) => {
  return (
    <main className="w-full h-lvh flex flex-col scrollbar-custom">
      <PreProvider>
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
      </PreProvider>
    </main>
  )
}

export default LayoutClient;
