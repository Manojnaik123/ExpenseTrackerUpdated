'use client';

import { car, more, categoryIcons, iconColor, cross, goalIconColor, goalCategoryIcons } from '@/lib/icons'
import React, { useEffect, useRef, useState } from 'react';
import { hexToRgba } from '@/util/ui';
import GoalDropDown from './goal-dropdown';
import { useLanguage } from '@/app/application/context/LanguageContext';
import { useCurrency } from '@/app/application/context/CurrencyContext';


const GoalCard = ({ id, title, subTitle, amount, date, priority, priorityId, fund, imgId, deleteHandler, toggleEditModal, toggleModal }) => {

    const [isDropDownOpen, setDropDownVisibility] = useState(false);

    const wrapperRef = useRef(null);

    const { nav } = useLanguage();
    const { currentCurrencySymbol } = useCurrency();

    function toggleDropDown() {
        setDropDownVisibility(prev => !prev);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setDropDownVisibility(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={wrapperRef} className='relative'>

            {isDropDownOpen && <GoalDropDown id={id} deleteHandler={deleteHandler} toggleEditModal={toggleEditModal} toggleModal={toggleModal} />}

            <div className='flex flex-col w-full border rounded-md p-4
    border-light-border dark:border-dark-border
    bg-light-surface-background dark:bg-dark-surface-background
    '>
                <div className='flex justify-between items-center py-3
        border-b border-light-border dark:border-dark-border
        '>
                    <div className={`p-3 rounded-md`}
                        style={{
                            backgroundColor: hexToRgba(goalIconColor[imgId], 0.2),
                            color: hexToRgba(goalIconColor[imgId], 1)
                        }}
                    >
                        {goalCategoryIcons[imgId]}
                    </div>
                    <div className='flex flex-col grow pl-4'>
                        <span className='text-[18px]
                text-light-primary-text dark:text-dark-primary-text
                '>
                            {title}
                        </span>
                        <span className='text-[15px]
                text-light-secondary-text dark:text-dark-muted-text
                '>{subTitle}</span>
                    </div>
                    <button className='text-light-primary-text dark:text-dark-primary-text p-2 rounded-md
                hover:bg-hover-gray/30'
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleDropDown();
                        }}
                    >
                        {more}
                    </button>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between items-center pt-2'>
                        <span className='text-2xl
                    text-light-primary-text dark:text-dark-primary-text
                    '>{currentCurrencySymbol + ' ' + (fund ? fund : 0)}</span>
                        <span className={`${priorityId == 1 ? 'bg-success-bg/40 text-success-bg' : 'bg-warning-secondary/40 text-warning-secondary'} 
                        border px-1  rounded-md text-[13px]`}>
                            {priority}
                        </span>
                    </div>
                    <div className='flex justify-between items-center
                text-light-muted-text dark:text-dark-muted-text
                '>
                        <span>{nav.outOf} {currentCurrencySymbol} {amount}</span>
                        <span>{nav.priority}</span>
                    </div>
                    <div className='flex justify-between items-center pt-4
                text-light-muted-text dark:text-dark-muted-text
                '>
                        <span>{nav.deadLine}</span>
                        <span>  {Math.max(Math.ceil((new Date(date) - new Date()) / (1000 * 60 * 60 * 24)), 0)}
                            {' '}{nav.daysLeft}</span>
                    </div>
                    <div className='flex justify-between items-center py-1
                text-light-secondary-text dark:text-light-secondary-text
                '>
                        <span>{date}</span>
                        <span>{(fund/amount)*100}%</span>
                    </div>
                    {/* <progress value='40' max='100' className='w-full h-3 rounded-full overflow-hidden'></progress> */}
                    <div className="w-full h-3 overflow-hidden
                        rounded-full border border-light-border dark:border-dark-border
                        bg-hover-gray/50
                        ">
                        <div
                            className="h-full transition-all duration-300 rounded-r-full"
                            style={
                                {
                                    width: `${(fund/amount)*100}%`,
                                    backgroundColor: hexToRgba(goalIconColor[imgId], 0.8),
                                }
                            }
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GoalCard