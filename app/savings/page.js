'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ClipLoader } from 'react-spinners';

import SavingsDataTable from '@/components/savings-data-table';
import { useEffect, useState } from 'react';


const TransactionsPage = () => {
    const [data, setData] = useState();
    const { nav, lan } = useLanguage();

    const tableTitles = [nav.date, nav.name, nav.type, nav.amount, nav.remarks];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/savings");
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    const filteredData = data?.savings.filter(item => item.lanId == lan).map(item => ({
        isSelected: false,
        id: item.id,
        first: item.date,
        second: item.name,
        third: item.type,
        fourth: item.amount,
        fifth: item.notes,
        hidden: false,
    }))

    console.log(data);

    return (
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
            <div className='flex gap-4 pb-4'>
                <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                    <h1 className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.totalSavings}</h1>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>$36,101.25</span>
                </div>
                <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                    <h1 className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.thisMonthSaving}</h1>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>$36,101.25</span>
                </div>
            </div>
            {!data && <div className='bg-light-background dark:bg-dark-surface-background
                     rounded-md m-auto
                    flex flex-col justify-center items-center gap-2 p-4
                    '>
                <ClipLoader color='gray' size={30} className='' />
                <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
            </div>}
            {data && <div className='border rounded-md w- p-4
            border-light-border dark:border-dark-border
            bg-light-surface-background dark:bg-dark-surface-background
            '>

                <SavingsDataTable titleArray={tableTitles} tableData={filteredData} />
            </div>}
        </div>
    )
}

export default TransactionsPage