'use client';

import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

import { ClipLoader } from 'react-spinners';

import GoalCard from '@/components/goal-card';

const GoalsPage = () => {
    const { nav, lan } = useLanguage();

    const [data, setData] = useState();
    const [buttonActive, setButtonActive] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/goals");
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [lan]);

    const filteredData = data?.goals.filter(item => item.lanId == lan);

    return (
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
            <div className='h-full w-full'>
                <div className='flex gap-4 pb-4'>

                    <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                        <span className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.thisMonthSaving}</span>
                        <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>$36,101.25</span>
                    </div>

                    <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                        <span className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.noOfActiveGoals}</span>
                        <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>$36,101.25</span>
                    </div>

                    <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                        <span className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.noOfCompletedGoals}</span>
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

                {data &&
                    <>
                        <div className='flex grow md:grow-0'>
                            <button className={`px-4 py-2 border rounded-l-full w-28
                    border-light-border dark:border-dark-border
                    text-light-secondary-text dark:text-light-secondary-text
                     hover:bg-hover-gray/30
                    ${buttonActive === 1 ? 'bg-accent-hover text-white/70 hover:bg-accent-hover hover:dark:bg-accent-hover' :
                                    undefined}
                    `}>
                                {nav.active}
                            </button>
                            <button className={`px-4 py-2 border rounded-r-full w-28
                    border-light-border dark:border-dark-border
                    text-light-secondary-text dark:text-light-secondary-text
                     hover:bg-hover-gray/30
                    ${buttonActive === 2 ? 'bg-accent-hover text-white/70 hover:bg-accent-hover hover:dark:bg-accent-hover' :
                                    undefined}
                    `}>
                                {nav.completed}
                            </button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 
                xl:grid-cols-3 2xl:grid-cols-4
                 gap-4 pt-4'>

                            {filteredData.map(item => (
                                <GoalCard 
                                title={item.title} 
                                subTitle={item.category} 
                                amount={item.amount} 
                                priority={item.priority} 
                                date={item.date} 
                                imgId = {item.categoryId}
                                />
                            ))}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default GoalsPage