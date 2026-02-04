import { useCurrency } from '@/app/application/context/CurrencyContext'
import { expense, income, savings, savingsBig, wallet } from '@/lib/icons'
import React from 'react'

const FirstComponent = () => {

    const { currentCurrencySymbol } = useCurrency();
    return (
        <div className='w-full py-4 flex gap-4'>
            <div className='flex items-center gap-3 p-4 border rounded-md grow
                border-light-border dark:border-dark-border
                bg-light-background dark:bg-dark-background
                '>
                <span className='p-2 rounded-md bg-purple-400/30 text-purple-400'>
                    {wallet}
                </span>
                <div className='flex flex-col'>
                    <span className='text-lg text-light-secondary-text dark:text-dark-secondary-text'>
                        Balance
                    </span>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>
                        {currentCurrencySymbol} 10,400
                    </span>
                </div>
            </div>
            <div className='flex items-center gap-3 p-4 border rounded-md grow
                border-light-border dark:border-dark-border
                bg-light-background dark:bg-dark-background
                '>
                <span className='p-2 rounded-md bg-green-400/30 text-green-400'>
                    {income}
                </span>
                <div className='flex flex-col'>
                    <span className='text-lg text-light-secondary-text dark:text-dark-secondary-text'>
                        Balance
                    </span>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>
                        {currentCurrencySymbol} 10,400
                    </span>
                </div>
            </div>
            <div className='flex items-center gap-3 p-4 border rounded-md grow
                border-light-border dark:border-dark-border
                bg-light-background dark:bg-dark-background
                '>
                <span className='p-2 rounded-md bg-red-400/30 text-red-400'>
                    {expense}
                </span>
                <div className='flex flex-col'>
                    <span className='text-lg text-light-secondary-text dark:text-dark-secondary-text'>
                        Balance
                    </span>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>
                        {currentCurrencySymbol} 10,400
                    </span>
                </div>
            </div>
            <div className='flex items-center gap-3 p-4 border rounded-md grow
                border-light-border dark:border-dark-border
                bg-light-background dark:bg-dark-background
                '>
                <span className='p-2 rounded-md bg-blue-400/30 text-blue-400'>
                    {savingsBig}
                </span>
                <div className='flex flex-col'>
                    <span className='text-lg text-light-secondary-text dark:text-dark-secondary-text'>
                        Balance
                    </span>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>
                        {currentCurrencySymbol} 10,400
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent