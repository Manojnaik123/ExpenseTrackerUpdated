import { budget, dashboard, goals, savings, transaction } from '@/lib/icons'
import Link from 'next/link'
import React from 'react'
import MobileDropDown from './mobile-drop-dowm'
import { usePathname } from 'next/navigation'

const MobileBottomNav = () => {

    const path = usePathname();

    return (
        <>
            <nav className='fixed z-50 md:hidden bottom-0 h-16 w-full border-t flex justify-between items-center px-4
                    border-light-border dark:border-dark-border
                    bg-light-surface-background dark:bg-dark-surface-background
                    '>
                <Link href={'/application'}
                    className={` ${path === '/application'? 'text-white bg-accent-hover' : 'text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray/30'} 
                    px-3 py-3 rounded-full
                    `}>
                    {dashboard}
                </Link>
                <Link href={'/application/transactions'}
                    className={` ${path === '/application/transactions'? 'text-white bg-accent-hover' : 'text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray/30'} 
                 px-3 py-3 rounded-full`}
                >
                    {transaction}
                </Link>
                <Link href={'/application/budgets'}
                    className={` ${path === '/application/budgets'? 'text-white bg-accent-hover' : 'text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray/30'} 
                 px-3 py-3 rounded-full`}
                >
                    {budget}
                </Link>
                <Link href={'/application/savings'}
                    className={` ${path === '/application/savings'? 'text-white bg-accent-hover' : 'text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray/30'} 
                 px-3 py-3 rounded-full`}
                >
                    {savings}
                </Link>
                <Link href={'/application/goals'}
                    className={` ${path === '/application/goals'? 'text-white bg-accent-hover' : 'text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray/30'} 
                 px-3 py-3 rounded-full`}
                >
                    {goals}
                </Link>
            </nav>
        </>
    )
}

export default MobileBottomNav