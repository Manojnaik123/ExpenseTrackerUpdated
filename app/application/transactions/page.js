'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { downArrow } from '@/lib/icons';
import { ClipLoader } from 'react-spinners';

import DataTable from '@/components/data-table';
import TransactionsDataTable from '@/components/data-table';
import { useSearchParams } from 'next/navigation';


const TransactionsPage = () => {
    const [data, setData] = useState();

    const { nav, lan } = useLanguage();

    const tableTitles = [nav.date, nav.category, nav.type, nav.amount, nav.remarks];

     const searchParams = useSearchParams();

    async function fetchingLogic(){
         const fetchData = async () => {
            try {
                const res = await fetch("/api/transactions");
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }

    useEffect(() => {
       fetchingLogic();
    }, [lan, searchParams]);

    const filteredData = data?.transactions.filter(item => item.lanId == lan).map(item => ({
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

    console.log(filteredData);

    return (
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
            <div className='border rounded-md h-full w- p-4
            border-light-border dark:border-dark-border
            bg-light-surface-background dark:bg-dark-surface-background
            '>

                {!data && <div className='bg-light-surface-background dark:bg-dark-surface-background
                     rounded-md 
                    flex flex-col justify-center items-center gap-2 p-4
                    '>
                    <ClipLoader color='gray' size={30} className='' />
                    <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
                </div>}
                {/* {data && <DataTable key={lan}
                    titleArray={tableTitles}
                    tableData={filteredData} />} */}

                    {data && <TransactionsDataTable
                    titleArray = {tableTitles}
                    tableData = {filteredData}
                    onRefresh = {fetchingLogic}
                    />}
            </div>
        </div>
    )
}

export default TransactionsPage