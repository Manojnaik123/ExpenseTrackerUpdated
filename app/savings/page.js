'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { downArrow } from '@/lib/icons';
import DataTable from '@/components/data-table';


const TransactionsPage = () => {
    const { nav } = useLanguage();

    const tableTitles = [nav.date, nav.name, nav.type, nav.amount, nav.remarks];

    return (
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
            <div className='flex gap-4 pb-4'>
                <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                    <h1 className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.totalSavings}</h1>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>$36,101.25</span>
                </div>
                <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                    <h1 className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.thisMonthSaving}</h1>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>$36,101.25</span>
                </div>
            </div>
            <div className='border rounded-md w- p-4
            border-light-border dark:border-dark-border
            bg-light-surface-background dark:bg-dark-surface-background
            '>
                <div className=' flex flex-col md:flex md:flex-row justify-between pb-4 gap-4'>
                    <div className='flex grow max-w-[340px]'>
                        <button className='px-4 py-2 border rounded-l-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                        '>{nav.all}</button>
                        <button className='px-4 py-2 border-y w-1/3
                        border-light-border dark:border-dark-border
                        text-light-secondary-text dark:text-dark-secondary-text
                        '>{nav.income}</button>
                        <button className='px-4 py-2 border rounded-r-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                        '>{nav.expense}</button>
                    </div>
                    <div className='flex gap-3 grow justify-between md:justify-end'>
                        <span className='px-4 py-2 border rounded-md flex gap-32
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                        '>all {downArrow}</span>
                        <button className='px-4 py-2 border rounded-full
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                        '>{nav.export}</button>
                    </div>
                </div>
                <DataTable titleArray={tableTitles} />
            </div>
        </div>
    )
}

export default TransactionsPage