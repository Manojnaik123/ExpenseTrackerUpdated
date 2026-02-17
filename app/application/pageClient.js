'use client';

import React, { useEffect, useState } from 'react';
import FirstComponent from "@/components/dashboard/first-comp";
import SecondComponent from "@/components/dashboard/second-comp";
import ThirdComponent from "@/components/dashboard/third-comp";
import FourthComponent from "@/components/dashboard/fourth-comp";
import { useLanguage } from './context/LanguageContext';
import { ClipLoader } from 'react-spinners';
import AddVerificaltionModal from '@/components/verification-modal/add-modal';
import { cross } from '@/lib/icons';
import { useCurrency } from './context/CurrencyContext';
import { useTheme } from './context/ThemeContext';
import { usePre } from './context/PreContext';


export async function fetchingLogic(lanId, setData) {
    const fetchData = async () => {
        try {
            const params = new URLSearchParams({
                lanId: lanId,
            });
            const res = await fetch(`/api/dashboard?${params.toString()}`);
            if (!res.ok) throw new Error("Failed to fetch");
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.error(err);
        }
    };
    fetchData();
}

const PageClient = ({ name, image, email }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState();

    const { nav, lan, setLan } = useLanguage();
    const { setCurrency } = useCurrency();
    const { setTheme } = useTheme();
    const { setEmail } = usePre();

    useEffect(() => {
        const flag = localStorage.getItem('firstTime');
        const curId = localStorage.getItem('currencyId');
        const theme = localStorage.getItem('themeMode');
        const lanId = localStorage.getItem('languageId');

        if (curId) {
            setCurrency(curId);
        }

        if (theme) {
            setTheme(theme);
        }

        if (lanId) {
            setLan(lanId);
        }

        if (!flag) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false)
        }

        localStorage.setItem('userName', name);
        localStorage.setItem('image', image);
        // localStorage.setItem('currencyId', 1);
        localStorage.setItem('gmail', email);
        fetchingLogic(lan, setData);
        setEmail(prev => !prev);
    }, [])

    async function handleContinueWithSampleData() {
        localStorage.setItem('firstTime', false);
        await fetch("/api/seed", {
            method: "POST",
        });
        fetchingLogic(lan, setData);
        setIsModalOpen(false);
    }

    function handleCancel() {
        setIsModalOpen(false);
        localStorage.setItem('firstTime', false);
    }

    return (
        <>
            {isModalOpen && <AddVerificaltionModal>
                <div className='flex flex-col rounded-md gap-4 max-w-120
                                    bg-light-surface-background dark:bg-dark-surface-background
                                    border border-light-border dark:border-dark-border
                                    '>
                    <div className='flex justify-between items-center border-b p-4
                                        border-light-border dark:border-dark-border'>
                        <span className='text-center text-lg text-light-primary-text dark:text-dark-primary-text'
                        >{nav.import}</span>
                        <button className='text-light-secondary-text dark:text-dark-secondary-text'
                            onClick={handleCancel}   >
                            {cross}
                        </button>
                    </div>
                    <div className='p-4 text-light-secondary-text dark:text-dark-secondary-text'>
                        <p>
                            {nav.toBegin}
                        </p>
                        <p className='text-sm
                                                            text-light-muted-text dark:text-dark-muted-text'>
                            {nav.toBeginDesc}.
                        </p>
                    </div>
                    <div className='flex justify-between items-center p-4 gap-2 border-t border-light-border dark:border-dark-border'>
                        <button className='grow border rounded-sm py-2 border-accent-hover/50 bg-primary-accent/50
                                            text-white
                                            hover:border-accent-hover hover:bg-primary-accent/60'
                            onClick={handleContinueWithSampleData}>
                            {nav.continueWithSampleData}
                        </button>
                    </div>
                </div>
            </AddVerificaltionModal>}
            <div className="w-full flex flex-col gap-4 pb-18 md:pb-0
                bg-light-surface-background  dark:bg-dark-surface-background">
                {/* <div className="h-[calc(100lvh-64px)] w-full flex flex-col grow px-4"> */}
                {!data && <div className='bg-light-surface-background dark:bg-dark-surface-background h-lvh w-full 
                     rounded-md 
                    flex flex-col justify-center items-center gap-2 p-4
                    '>
                    <ClipLoader color='gray' size={30} className='' />
                    <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
                </div>}
                {data && <>
                    <div className="w-full flex flex-col grow px-4
                         md:h-[calc(100lvh-64px)]">
                        <div className="shrink-0">
                            <FirstComponent data={data} />
                        </div>

                        <div className="flex-1 min-h-0">
                            <SecondComponent transactions={data?.transactions} />
                        </div>
                    </div>
                    <div className="h-[80lvh] px-4 pt-0">
                        <ThirdComponent transactions={data?.transactions} />
                    </div>
                    <div className="md:h-[70lvh] p-4 pt-0 flex flex-col md:flex-row gap-4">
                        <FourthComponent goals={data?.goals} savings={data?.savings} />
                    </div>
                </>}
            </div>
        </>
    )
}

export default PageClient