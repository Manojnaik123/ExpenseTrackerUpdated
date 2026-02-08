'use client';

import { plus } from '@/lib/icons'
import React, { useEffect, useRef, useState } from 'react'
import MobileDropDown from './mobile-drop-dowm'

const MobileAddButton = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const dropdownRef = useRef(null);

    function toggleDropDownVisibility() {
        setIsButtonVisible(prev => !prev);
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsButtonVisible(false);
            }
        }

        if (isButtonVisible) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isButtonVisible]);

    return (
        <>
            {isButtonVisible && (
                <div ref={dropdownRef} className='md:hidden'>
                    <MobileDropDown />
                </div>
            )}
            <button className='fixed md:hidden p-4 bottom-18 right-2 rounded-full border
                border-light-border dark:border-dark-border
                text-white
                bg-accent-hover'
                onClick={toggleDropDownVisibility}
            >
                {plus}
            </button>
        </>
    )
}

export default MobileAddButton