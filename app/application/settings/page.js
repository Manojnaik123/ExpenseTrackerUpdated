'use client';

import { cross, download, logout, mail, reset, rightArrow } from '@/lib/icons';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AddVerificaltionModal from '@/components/verification-modal/add-modal';
import { signOut } from 'next-auth/react';
import { exportTransactionAndSavingsToExcel } from '@/util/xl-export';
import { ClipLoader } from 'react-spinners';
import { useResponse, useTopMessage } from '../context/ResponseContext';
import { errors } from '@/data';

export async function dataFetcher(lanId, path) {
    try {
        const params = new URLSearchParams({
            lanId: lanId,
        });
        const res = await fetch(`/api/${path}?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        return json;
    } catch (err) {
        return null;
    }
}

const SettingsPage = () => {
    const [profileImage, setProfileImage] = useState('');
    const [showComfirmationModal, setShowComfirmationModal] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [resetting, setResetting] = useState(false);

    const { nav, lan } = useLanguage();
    const { showMessage } = useTopMessage()

    useEffect(() => {
        setProfileImage(localStorage.getItem('image'));
        setUserName(localStorage.getItem('userName'));
        setEmail(localStorage.getItem('gmail'));
    }, [])

    function showConfirmationDialog(identifier) {
        if (identifier == 'logout') {
            setIdentifier(identifier);
        } else if (identifier == 'reset') {
            setIdentifier(identifier)
        }
        setShowComfirmationModal(true);
    }

    async function handleLogout(e) {
        await signOut({ callbackUrl: '/login' });
    }

    async function handleButtonSubmission(e) {
        e.preventDefault();
        if (identifier === 'reset') {
            await handleReset();
        } else {
            await handleLogout(e);
        }
    }

    async function handleAllExport() {
        const transactions = await dataFetcher(lan, 'transactions');
        const savings = await dataFetcher(lan, 'savings')
        exportTransactionAndSavingsToExcel(transactions.transactions, savings.savings, lan)
    }

    async function handleReset() {
        try {
            setShowComfirmationModal(false);
            setResetting(true);
            const res = await fetch("/api/reset", {
                method: "POST",
            });

            const data = await res.json();

            if (!res.ok) {
                showMessage(2, errors[lan].somethingWentWrong)
                throw new Error(data.error);
            }
        } catch (error) {
            showMessage(2, errors[lan].cannotResetData)
            setResetting(false);
        } finally {

            showMessage(1, errors[lan].dataResetSuccess)
            setResetting(false);
        }
    }

    return (
        <>
            {resetting && <AddVerificaltionModal>
                <div className='w-full flex flex-col gap-4 justify-center items-center border p-4 rounded-md h-full
                        border-light-border dark:border-dark-border
                        bg-light-surface-background dark:bg-dark-surface-background 
                    '>
                    <ClipLoader color='gray' size={30} className='' />
                    <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.resetting}</p>
                </div>
            </AddVerificaltionModal>}
            {showComfirmationModal && <AddVerificaltionModal>
                <div className='flex flex-col  rounded-md gap-4
                        bg-light-surface-background dark:bg-dark-surface-background
                        border border-light-border dark:border-dark-border
                        '>
                    <div className='flex justify-between items-center border-b p-4
                            border-light-border dark:border-dark-border'>
                        <span className='text-lg text-light-primary-text dark:text-dark-primary-text'
                        >
                            {identifier == 'reset' ? nav.conformationForReset : nav.confirmationForLogout}
                        </span>
                        <button className='text-light-secondary-text dark:text-dark-secondary-text'
                            onClick={() => setShowComfirmationModal(false)}>
                            {cross}
                        </button>
                    </div>
                    <div className='p-4 text-light-secondary-text dark:text-dark-secondary-text'>
                        <p>
                            {identifier == 'reset' ? nav.areYouSureReset : nav.areYouSureAboutLogout}?
                        </p>
                        <p className='text-sm
                                                text-light-muted-text dark:text-dark-muted-text'>
                            {nav.chooseYourResponse}.
                        </p>
                    </div>
                    <div className='flex justify-between items-center p-4 gap-2 border-t border-light-border dark:border-dark-border'>
                        <button className='grow border max-w-1/2 rounded-sm py-2 border-light-border dark:border-dark-border
                                text-light-secondary-text dark:text-dark-secondary-text
                                hover:bg-hover-gray/30
                                ' onClick={() => setShowComfirmationModal(false)}>
                            {nav.cancel}
                        </button>
                        <button className='grow border max-w-1/2 rounded-sm py-2 border-warning-primary/30 bg-warning-secondary/50
                                text-light-secondary-text dark:text-dark-secondary-text
                                hover:border-warning-primary hover:bg-warning-secondary/60
                                ' onClick={handleButtonSubmission} >
                            {identifier == 'reset' ? nav.reset : nav.logout}
                        </button>
                    </div>
                </div>
            </AddVerificaltionModal>}

            <div className='h-full w-full p-4 pb-18 md:pb-0
                bg-light-background dark:bg-dark-background
                '>
                <div className='border rounded-md h-full w- p-4
                    border-light-border dark:border-dark-border
                    bg-light-surface-background dark:bg-dark-surface-background
                    '>
                    <div className='flex justify-between items-center border-b
                        border-light-border dark:border-dark-border
                        '>
                        <div className='flex gap-3 justify-start items-center py-4 '>
                            <span className='bg-primary-accent rounded-full'>
                                {profileImage && (
                                    <Image
                                        src={profileImage}
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                )}
                            </span>
                            <div className='flex flex-col gap-1'>
                                <spam className=' text-[13px] md:text-[18px] font-semibold
                                text-light-secondary-text dark:text-dark-secondary-text
                                '>
                                    {userName && userName}
                                </spam>
                                <span className='text-[10px] flex justify-start items-center gap-1
                                    text-light-muted-text dark:text-dark-muted-text'>
                                    {mail}{email}
                                </span>
                            </div>
                        </div>
                        <div className='hidden md:flex gap-3'>
                            <button className='px-4 py-1 border rounded-full text-[13px] md:text-[18px] flex justify-center items-center gap-2
                                border-light-border dark:border-dark-border hover:bg-hover-gray/30
                                text-light-secondary-text dark:text-dark-secondary-text'
                                onClick={handleAllExport}>
                                {nav.export} {download}</button>
                            <button className='px-4 py-1 border rounded-full text-[13px] md:text-[18px] flex justify-center items-center gap-2
                                border-light-border dark:border-dark-border hover:bg-hover-gray/30
                                text-light-secondary-text dark:text-dark-secondary-text'
                                onClick={() => showConfirmationDialog('reset')}>
                                {/* text-light-secondary-text dark:text-dark-secondary-text */}
                                {nav.reset} {reset}
                            </button>
                            <button className='grow border max-w-1/2 py-2 px-4 rounded-full flex  gap-2 justify-center items-center
                                    border-warning-primary/30 bg-warning-secondary/50
                                text-warning-primary
                                hover:border-warning-primary hover:bg-warning-secondary/60
                                ' onClick={() => showConfirmationDialog('logout')}>
                                {nav.logout}
                                {logout}
                            </button>

                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='border rounded-md pb-4
                            border-light-border dark:border-dark-border
                            bg-light-background dark:bg-dark-background
                            '>
                            {/* Profile */}
                            <Link href={'/application/settings/profile'}>
                                <div className='px-4 hover:bg-hover-gray/30'>
                                    <div className='flex justify-between items-center py-4 border-b 
                                    border-light-border dark:border-dark-border
                                        '>
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-[13px] md:text-[18px]
                                            text-light-secondary-text dark:text-dark-secondary-text
                                            '>{nav.profile}</span>
                                                            <span className='text-[12px] md:text-[15px]
                                            text-light-muted-text dark:text-dark-muted-text
                                            '>{nav.name}, {nav.gmail}</span>
                                        </div>
                                        <div>
                                            <span className='text-light-secondary-text dark:text-dark-secondary-text'>
                                                {rightArrow}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Preferences */}
                            <Link href='/application/settings/editpersonalization'>
                                <div className='px-4 hover:bg-hover-gray/30'>
                                    <div className='flex justify-between items-center py-4 border-b 
                                        border-light-border dark:border-dark-border
                                            '>
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-[13px] md:text-[18px]
                                                text-light-secondary-text dark:text-dark-secondary-text
                                                '>{nav.preference}
                                            </span>
                                            <span className='text-[12px] md:text-[15px]
                                                text-light-muted-text dark:text-dark-muted-text
                                                '>{nav.preferredLanguage}, {nav.currency}
                                            </span>
                                        </div>
                                        <div>
                                            <div className='text-light-secondary-text dark:text-dark-secondary-text'>
                                                {rightArrow}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Appearance */}
                            <Link href='/application/settings/editappearance'>
                                <div className='px-4 hover:bg-hover-gray/30'>
                                    <div className='flex justify-between items-center py-4 border-b 
                                        border-light-border dark:border-dark-border
                                            '>
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-[13px] md:text-[18px]
                            text-light-secondary-text dark:text-dark-secondary-text
                            '>{nav.appearance}</span>
                                            <span className='text-[12px] md:text-[15px]
                            text-light-muted-text dark:text-dark-muted-text
                            '>{` ${nav.lightDarkThemes}`}</span>
                                        </div>
                                        <div>
                                            <Link href='/application/settings/editappearance' className='text-light-secondary-text dark:text-dark-secondary-text'>
                                                {rightArrow}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Account Settings */}
                            <Link href='/application/settings/logoutpage' className='md:hidden'>
                                <div className='px-4 hover:bg-hover-gray/30'>
                                    <div className='flex justify-between items-center py-4 border-b 
                                        border-light-border dark:border-dark-border
                                            '>
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-[13px] md:text-[18px]
                                                text-light-secondary-text dark:text-dark-secondary-text
                                                '>{nav.accountSettings}
                                            </span>
                                            <span className='text-[12px] md:text-[15px]
                                                text-light-muted-text dark:text-dark-muted-text
                                                '>{` ${nav.export + ', ' + nav.reset + ', ' + nav.logout}`}
                                            </span>
                                        </div>
                                        <div>
                                            <Link href='/application/settings/logoutpage' className='text-light-secondary-text dark:text-dark-secondary-text'>
                                                {rightArrow}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SettingsPage