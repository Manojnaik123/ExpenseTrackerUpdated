'use client';
import { downArrow } from '@/lib/icons';
import { useEffect, useRef, useState } from 'react';

const CustomSelect = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const dropdownRef = useRef(null);

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
    <div
      ref={dropdownRef}
      className="relative flex flex-col grow gap-1"
    >
      <label
        className="text-[13px]
        text-light-secondary-text dark:text-dark-secondary-text"
      >
        {label}
      </label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          w-full text-left p-3 rounded-md
          border border-light-border dark:border-dark-border
          flex justify-between items-center
          focus:ring-2 focus:ring-light-muted-text/20
        "
      >
        <span className="text-light-secondary-text dark:text-dark-secondary-text">
          {value ?? 'Select option--'}
        </span>
        <span className="text-sm text-light-secondary-text dark:text-dark-secondary-text">
          {downArrow}
        </span>
      </button>

      {/* Options */}
      {open && (
        <ul
          className="
            absolute top-full mt-1 w-full
            bg-light-surface-background dark:bg-dark-surface-background
            border border-light-border dark:border-dark-border
            rounded-md shadow-lg z-20
            max-h-48 overflow-y-auto
          "
        >
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
              className="
                px-4 py-2 cursor-pointer
                text-light-secondary-text dark:text-dark-secondary-text
                hover:bg-gray-100 dark:hover:bg-dark-muted-background
              "
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
