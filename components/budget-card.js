'use client';

import { car, more, categoryIcons, iconColor } from '@/lib/icons'
import React, { useEffect, useRef, useState } from 'react';
import { hexToRgba } from '@/util/ui'
import BudgetDropDown from './budget-dropdown'
import { useLanguage } from '@/app/application/context/LanguageContext';

const BudgetCard = ({deleteHandler, toggleEditModal, toggleModal, id, title, subTitle, amount, date, amountSpent, imgId }) => {

    const [IsDropDownOpen, setDropDownOpen] = useState(false);
    const wrapperRef = useRef(null);

    const {nav} = useLanguage();

    function handleDropDown() {
        setDropDownOpen(prev => !prev);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setDropDownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={wrapperRef} className='relative'>
            {IsDropDownOpen && <BudgetDropDown deleteHandler={deleteHandler} id={id} toggleEditModal={toggleEditModal} toggleModal={toggleModal} />}
            <div className='flex flex-col w-full border rounded-md p-4
    border-light-border dark:border-dark-border
    bg-light-surface-background dark:bg-dark-surface-background
    '>
                <div className='flex justify-between items-center py-3
        border-b border-light-border dark:border-dark-border
        '>
                    <div className={`p-3 rounded-md`}
                        style={{
                            backgroundColor: hexToRgba(iconColor[imgId], 0.2),
                            color: hexToRgba(iconColor[imgId], 1)
                        }}
                    >
                        {categoryIcons[imgId]}
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
                hover:bg-hover-gray/30
                '
                        onClick={handleDropDown}
                    >
                        {more}
                    </button>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between items-center pt-2'>
                        <span className='text-2xl
                    text-light-primary-text dark:text-dark-primary-text
                    '>${amount - amountSpent}</span>
                        <span className='text-light-secondary-text dark:text-dark-secondary-text'>{date}</span>
                    </div>
                    <div className='flex justify-between items-center
                text-light-muted-text dark:text-dark-muted-text
                '>
                        <span>{nav.remainingFrom} ${amount}</span>
                        <span>{nav.creditedOn}</span>
                    </div>
                    <div className='flex justify-between items-center pt-4
                text-light-muted-text dark:text-dark-muted-text
                '>
                        <span>{nav.amountSpent}</span>
                        <span>{nav.utilization}</span>
                    </div>
                    <div className='flex justify-between items-center py-1
                text-light-secondary-text dark:text-light-secondary-text
                '>
                        <span>${amountSpent}</span>
                        <span>{`${Math.floor((amountSpent / amount) * 100)}%`}</span>
                    </div>
                    {/* <progress value='40' max='100' className='w-full h-3 rounded-full overflow-hidden'></progress> */}
                    <div className="w-full h-3 overflow-hidden
                rounded-full border border-light-border dark:border-dark-border
                bg-light-background dark:bg-dark-background
                ">
                        <div
                            className="h-full bg-green-500 transition-all duration-300"
                            style={{ width: `${(amountSpent / amount) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetCard