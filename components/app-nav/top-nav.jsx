'use client';

import { arrowFirst, budget, downArrow, goals, leftArrow, moveRight, plus, rightArrow, savings, transaction, upArrow } from '@/lib/icons';
import { useLanguage } from '@/app/application/context/LanguageContext';
import { redirect, usePathname } from 'next/navigation';
import { useMediaQuery } from '@/mediaMatch';


import React, { useState, useRef, useEffect } from 'react'
import AddModal from '../add-components/add-modal';
import { useTheme } from '@/app/application/context/ThemeContext';

import Logout from '@/components/logout';

import Image from 'next/image';
import Link from 'next/link';
import TopMessage from '../top-message';
// import { useResponse } from '@/app/application/context/ResponseContext';


function titleFinder(path, nav) {
    if (path === '/application') {
        return nav.dashboard;
    }
    if (path === '/application/transactions') {
        return nav.transactions;
    }
    if (path === '/application/budgets') {
        return nav.budgets;
    }
    if (path === '/application/savings') {
        return nav.savings;
    }
    if (path === '/application/goals') {
        return nav.goals;
    }
    if (path === '/application/settings') {
        return nav.settings;
    }
    if (path === '/application/settings/editpersonalization') {
        return `Personalize`
    }
    if (path === '/application/settings/editappearance') {
        return `Appearance`
    }
    if (path === '/application/settings/logoutpage') {
        return `Logout`
    }
    if (path === '/application/settings/profile') {
        return `Profile`
    }
}

