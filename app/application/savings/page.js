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


    async function fetchSavings(){
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
    }

    useEffect(() => {
        fetchSavings();
    }, []);

    const filteredData = data?.savings.filter(item => item.lanId == lan).map(item => ({
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
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>

            {!data && <div className='bg-light-background dark:bg-dark-surface-background
                     rounded-md m-auto
                    flex flex-col justify-center items-center gap-2 p-4
                    '>
                <ClipLoader color='gray' size={30} className='' />
                <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
            </div>}
            {data && <div className='h-full flex flex-col'>

                <SavingsDataTable titleArray={tableTitles} tableData={filteredData} onRefresh={fetchSavings} />
            </div>}
        </div>
    )
}

export default TransactionsPage