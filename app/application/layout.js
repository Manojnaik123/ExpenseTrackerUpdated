'use client';

import { ThemeProvider } from "@/app/application/context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { CurrencyProvider } from "@/app/application/context/CurrencyContext";


import Navigation from "@/components/app-nav/navigation";

export default function RootLayout({ children }) {
  return (
    <main className="w-full h-lvh flex flex-col scrollbar-custom">
      {/* <div className="fixed z-50 bg-red-400 w-full h-0.5">

        </div> */}
      <CurrencyProvider>
        <LanguageProvider>
          <ThemeProvider>
            <Navigation>
              {children}
            </Navigation>
          </ThemeProvider>
        </LanguageProvider>
      </CurrencyProvider>

    </main>
    // </html>
  );
}
