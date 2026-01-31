'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';


import BudgetCard from '@/components/budget-card';
import { ClipLoader } from 'react-spinners';

const BudgetsPage = () => {
    const { nav, lan } = useLanguage();

    const [data, setData] = useState();
    const [buttonActive, setButtonActive] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/budgets");
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    function handleButtonClick(identifier) {
        setButtonActive(identifier);
    }

    const filteredData = data?.budgets.filter(item => item.lanId == lan);

    return (
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
            <div className='h-full w-full'>
                <div className='flex w-96'>
                    <button className={`px-4 py-2 border rounded-l-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                          ${buttonActive === 1 ? 'bg-accent-hover text-white' :
                            'hover:bg-hover-gray/30'}
                         `}
                        onClick={() => handleButtonClick(1)}
                    >

                        {nav.active}
                    </button>
                    <button className={`px-4 py-2 border rounded-r-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                          ${buttonActive === 2 ?
                           'bg-accent-hover text-white ' :
                            'hover:bg-hover-gray/30'}
                         `}
                        onClick={() => handleButtonClick(2)}
                    >
                        {nav.completed}
                    </button>
                </div>
                {!data && <div className='bg-light-background dark:bg-dark-surface-background
                     rounded-md m-auto
                    flex flex-col justify-center items-center gap-2 p-4
                    '>
                    <ClipLoader color='gray' size={30} className='' />
                    <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
                </div>}
                {data && <div className='grid grid-cols-1 md:grid-cols-2 
                 xl:grid-cols-3 2xl:grid-cols-4
                 gap-4 pt-4'>
                    {data && filteredData.map(item => (
                        <BudgetCard 
                        date={item.date} 
                        title={item.title} 
                        subTitle={item.category} 
                        amount={item.amount} 
                        amountSpent={item.amountSpent} 
                        imgId={item.categoryId}
                        />
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default BudgetsPage