'use client';


import CustomSelect from './custom-dropdown';
import CustomInput from './custom-input';
import CustomTextArea from './custom-textarea';

import { cross } from '@/lib/icons';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/application/context/LanguageContext';
import { ClipLoader } from 'react-spinners';
import { transactionDataValidator } from '@/util/form-validation';
import { maxDate } from '@/util/time-related-date';
import AddVerificaltionModal from '../verification-modal/add-modal';
import { useRouter, usePathname } from 'next/navigation';
import { exportTransactionsToExcel } from '@/util/xl-export';

const AddTransaction = ({ toggleModal, id }) => {
    const [data, setData] = useState();
    const [subCategoriesData, setSubCategoriesData] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);
    const [userData, setUserData] = useState({
        id: 0,
        typeId: null,
        categoryId: null,
        subCategoryId: null,
        amount: '',
        date: '',
        notes: ''
    });

    const [errors, setErrors] = useState({
        typeId: false,
        categoryId: false,
        subCategoryId: false,
        amount: false,
        date: false,
    })

    const { lan, nav } = useLanguage();

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const payload = {
                    id: id ? id : 0,
                }
                const params = new URLSearchParams(payload).toString();
                const res = await fetch(`/api/transaction?${params}`);
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (id > 0 && data?.userTransaction?.length) {
            const tx = data.userTransaction[0];

            setUserData({
                id: tx.id,
                typeId: tx.type_id,
                categoryId: tx.category_id,
                subCategoryId: tx.subcategory_id,
                amount: tx.amount,
                date: tx.date,
                notes: tx.notes ?? ''
            });

            setSubCategoriesData(
                data.subCategories
                    .filter(item => item.lanid == lan && item.category_id === tx.category_id)
                    .map(item => ({
                        id: item.subcategory_id,
                        category_id: item.category_id,
                        value: item.translation
                    }))
            );

            setErrors({
                typeId: false,
                categoryId: false,
                subCategoryId: false,
                amount: false,
                date: false
            });
        }
    }, [id, data, lan]);

    var userTransaction;
    if (id > 0) {
        userTransaction = data?.userTransaction[0];
    }

    const types = data?.types.filter(item => item.lanid == lan).map(item => ({
        id: item.transaction_type_id,
        value: item.translation
    }));

    const categories = data?.categories.filter(item => item.lanid == lan).map(item => ({
        id: item.category_id,
        value: item.translation
    }))

    const subCategories = data?.subCategories.filter(item => item.lanid == lan).map(item => ({
        id: item.subcategory_id,
        category_id: item.category_id,
        value: item.translation
    }))

    function handleSelectChange(selected, identifier) {
        if (identifier === 'categoryId') {
            const filteredSubCategories = subCategories.filter(
                item => item.category_id === selected.id
            );

            setSubCategoriesData(filteredSubCategories);

            // 🔥 RESET subcategory when category changes
            setUserData(prev => ({
                ...prev,
                id: id > 0 ? id : 0,
                categoryId: selected.id,
                subCategoryId: null
            }));

            return;
        }

        setUserData(prev => ({
            ...prev,
            id: id > 0 ? id : 0,
            [identifier]: selected.id
        }));
    }

    function handleInputChange(event, identifier) {
        let value = event.target.value;

        if (identifier === 'amount') {
            value = value === '' ? '' : Number(value);
        }
        setUserData(prev => ({
            ...prev,
            id: id > 0 ? id : 0, // new changes 
            [identifier]: value
        }))
    }

    async function handleSubmit() {
        console.log(userData);
        if (transactionDataValidator(userData, setErrors)) {
            setShowSpinner(true);
            const res = await fetch("/api/transaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await res.json();

            if (!res.ok) {
                console.error(data.error);
                return;
            }
            setShowSpinner(false);
            router.replace('/application/transactions?reload=' + Date.now());
            toggleModal();
        }
    }

    if (!data) return <ClipLoader color='gray' size={30} className='m-auto' />

    return (
        <>

            <div className='relative h-full w-full'>
                <div className={`${showSpinner ? 'absolute' : 'hidden'} z-30 h-full w-full flex justify-center items-center 
                    
                    bg-light-primary-text/10 dark:bg-dark-primary-text/10`}>

                    <div className='bg-light-surface-background dark:bg-dark-surface-background
                    w-20 h-20 rounded-md
                    flex flex-col justify-center items-center
                    '>
                        <ClipLoader color='gray' size={30} className='' />
                        <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.savingData}</p>
                    </div>
                </div>
                <div className='absolute h-full w-full' >
                    <div className=' h-16 border-b flex justify-between items-center p-4 md:flex-row-reverse
        border-light-border dark:border-dark-border
        '>
                        <button
                            onClick={toggleModal}
                            className='text-light-primary-text dark:text-dark-primary-text'>
                            {cross}
                        </button>
                        <span className='grow pl-4 text-lg md:p-0
            text-light-primary-text dark:text-dark-primary-text
            '>
                            {nav.create} {nav.transaction}
                        </span>
                        <button className='md:hidden text-sm
            text-light-secondary-text dark:text-dark-secondary-text'
                            onClick={handleSubmit}
                        >
                            {nav.create}
                        </button>
                    </div>
                    <div className='flex flex-col grow p-4'>
                        <div className='flex flex-col md:flex md:flex-row gap-4'>
                            <div className='md:w-1/2'>
                                <CustomSelect
                                    label={nav.type}
                                    options={types}
                                    onSelect={(e) => handleSelectChange(e, 'typeId')}
                                    isValid={errors.typeId}
                                    selectedKey={userData.typeId}
                                />
                            </div>
                            <div className='md:w-1/2'>
                                <CustomSelect
                                    selectedKey={userData.categoryId}
                                    label={nav.category}
                                    options={categories}
                                    onSelect={(e) => handleSelectChange(e, 'categoryId')}
                                    isValid={errors.categoryId}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row gap-4 mt-4'>
                            <div className='md:w-1/2'>
                                <CustomSelect
                                    selectedKey={userData.subCategoryId}
                                    label={nav.subCategory}
                                    options={subCategoriesData}
                                    onSelect={(e) => handleSelectChange(e, 'subCategoryId')}
                                    isValid={errors.subCategoryId}
                                />
                            </div>
                            <div className='md:w-1/2'>
                                <CustomInput
                                    value={userData.amount}
                                    label={nav.amount}
                                    type='number'
                                    placeHolder={nav.enterAmount}
                                    onChange={(e) => handleInputChange(e, 'amount')}
                                    isValid={errors.amount}
                                ></CustomInput>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row gap-4 mt-4'>
                            <CustomInput
                                value={userData.date}
                                label={nav.date} type='date'
                                placeHolder={nav.enterSomething} onChange={(e) => handleInputChange(e, 'date')}
                                isValid={errors.date}
                                max={maxDate}
                            ></CustomInput>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row gap-4 mt-4'>
                            <CustomTextArea
                                label={nav.notes}
                                placeHolder={nav.enterSomething}
                                onChange={(e) => handleInputChange(e, 'notes')}
                                value={userData.notes}
                            />
                        </div>
                        <div className='p-4'>
                            <li className={` ${errors.typeId ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.typeValidationLabel}</li>
                            <li className={` ${errors.categoryId ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.categoryValidationLabel}</li>
                            <li className={` ${errors.subCategoryId ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.subCategoryValidationLabel}</li>
                            <li className={` ${errors.date ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.dateValidationLabel}</li>
                            <li className={` ${errors.amount ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.amountValidationLabel}</li>
                        </div>
                        <div className='hidden md:flex justify-end items-center gap-3 pt-10 mt-auto'>
                            <button className='text-lg
                    text-blue-700
                    '>{nav.cancel}</button>
                            <button className='text-lg
                    text-light-secondary-text dark:text-dark-secondary-text'
                                onClick={handleSubmit}
                            >{nav.create}</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddTransaction;