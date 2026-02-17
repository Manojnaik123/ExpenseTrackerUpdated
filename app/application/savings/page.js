'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ClipLoader } from 'react-spinners';

import SavingsDataTable from '@/components/savings-data-table';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export async function fetchSavings(lan, setData) {
    const fetchData = async () => {
        try {
            const params = new URLSearchParams({
                lanId: lan,
            });
            const res = await fetch(`/api/savings?${params.toString()}`);
            if (!res.ok) throw new Error("Failed to fetch");
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.error(err);
        }
    };
    fetchData();
}

const SavingsPage = () => {
    const [data, setData] = useState();
    const { nav, lan } = useLanguage();

    const tableTitles = [nav.date, nav.name, nav.type, nav.amount, nav.remarks];

    const searchParams = useSearchParams();

    useEffect(() => {
        fetchSavings(lan, setData);
    }, [lan, searchParams]);

    console.log(data);
    

    const filteredData = data?.savings.map(item => ({
        isSelected: false,
        id: item.id,
        first: item.date,
        second: item.name,
        third: item.type,
        fourth: item.amount,
        fifth: item.notes,
        typeId: item.typeId,
        hidden: false,
    }))

    console.log(filteredData);

    return (
        <div className='h-full w-full p-4 pb-18 md:pb-0
        bg-light-background dark:bg-dark-background
        '>
            <div className='h-full flex flex-col'>
                {!data && <div className='w-full flex flex-col gap-4 justify-center items-center border p-4 rounded-md h-full
                        border-light-border dark:border-dark-border
                        bg-light-surface-background dark:bg-dark-surface-background 
                    '>
                    <ClipLoader color='gray' size={30} className='' />
                    <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
                </div>}
                {data && <SavingsDataTable titleArray={tableTitles} tableData={filteredData} onRefresh={fetchSavings} />}
            </div>
        </div>
    )
}

export default SavingsPage