export default function TopNavBar({ sideBarToggle, sideBarOpen }) {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isProfileDropDownOpen, setProfileIsDropDownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIdentifier, setModalIdentifier] = useState(0);
    const [profileImage, setProfileImage] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const dropdownWrapperRef = useRef(null);
    const profileDropdownWrapperRef = useRef(null);

    const { nav, setLan } = useLanguage();
    // const { isDark, toggleTheme } = useTheme();
    const path = usePathname();
    const isSmallScreen = useMediaQuery('(max-width: 1024px)');

    function toggleProfileDrowDown() {
        setProfileIsDropDownOpen(prev => !prev);
    }

    function redirectToSettings() {
        console.log('reached');

        setProfileIsDropDownOpen(false);
        redirect('settings');
    }

    // Create dropdown outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownWrapperRef.current &&
                !dropdownWrapperRef.current.contains(event.target)
            ) {
                setIsDropDownOpen(false);
            }
        }

        setProfileImage(localStorage.getItem('image'));
        setUserName(localStorage.getItem('userName'));
        setEmail(localStorage.getItem('gmail'));

        if (isDropDownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropDownOpen]);

    // Profile dropdown outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                profileDropdownWrapperRef.current &&
                !profileDropdownWrapperRef.current.contains(event.target)
            ) {
                setProfileIsDropDownOpen(false);
            }
        }

        setProfileImage(localStorage.getItem('image'));
        setUserName(localStorage.getItem('userName'));
        setEmail(localStorage.getItem('gmail'));

        if (isProfileDropDownOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isProfileDropDownOpen]);


    function dropDownToggle() {
        setIsDropDownOpen(prev => !prev);
    }

    function handleCreateClick(identifier) {
        setIsDropDownOpen(false);
        setModalIdentifier(identifier);
        setIsModalOpen(true);
    }

    function toggleModal() {
        setIsModalOpen(prev => !prev)
    }

    return (
        <>
            {isModalOpen && <AddModal toggleModal={toggleModal} modalId={modalIdentifier} />}
            <div>
                <TopMessage />
                <nav className='fixed z-40 bg-light-background dark:bg-dark-background w-full 
                        h-16 border-b border-light-border dark:border-dark-border
                        flex
                        '>
                    <div className={` ${sideBarOpen ? 'w-60' : 'w-20'} hidden h-16 border-r border-light-border dark:border-dark-border
                            md:flex justify-between items-center p-4`}>
                        <div>
                            <span className='text-light-primary-text dark:text-dark-primary-text'>
                                <Image src='/images/pngegg.png'
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                />
                            </span>
                        </div>
                        <span className={`${sideBarOpen ? 'flex' : 'hidden'} text-light-primary-text dark:text-dark-primary-text
                            text-lg font-semibold`}>{nav.finovex}</span>
                        <button className='text-light-primary-text dark:text-dark-primary-text'
                            onClick={sideBarToggle} disabled={isSmallScreen}>
                            {sideBarOpen ? leftArrow : rightArrow}
                        </button>
                    </div>
                    <div className='grow flex md:justify-between items-center p-4 pr-0
                            bg-light-background dark:bg-dark-background'>
                        <Link href={'/application'} className='md:hidden pr-2 text-light-primary-text dark:text-dark-primary-text'>
                            <Image src='/images/pngegg.png'
                                alt="Logo"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <span className='md:text-lg text-md
                            text-light-primary-text dark:text-dark-primary-text
                            '>
                            {(titleFinder(path, nav) != 'Personalize' &&
                                titleFinder(path, nav) != 'Appearance' &&
                                titleFinder(path, nav) != 'Logout' && 
                                titleFinder(path, nav) != 'Profile') && titleFinder(path, nav)}

                            {(titleFinder(path, nav) == 'Personalize' ||
                                titleFinder(path, nav) == 'Appearance' ||
                                titleFinder(path, nav) == 'Logout' ||
                                titleFinder(path, nav) == 'Profile') && (
                                    <div className='flex justify-start items-center'>
                                        <Link href={'/application/settings'} className='text-accent-hover underline'>
                                            {nav.settings}
                                        </Link>
                                        {rightArrow}
                                        {titleFinder(path, nav) == 'Appearance' && nav.appearance}
                                        {titleFinder(path, nav) == 'Personalize' && nav.personalize}
                                        {titleFinder(path, nav) == 'Logout' && nav.logout}
                                        {titleFinder(path, nav) == 'Profile' && nav.profile}
                                    </div>
                                )}

                        </span>

                    </div>

                    <div className='relative flex justify-center items-center' ref={dropdownWrapperRef}>
                        <button className='fixed bottom-18 right-4 md:bottom-0 md:static flex justify-between items-center gap-1 p-4 md:px-4 md:py-2 rounded-full
                                text-white bg-primary-accent hover:bg-accent-hover'
                            onClick={() => dropDownToggle()}>
                            <span className='hidden md:flex'>{nav.create} {isDropDownOpen ? upArrow : downArrow}</span>
                            <span className='flex md:hidden'>{plus}</span>
                            {/* dropdown on top navbar */}
                            {isDropDownOpen && <div className='fixed slide-down w-44 right-6 bottom-35 md:bottom-auto md:right-20 md:top-14  border rounded-sm py-4 flex flex-col gap-5
                                            bg-light-surface-background dark:bg-dark-sidebar-background
                                            border-light-border dark:border-dark-border'>
                                <button className='flex justify-start items-center py-2 px-4 gap-2
                                hover:bg-hover-gray
                                text-light-secondary-text dark:text-dark-secondary-text'
                                    onClick={() => handleCreateClick(1)}>
                                    {transaction}
                                    <span>{nav.transactions}</span>
                                </button>
                                <button className='flex justify-start items-center py-2 px-4 gap-2
                                hover:bg-hover-gray
                                text-light-secondary-text dark:text-dark-secondary-text'
                                    onClick={() => handleCreateClick(2)}
                                >
                                    {budget}
                                    <span>{nav.budget}</span>
                                </button>
                                <button className='flex justify-start items-center py-2 px-4 gap-2
                                hover:bg-hover-gray
                                text-light-secondary-text dark:text-dark-secondary-text'
                                    onClick={() => handleCreateClick(3)}
                                >
                                    {savings}
                                    <span>{nav.saving}</span>
                                </button>
                                <button className='flex justify-start items-center py-2 px-4 gap-2
                                hover:bg-hover-gray
                                text-light-secondary-text dark:text-dark-secondary-text'
                                    onClick={() => handleCreateClick(4)}
                                >
                                    {goals}
                                    <span>{nav.goal}</span>
                                </button>
                            </div>}
                        </button>

                        {isProfileDropDownOpen && <div className='slide-down fixed right-4 top-14 border rounded-sm p-4 flex flex-col
                                                bg-light-surface-background dark:bg-dark-sidebar-background
                                                border-light-border dark:border-dark-border
                                                '>
                            <div className='flex gap-2 pb-4'>
                                <Image
                                    src={profileImage}
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full md:flex"
                                    onClick={toggleProfileDrowDown}
                                />
                                <div className='flex flex-col'>
                                    <span className='text-light-secondary-text dark:text-dark-secondary-text'>
                                        {userName}
                                    </span>
                                    <span className='text-sm text-light-muted-text dark:text-dark-muted-text'>
                                        {email}
                                    </span>
                                </div>
                            </div>
                            <div className='border-t border-light-border dark:border-dark-border pt-2'>
                                <Link href={'/application/settings'} className="flex justify-center items-center gap-2 underline
                                 text-accent-hover"
                                >
                                    {nav.goToSettingsPage}
                                    <span className="relative top-[2px]">
                                        {moveRight}
                                    </span>
                                </Link>
                            </div>
                            <div>

                            </div>
                        </div>}


                    </div>
                    <div className='flex justify-center items-center pl-3 pr-4'>
                        <span ref={profileDropdownWrapperRef}
                            className='rounded-full border
                            border-light-border dark:border-dark-border
                            text-light-secondary-text dark:text-dark-secondary-text
                            '>
                            {profileImage && (
                                <Image
                                    src={profileImage}
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full md:flex"
                                    onClick={toggleProfileDrowDown}
                                />
                            )}

                        </span>
                    </div>

                </nav>
            </div>
        </>
    )
}