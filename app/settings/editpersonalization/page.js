'use client';

import React from 'react'

import { useLanguage } from '@/app/context/LanguageContext';


const EditPersonalization = () => {

    const { lan, setLan } = useLanguage();

    function handleSelect(e) {
        setLan(e.target.value);
        // console.log(e.target.value);
    }

    return (
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
            <div className='border rounded-md h-full w- p-4
            border-light-border dark:border-dark-border
            bg-light-surface-background dark:bg-dark-surface-background
            '>
                <select onChange={handleSelect} className='bg-light-background dark:bg-dark-background
                 text-light-primary-text dark:text-dark-primary-text
                 border border-light-border dark:border-dark-border px-8 py-2 rounded-md
                 '>
                    <option>Select index</option>
                    <option value={1} className='bg-black text-white'>English</option>
                    <option value={2} className='bg-black text-white'>हिन्दी</option>
                    <option value={3} className='bg-black text-white'>Deutsch</option>
                    <option value={4} className='bg-black text-white'>Français</option>
                    <option value={5} className='bg-black text-white'>Español</option>
                    <option value={6} className='bg-black text-white'>日本語</option>
                </select>
            </div>
        </div>

    )
}

export default EditPersonalization