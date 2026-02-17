'use client';
import { useCurrency } from '@/app/application/context/CurrencyContext'
import { useLanguage } from '@/app/application/context/LanguageContext';
import { expense, income, savings, savingsBig, wallet } from '@/lib/icons'
import React from 'react'

const FirstComponent = ({ data }) => {
    const { currentCurrencySymbol } = useCurrency();
    const { nav } = useLanguage();

    const incomeTotal = data?.transactions?.filter(i => i.typeId == 1)
        .reduce((sum, item) => sum + item.amount, 0);

    const expenseTotal = data?.transactions?.filter(i => i.typeId == 2)
        .reduce((sum, item) => sum + item.amount, 0);

    console.log(data?.savings);

    const depositAmount = data?.savings.filter(i => i.typeId == 1)
        .reduce((sum, item) => sum + item.amount, 0);

    const withdrawAmount = data?.savings.filter(i => i.typeId == 2)
        .reduce((sum, item) => sum + item.amount, 0);

    const totalSavings = depositAmount - withdrawAmount;

    return (
        <div className='w-full py-4 flex gap-4'>
            <div className='flex flex-col md:flex-row gap-4 w-1/2'>

                <div className='flex items-center gap-3  p-2 md:p-4 border rounded-md grow
                    border-light-border dark:border-dark-border
                    bg-light-background dark:bg-dark-background
                    '>
                    <span className=' p-1 md:p-2 rounded-md bg-purple-400/30 text-purple-400'>
                        {wallet}
                    </span>
                    <div className='flex flex-col'>
                        <span className='md:text-lg text-light-secondary-text dark:text-dark-secondary-text'>
                            {nav.balance}
                        </span>
                        <span className='text-lg md:text-2xl text-light-primary-text dark:text-dark-primary-text'>
                            {currentCurrencySymbol + ' ' + new Intl.NumberFormat().format((incomeTotal - expenseTotal))}
                        </span>
                    </div>
                </div>

                <div className='flex items-center gap-3  p-2 md:p-4 border rounded-md grow
                    border-light-border dark:border-dark-border
                    bg-light-background dark:bg-dark-background
                    '>
                    <span className=' p-1 md:p-2 rounded-md bg-green-400/30 text-green-400'>
                        {income}
                    </span>
                    <div className='flex flex-col'>
                        <span className='md:text-lg text-light-secondary-text dark:text-dark-secondary-text'>
                            {nav.income}
                        </span>
                        <span className='text-lg md:text-2xl text-light-primary-text dark:text-dark-primary-text'>
                            {currentCurrencySymbol +' '+new Intl.NumberFormat().format(incomeTotal)}
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 w-1/2'>
                <div className='flex items-center gap-3  p-2 md:p-4 border rounded-md grow
                    border-light-border dark:border-dark-border
                    bg-light-background dark:bg-dark-background
                    '>
                    <span className=' p-1 md:p-2 rounded-md bg-red-400/30 text-red-400'>
                        {expense}
                    </span>
                    <div className='flex flex-col'>
                        <span className='md:text-lg text-light-secondary-text dark:text-dark-secondary-text'>
                            {nav.expense}
                        </span>
                        <span className='text-lg md:text-2xl text-light-primary-text dark:text-dark-primary-text'>
                            {currentCurrencySymbol+' '+new Intl.NumberFormat().format(expenseTotal)}
                        </span>
                    </div>
                </div>

                <div className='flex items-center gap-3  p-2 md:p-4 border rounded-md grow
                    border-light-border dark:border-dark-border
                    bg-light-background dark:bg-dark-background
                    '>
                    <span className=' p-1 md:p-2 rounded-md bg-blue-400/30 text-blue-400'>
                        {savingsBig}
                    </span>
                    <div className='flex flex-col'>
                        <span className='md:text-lg text-light-secondary-text dark:text-dark-secondary-text'>
                            {nav.savings}
                        </span>
                        <span className='text-lg md:text-2xl text-light-primary-text dark:text-dark-primary-text'>
                            {currentCurrencySymbol +' '+new Intl.NumberFormat().format(totalSavings)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent