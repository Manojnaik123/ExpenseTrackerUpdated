'use client';

import CustomInput from '@/components/add-components/custom-input'
import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const ProfilePage = () => {
    const [data, setData] = useState({});
    const { nav } = useLanguage();

    useEffect(() => {
        setData({
            name: localStorage.getItem('userName'),
            gmail: localStorage.getItem('gmail'),
        })
    }, [])

    return (
        <div className="h-full w-full p-4 pb-18 md:pb-0
            bg-light-background dark:bg-dark-background">
            <div className="border rounded-md h-full p-4
              border-light-border dark:border-dark-border
            bg-light-surface-background dark:bg-dark-surface-background
                    ">
                <CustomInput label={nav.name} value={data.name} disabled={true} />
                <div className='mt-4'>
                    <CustomInput label={nav.gmail} value={data.gmail} disabled={true} />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage