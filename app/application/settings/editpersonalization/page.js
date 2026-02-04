'use client';

import React from 'react'

import { useLanguage } from '@/app/application/context/LanguageContext';
import CustomSelect from '@/components/add-components/custom-dropdown';

import { useCurrency } from '../../context/CurrencyContext';

const EditPersonalization = () => {

    const { lan, setLan } = useLanguage();

    function handleSelect(e) {
        setLan(e.key);
    }

    const lanData = [
        {
            key: 1,
            value: 'English'
        },
        {
            key: 2,
            value: 'हिन्दी'
        },
        {
            key: 3,
            value: 'Deutsch'
        },
        {
            key: 4,
            value: 'Français'
        },
        {
            key: 5,
            value: 'Español'
        }, {
            key: 6,
            value: '日本語'
        },
    ]

    function handleCurrencySelect(e) {
        setCurrency(e.key)
    }

    const { currency, setCurrency } = useCurrency();

    const updatedCurrencies = currency.map(item => {
        return {
            ...item,
            value: item.code + '(' + item.value + ')'
        }
    })

    return (
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
            <div className='border rounded-md h-full w- p-4
            border-light-border dark:border-dark-border
            bg-light-surface-background dark:bg-dark-surface-background
            '>
                <CustomSelect label='Select Language' onSelect={handleSelect} options={lanData} />

                <CustomSelect label='Select Currency' onSelect={handleCurrencySelect} options={updatedCurrencies} />
            </div>
        </div>

    )
}

export default EditPersonalization