'use client';

import React from 'react'

import { useTheme } from '@/app/context/ThemeContext';


const EditAppearance = () => {

    const { setIsDark } = useTheme();

    function handleSelect(e) {
        console.log(e.target.value);
        
        if (e.target.value == 1) {
            console.log(e.target.value);
            
            setIsDark(true);
        } 
        
        if(e.target.value == 2){
            console.log(e.target.value);

            setIsDark(false);
        }
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
                    <option value={1}>Dark</option>
                    <option value={2}>Light</option>
                </select>
            </div>
        </div>

    )
}

export default EditAppearance