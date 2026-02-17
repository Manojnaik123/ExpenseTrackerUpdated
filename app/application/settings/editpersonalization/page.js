'use client';

import React, { useEffect, useState } from 'react'

import { useLanguage } from '@/app/application/context/LanguageContext';
import CustomSelect from '@/components/add-components/custom-dropdown';

import { useCurrency } from '../../context/CurrencyContext';
import AddVerificaltionModal from '@/components/verification-modal/add-modal';
import { ClipLoader } from 'react-spinners';
// import { useResponse } from '../../context/ResponseContext';
import { errors } from '@/data';
import { useTopMessage } from '../../context/ResponseContext';

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
    const [resetting, setResetting] = useState(false);

    const { nav, setLan, lan } = useLanguage();

    const { currency, setCurrency } = useCurrency();
    const { showMessage } = useTopMessage();

    useEffect(() => {
        setSelectedLanId(Number(localStorage.getItem('languageId')));
        setSelectedCurId(Number(localStorage.getItem('currencyId')));
    }, [])

    function handleSelect(e) {
        setLan(e.key);
        setSelectedLanId(e.key);
        localStorage.setItem('languageId', e.key);
        showMessage(1, errors[lan].changesMade);
    }

    function handleCurrencySelect(e) {
        setCurrency(e.key);
        setSelectedCurId(e.key)
        localStorage.setItem('currencyId', e.key);
        showMessage(1, errors[lan].changesMade);

    }

    const updatedCurrencies = currency.map(item => {
        return {
            ...item,
            value: item.code + '(' + item.value + ')'
        }
    })

    return (
        <>
            {resetting && <AddVerificaltionModal>
                <div className='w-full flex flex-col gap-4 justify-center items-center border p-4 rounded-md h-full
                        border-light-border dark:border-dark-border
                        bg-light-surface-background dark:bg-dark-surface-background 
                    '>
                    <ClipLoader color='gray' size={30} className='' />
                    <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.settingLanguage}</p>
                </div>
            </AddVerificaltionModal>}

            <div className='h-full w-full p-4 pb-18 md:pb-0
                    bg-light-background dark:bg-dark-background
                    '>
                <div className='border rounded-md h-full w-full p-4
                        border-light-border dark:border-dark-border
                        bg-light-surface-background dark:bg-dark-surface-background
                        '>
                    <div>
                        <CustomSelect
                            key={nav}
                            label={nav.selectLanguage}
                            selectedKey={selectedLanId}
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
        </>

    )
}

export default EditPersonalization