'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(null); // 'dark' | 'light' | 'system'
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');

    if (savedMode) {
      setThemeMode(savedMode);
    } else {
      setThemeMode('system');
    }
  }, []);

  useEffect(() => {
    if (!themeMode) return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      if (themeMode === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else if (themeMode === 'light') {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      } else {
        // system
        setIsDark(media.matches);
        media.matches
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark');
      }
    };

    applyTheme();

    if (themeMode === 'system') {
      const listener = e => {
        setIsDark(e.matches);
        e.matches
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark');
      };
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, [themeMode]);

  const setTheme = (mode) => {
    setThemeMode(mode);
    localStorage.setItem('themeMode', mode);
  };

  if (!themeMode) return null;

  return (
    <ThemeContext.Provider value={{ isDark, themeMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
