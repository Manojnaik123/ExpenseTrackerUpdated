'use client';

import { cross, download, logout, reset } from '@/lib/icons'
import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext';
import { signOut } from 'next-auth/react';
import AddVerificaltionModal from '@/components/verification-modal/add-modal';

import { dataFetcher } from '../page';
import { exportTransactionAndSavingsToExcel } from '@/util/xl-export';
import { useTopMessage } from '../../context/ResponseContext';
import { errors } from '@/data';

const LogoutPage = () => {
    const [showComfirmationModal, setShowComfirmationModal] = useState(false);
    const [resetting, setResetting] = useState(false);
    const [identifier, setIdentifier] = useState('');

    const { nav, lan } = useLanguage();
    const { showMessage } = useTopMessage();

    function showConfirmationDialog(bool) {
        setShowComfirmationModal(bool);
    }

    async function handleLogout(e) {
        e.preventDefault();
        await signOut({ callbackUrl: '/login' });
    }

    async function handleAllExport() {
        const transactions = await dataFetcher(lan, 'transactions');
        const savings = await dataFetcher(lan, 'savings');
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

    async function handleButtonSubmission(e) {
        e.preventDefault();
        if (identifier === 'reset') {
            await handleReset();
        } else {
            await handleLogout(e);
        }
    }

    function showConfirmationDialog(identifier) {
        if (identifier == 'logout') {
            setIdentifier(identifier);
        } else if (identifier == 'reset') {
            setIdentifier(identifier)
        }
        setShowComfirmationModal(true);
    }


    return (
        <>
            {showComfirmationModal &&
                <AddVerificaltionModal>
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
                <div className='border rounded-md h-full w-full p-4 flex flex-col justify-end
                    border-light-border dark:border-dark-border
                    bg-light-surface-background dark:bg-dark-surface-background
                    '>

                    <div className='flex flex-col grow'>
                        <div className='border-b flex flex-col items-start gap-1 pb-2
                    border-light-border dark:border-dark-border
                        '>
                            <h1 className=' text-lg flex justify-center items-center gap-2
                                    text-light-primary-text dark:text-dark-primary-text'>
                                {download} {nav.export}
                            </h1>
                            <span className='text-[12px] pl-
                                    text-light-muted-text dark:text-dark-muted-text '>
                                {nav.exportDesc}
                            </span>
                            <button className='text-sm text-accent-hover underline pl-'
                                onClick={() => handleAllExport()}>
                                {nav.clickToExport}
                            </button>
                        </div>
                        <div className='border-b flex flex-col items-start gap-1 py-2 
                    border-light-border dark:border-dark-border
                        '>
                            <h1 className=' text-lg flex justify-center items-center gap-2
                                    text-light-primary-text dark:text-dark-primary-text'>
                                {reset} {nav.reset}
                            </h1>
                            <span className='text-[12px] pl-
                                    text-light-muted-text dark:text-dark-muted-text '>
                                {nav.resetDesc}
                            </span>
                            <button className='text-sm text-warning-primary underline pl-'
                                onClick={() => showConfirmationDialog('reset')}>
                                {nav.clickToReset}
                            </button>
                        </div>
                    </div>

                    <div className='border-t
                        border-light-border dark:border-dark-border'>
                        <button className='grow max-w-1/2 rounded-full flex  pt-2
                            gap-2 justify-center items-center
                            text-warning-primary'
                            onClick={() => showConfirmationDialog('logout')}>
                            {nav.logout}
                            {logout}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoutPage