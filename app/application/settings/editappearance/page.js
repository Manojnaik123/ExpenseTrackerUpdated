'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/app/application/context/ThemeContext';
import CustomSelect from '@/components/add-components/custom-dropdown';
import { useLanguage } from '../../context/LanguageContext';
import { errors, themeOptionLabels } from '@/data';
import { useTopMessage } from '../../context/ResponseContext';

const EditAppearance = () => {

  const [selectedThemeKey, setSelectedThemeKey] = useState();
  const { setTheme, themeMode } = useTheme();
  const { nav, lan } = useLanguage();
  const {showMessage} = useTopMessage();

  useEffect(() => {
    const theme = localStorage.getItem('themeMode');
    if (theme == 'light') {
      setSelectedThemeKey(2);
    } else if (theme == 'dark') {
      setSelectedThemeKey(1);
    } else if (theme == 'system') {
      setSelectedThemeKey(3);
    }
  }, [])

  function handleSelect(option) {
    localStorage.setItem('themeMode', option.label);
    setSelectedThemeKey(option.key)
    setTheme(option.label);
    showMessage(1, errors[lan].changesMade)
  }

  const options = [
    { key: 1, label: 'dark', value: themeOptionLabels[lan].dark },
    { key: 2, label: 'light', value: themeOptionLabels[lan].light },
    { key: 3, label: 'system', value: themeOptionLabels[lan].system },
  ];

  return (
    <div className="h-full w-full p-4 pb-18 md:pb-0
    bg-light-background dark:bg-dark-background">
      <div className="border rounded-md h-full p-4
        border-light-border dark:border-dark-border
        bg-light-surface-background dark:bg-dark-surface-background
      ">
        <CustomSelect
          selectedKey={selectedThemeKey}
          label={nav.selectTheme}
          options={options}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default EditAppearance;
