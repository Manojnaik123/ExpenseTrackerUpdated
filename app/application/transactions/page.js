'use client';

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";
// export const revalidate = 0;

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { downArrow } from '@/lib/icons';
import { ClipLoader } from 'react-spinners';

import DataTable from '@/components/data-table';
import TransactionsDataTable from '@/components/data-table';
import { useSearchParams } from 'next/navigation';
import NoRecords from '@/components/no-records';


export async function fetchingLogic(lanId, setData) {
    const fetchData = async () => {
        try {
            const params = new URLSearchParams({
                lanId: lanId,
            });
            const res = await fetch(`/api/transactions?${params.toString()}`);
            if (!res.ok) throw new Error("Failed to fetch");
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.error(err);
        }
    };
    fetchData();
}

const TransactionsPage = () => {
    const [data, setData] = useState();

    const { nav, lan } = useLanguage();

    const tableTitles = [nav.date, nav.category, nav.type, nav.amount, nav.remarks];

    const searchParams = useSearchParams();

    useEffect(() => {
        fetchingLogic(lan, setData);
    }, [lan, searchParams]);

    const filteredData = data?.transactions.map(item => ({
        isSelected: false,
        id: item.id,
        first: item.date,
        second: item.category,
        third: item.subCategory,
        fourth: item.type,
        fifth: item.amount,
        sixth: item.notes,
        typeId: item.typeId,
        hidden: false,
        timeSpanId: 1
    }))

    return (
        <div className='h-full w-full p-4 pb-18 md:pb-0
            bg-light-background dark:bg-dark-background'>
            <div className='border rounded-md h-full w- p-4
            border-light-border dark:border-dark-border
            bg-light-surface-background dark:bg-dark-surface-background
            '>
                {!data && <div className='bg-light-surface-background dark:bg-dark-surface-background h-full w-full 
                     rounded-md 
                    flex flex-col justify-center items-center gap-2 p-4
                    '>
                    <ClipLoader color='gray' size={30} className='' />
                    <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
                </div>}

                {filteredData && (
                    <TransactionsDataTable
                        titleArray={tableTitles}
                        tableData={filteredData}
                        onRefresh={fetchingLogic}
                    />)}
            </div>
        </div>
    )
}

export default TransactionsPage