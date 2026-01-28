'use client';

import React from 'react'
import { useLanguage } from '../context/LanguageContext';

import BudgetCard from '@/components/budget-card';

const GoalsPage = () => {
    const { nav } = useLanguage();


    return (
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
            <div className='h-full w-full'>
                <div className='flex gap-4 pb-4'>

                    <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                        <span className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.thisMonthSaving}</span>
                        <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>$36,101.25</span>
                    </div>

                    <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                        <span className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.noOfActiveGoals}</span>
                        <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>$36,101.25</span>
                    </div>

                    <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                        <span className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.noOfCompletedGoals}</span>
                        <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>$36,101.25</span>
                    </div>

                </div>

                <div className='flex grow md:grow-0'>
                    <button className='px-4 py-2 border rounded-l-full w-28
                    border-light-border dark:border-dark-border
                    text-light-secondary-text dark:text-light-secondary-text
                    '>
                        {nav.active}
                    </button>
                    <button className='px-4 py-2 border border-l-0 rounded-r-full w-28
                    border-light-border dark:border-dark-border
                    text-light-secondary-text dark:text-light-secondary-text
                    '>
                        {nav.completed}
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 
                xl:grid-cols-3 2xl:grid-cols-4
                 gap-4 pt-4'>
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                    <BudgetCard />
                </div>
            </div>
        </div>
    )
}

export default GoalsPage