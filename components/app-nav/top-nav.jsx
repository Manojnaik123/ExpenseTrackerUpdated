'use client';

import { budget, downArrow, goals, leftArrow, rightArrow, savings, transaction, upArrow } from '@/lib/icons';
import { useLanguage } from '@/app/context/LanguageContext';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@/mediaMatch';


import React, { useState, useRef, useEffect } from 'react'
import AddModal from '../add-components/add-modal';

function titleFinder(path, nav) {
    if (path === '/') {
        return nav.dashboard;
    }
    if (path === '/transactions') {
        return nav.transactions;
    }
    if (path === '/budgets') {
        return nav.budgets;
    }
    if (path === '/savings') {
        return nav.savings;
    }
    if (path === '/goals') {
        return nav.goals;
    }
    if (path === '/settings') {
        return nav.settings;
    }
    if(path === '/settings/editpersonalization'){
        return `Settings > Personalize`
    }
     if(path === '/settings/editappearance'){
        return `Settings > Appearance`
    }
    console.log(path);

}

const TopNavBar = ({ sideBarToggle, sideBarOpen }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIdentifier, setModalIdentifier] = useState(0);

    const dropdownWrapperRef = useRef(null);

    const { nav } = useLanguage();
    const path = usePathname();
    const isSmallScreen = useMediaQuery('(max-width: 1024px)');

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownWrapperRef.current &&
                !dropdownWrapperRef.current.contains(event.target)
            ) {
                setIsDropDownOpen(false);
            }
        }

        if (isDropDownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropDownOpen]);


    function dropDownToggle() {
        setIsDropDownOpen(prev => !prev);
    }

    function handleCreateClick(identifier) {
        setIsDropDownOpen(false);
        setModalIdentifier(identifier);
        setIsModalOpen(true);
    }

    function toggleModal(){
        setIsModalOpen(prev => !prev)
    }

    return (
        <nav className='fixed z-40 bg-light-background dark:bg-dark-background w-full 
    h-16 border-b border-light-border dark:border-dark-border
    flex
    '>
            <div className={` ${sideBarOpen ? 'w-72' : 'w-20'} hidden h-16 border-r border-light-border dark:border-dark-border
        md:flex justify-between items-center p-4`}>
                <div>
                    <span className='text-light-primary-text dark:text-dark-primary-text'>logo</span>
                </div>
                <span className={`${sideBarOpen ? 'flex' : 'hidden'} text-light-primary-text dark:text-dark-primary-text
            text-[20px]`}>{nav.companyName}</span>
                <button className='text-light-primary-text dark:text-dark-primary-text'
                    onClick={sideBarToggle} disabled={isSmallScreen}
                >
                    {sideBarOpen ? leftArrow : rightArrow}
                </button>
            </div>
            <div className='grow flex justify-between items-center p-4 pr-0
            bg-light-background dark:bg-dark-background
        '>
                <span className='text-[20px]
            text-light-primary-text dark:text-dark-primary-text
            '>{titleFinder(path, nav)}</span>

            </div>

            <div className='relative flex justify-center items-center' ref={dropdownWrapperRef}>
                <button className='hidden md:flex justify-between items-center gap-1 px-4 py-2 rounded-full
            bg-primary-accent hover:bg-accent-hover'
                    onClick={() => dropDownToggle()}
                >
                    {nav.create} {isDropDownOpen? upArrow: downArrow}</button>


                {/* dropdown on top navbar */}
                {isDropDownOpen && <div  className='fixed w-44 right-20 top-14 border rounded-sm py-4 flex flex-col gap-5
                bg-light-surface-background dark:bg-dark-sidebar-background
                border-light-border dark:border-dark-border
                '>
                    <button className='flex justify-start items-center py-2 px-4 gap-2
                hover:bg-hover-gray
                    text-light-secondary-text dark:text-dark-secondary-text'
                        onClick={()=> handleCreateClick(1)}
                    >
                        {transaction}
                        <span>{nav.transactions}</span>
                    </button>
                    <button className='flex justify-start items-center py-2 px-4 gap-2
                hover:bg-hover-gray
                    text-light-secondary-text dark:text-dark-secondary-text'
                    onClick={()=> handleCreateClick(2)}
                    >
                        {budget}
                        <span>{nav.budget}</span>
                    </button>
                    <button className='flex justify-start items-center py-2 px-4 gap-2
                hover:bg-hover-gray
                    text-light-secondary-text dark:text-dark-secondary-text'
                    onClick={()=> handleCreateClick(3)}
                    >
                        {savings}
                        <span>{nav.saving}</span>
                    </button>
                    <button className='flex justify-start items-center py-2 px-4 gap-2
                hover:bg-hover-gray
                    text-light-secondary-text dark:text-dark-secondary-text'
                    onClick={()=> handleCreateClick(4)}
                    >
                        {goals}
                        <span>{nav.goal}</span>
                    </button>
                </div>}
            </div>

            {isModalOpen && <AddModal toggleModal={toggleModal} modalId={modalIdentifier}/>}

            <div className='flex justify-center items-center pl-3 pr-4'>
                <span className='p-3 rounded-full border
            border-light-border dark:border-dark-border
            '>MN</span>
            </div>

        </nav>
    )
}

export default TopNavBar