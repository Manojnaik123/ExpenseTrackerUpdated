'use client';

import { budget, dashboard, goals, savings, setting, transaction } from '@/lib/icons';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/context/LanguageContext';
import { useMediaQuery } from '@/mediaMatch';

import Link from 'next/link';
import React from 'react'

const SideNavBar = ({sideBarOpen, setSideBar}) => {
    const path = usePathname();
    const { nav } = useLanguage();

    const isSmallScreen = useMediaQuery('(max-width: 1024px)');
    if(isSmallScreen === true){
        setSideBar(false);
    }
    
    return (
        // <div>
        <nav className={` ${sideBarOpen? 'w-72': 'w-20'} hidden md:flex flex-col fixed z-30 h-full pt-16
         bg-light-background border-r dark:bg-dark-background
         border-light-border dark:border-dark-border`}>
            <div className='grow p-4'>
                <Link href='/' className={` ${path === '/' ? '' : ''} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 mb-2
                rounded-md font-medium hover:bg-hover-gray
                 `}>
                    <div className='text-light-secondary-text dark:text-dark-secondary-text'>
                        {dashboard}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} text-light-secondary-text dark:text-dark-secondary-text`}>{nav.dashboard}</span>
                </Link>
                <Link href='/transactions' className={` ${path.startsWith('/transactions') ? 'bg-hover-gray': 'bg-none'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 mb-2
                rounded-md font-medium hover:bg-hover-gray
                `}>
                    <div className='text-light-secondary-text dark:text-dark-secondary-text'>
                        {transaction}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} text-light-secondary-text dark:text-dark-secondary-text`}>{nav.transactions}</span>
                </Link>
                <Link href='/budgets' className={` ${path.startsWith('/budgets') ? 'bg-hover-gray': 'bg-none'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 mb-2
                rounded-md font-medium hover:bg-hover-gray
                 `}>
                    <div className='text-light-secondary-text dark:text-dark-secondary-text'>
                        {budget}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} text-light-secondary-text dark:text-dark-secondary-text`}>{nav.budgets}</span>
                </Link>
                <Link href='/savings' className={` ${path.startsWith('/savings') ? 'bg-hover-gray': 'bg-none'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 mb-2
                rounded-md font-medium hover:bg-hover-gray
                `}>
                    <div className='text-light-secondary-text dark:text-dark-secondary-text'>
                        {savings}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} text-light-secondary-text dark:text-dark-secondary-text`}>{nav.savings}</span>
                </Link>
                <Link href='/goals' className={` ${path.startsWith('/goals') ? 'bg-hover-gray': 'bg-none'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 
                rounded-md font-medium hover:bg-hover-gray
                `}>
                    <div className='text-light-secondary-text dark:text-dark-secondary-text'>
                        {goals}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} text-light-secondary-text dark:text-dark-secondary-text`}>{nav.goals}</span>
                </Link>

            </div>
            <div className='h-16 border-t p-4 flex justify-start items-center w-full
             border-light-border dark:border-dark-border'>
                <Link href='/settings' className={` ${path.startsWith('/settings') ? 'bg-hover-gray': 'bg-none'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 w-full
                rounded-md font-medium hover:bg-hover-gray
                `}>
                    <div className='text-light-secondary-text dark:text-dark-secondary-text'>
                        {setting}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} text-light-secondary-text dark:text-dark-secondary-text`}>
                        {nav.settings}
                    </span>
                </Link>
            </div>
        </nav>
        // </div>
    )
}

export default SideNavBar