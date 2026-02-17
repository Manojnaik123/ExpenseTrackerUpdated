'use client';

import React, { useEffect, useState } from 'react'

import { useLanguage } from '@/app/application/context/LanguageContext';
import CustomSelect from '@/components/add-components/custom-dropdown';

import { useCurrency } from '../../context/CurrencyContext';

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

const EditPersonalization = () => {

    const [selectedLanId, setSelectedLanId] = useState();
    const [selectedCurId, setSelectedCurId] = useState();

    const { nav, setLan } = useLanguage();

    const { currency, setCurrency } = useCurrency();

    useEffect(()=>{
        setSelectedLanId(Number(localStorage.getItem('languageId')));
        setSelectedCurId(Number(localStorage.getItem('currencyId')));
    },[])

    function handleSelect(e) {
        setLan(e.key);
        setSelectedLanId(e.key);
        localStorage.setItem('languageId', e.key);
    }

    function handleCurrencySelect(e) {
        setCurrency(e.key);
        setSelectedCurId(e.key)
        localStorage.setItem('currencyId', e.key);
    }

    const updatedCurrencies = currency.map(item => {
        return {
            ...item,
            value: item.code + '(' + item.value + ')'
        }
    })

    return (
        <div className='h-full w-full p-4 pb-18 md:pb-0
        bg-light-background dark:bg-dark-background
        '>
            <div className='border rounded-md h-full w-full p-4
            border-light-border dark:border-dark-border
            bg-light-surface-background dark:bg-dark-surface-background
            '>
                <div>
                    <CustomSelect 
                    label={nav.selectLanguage} 
                    selectedKey={nav} 
                    onSelect={handleSelect} 
                    options={lanData} />

                </div>
                <div className='mt-4'>
                    <CustomSelect 
                    label={nav.selectCurrency} 
                    selectedKey={selectedCurId} 
                    onSelect={handleCurrencySelect} 
                    options={updatedCurrencies} />
                </div>
            </div>
        </div>

    )
}

export default EditPersonalization