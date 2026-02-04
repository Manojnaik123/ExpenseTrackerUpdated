'use client';
import { useLanguage } from '@/app/application/context/LanguageContext';
import { downArrow } from '@/lib/icons';
import { useEffect, useRef, useState } from 'react';

const CustomSelect = ({ label, options, onSelect, isValid, selectedKey, height, disabled=false }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const { nav } = useLanguage();

  useEffect(() => {
    setSelected(selectedKey ?? null);
  }, [selectedKey]);

  // Set default selected based on selectedKey
  useEffect(() => {
    if (options && selectedKey !== undefined) {
      const defaultOption = options.find((opt) => opt.key === selectedKey || opt.id === selectedKey);
      if (defaultOption) setSelected(defaultOption);
    }
  }, [options, selectedKey]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex flex-col grow gap-1">
      <label className="text-[13px] text-light-secondary-text dark:text-dark-secondary-text">
        {label}
      </label>

      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full text-left p-3 rounded-md border border-light-border dark:border-dark-border flex justify-between items-center
        focus:outline-none
        focus:ring-2 focus:ring-light-muted-text/20
        ${isValid && 'ring-3 ring-warning-primary/30'}
        ${height ? `h-${height}` : ''}
        ${isValid && 'focus:ring-3 focus:ring-warning-primary/30'}
        ${disabled ? 'bg-hover-gray/40 text-light-muted-text/50 dark:text-dark-muted-text/50': 'text-light-secondary-text dark:text-dark-secondary-text'}
        `}
      >
        <span className={`${disabled ? 'text-light-muted-text/50 dark:text-dark-muted-text/50': 'text-light-secondary-text dark:text-dark-secondary-text'}`}>
          {selected ? selected.value : nav.selectOption}
        </span>
        <span className={`${disabled ? 'text-light-muted-text/50 dark:text-dark-muted-text/50': 'text-light-secondary-text dark:text-dark-secondary-text'} text-sm`}>
          {downArrow}
        </span>
      </button>

      {/* Options */}
      {open && (
        <ul className="absolute top-full mt-1 w-full bg-light-surface-background dark:bg-dark-surface-background border 
        border-light-border dark:border-dark-border rounded-md shadow-lg z-20 max-h-48 overflow-y-auto">
          {options?.map((opt) => (
            <li
              key={opt.id || opt.key}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
                onSelect?.(opt); // 👈 event callback
              }}
              className="px-4 py-2 cursor-pointer text-light-secondary-text dark:text-dark-secondary-text 
              hover:bg-hover-gray dark:hover:bg-hover-gray"
            >
              {opt.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
