'use client';

import { budget, dashboard, goals, savings, setting, transaction } from '@/lib/icons';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/application/context/LanguageContext';
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
        <nav className={` ${sideBarOpen? 'w-60': 'w-20'} hidden md:flex flex-col fixed z-30 h-full pt-16
         bg-light-background border-r dark:bg-dark-background
         border-light-border dark:border-dark-border`}>
            <div className='grow p-4'>
                <Link href='/application/' className={` ${path === '/application' ? 'bg-accent-hover text-white': 'bg-none text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 mb-2
                rounded-md font-medium 
                 `}>
                    <div className=''>
                        {dashboard}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} `}>{nav.dashboard}</span>
                </Link>
                <Link href='/application/transactions' className={` ${path.startsWith('/application/transactions') ? 'bg-accent-hover text-white': 'bg-none text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 mb-2
                rounded-md font-medium 
                `}>
                    <div className=''>
                        {transaction}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'}`}>{nav.transactions}</span>
                </Link>
                <Link href='/application/budgets' className={` ${path.startsWith('/application/budgets') ? 'bg-accent-hover text-white': 'bg-none text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 mb-2
                rounded-md font-medium
                 `}>
                    <div className=''>
                        {budget}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} `}>{nav.budgets}</span>
                </Link>
                <Link href='/application/savings' className={` ${path.startsWith('/application/savings') ? 'bg-accent-hover text-white': 'bg-none text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 mb-2
                rounded-md font-medium 
                `}>
                    <div >
                        {savings}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} `}>{nav.savings}</span>
                </Link>
                <Link href='/application/goals' className={` ${path.startsWith('/application/goals') ? 'bg-accent-hover text-white': 'bg-none text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 
                rounded-md font-medium 
                `}>
                    <div >
                        {goals}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} `}>{nav.goals}</span>
                </Link>

            </div>
            <div className='h-16 border-t p-4 flex justify-start items-center w-full
             border-light-border dark:border-dark-border'>
                <Link href='/application/settings' className={` ${path.startsWith('/application/settings') ? 'bg-accent-hover text-white': 'bg-none text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray'} flex ${sideBarOpen? 'justify-start': 'justify-center'} items-center gap-3 p-2 w-full
                rounded-md font-medium 
                `}>
                    <div >
                        {setting}
                    </div>
                    <span className={` ${sideBarOpen? 'flex': 'hidden'} `}>
                        {nav.settings}
                    </span>
                </Link>
            </div>
        </nav>
        // </div>
    )
}

export default SideNavBar