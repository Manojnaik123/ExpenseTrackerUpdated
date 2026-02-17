'use client';


import CustomSelect from './custom-dropdown';
import CustomInput from './custom-input';
import CustomTextArea from './custom-textarea';

import { cross } from '@/lib/icons';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/application/context/LanguageContext';
import { ClipLoader } from 'react-spinners';
import { savingDataValidator } from '@/util/form-validation';
import { useRouter, usePathname } from 'next/navigation';
import { useTopMessage } from '@/app/application/context/ResponseContext';
import { errors as errorData } from '@/data';

const AddSaving = ({ toggleModal, id }) => {
    const [data, setData] = useState();
    const [userData, setUserData] = useState({
        id: 0,
        name: '',
        typeId: null,
        amount: '',
        date: '',
        notes: '',
    });
    const [showSpinner, setShowSpinner] = useState(false);

    const [errors, setErrors] = useState({
        name: false,
        typeId: false,
        amount: false,
        date: false,
    })

    const { lan, nav } = useLanguage();
    const { showMessage } = useTopMessage();
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
            try {

                const payload = {
                    id: id ? id : 0,
                    lanId: lan
                }
                const params = new URLSearchParams(payload).toString();
                const res = await fetch(`/api/saving?${params}`);
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
        if (id > 0 && data?.userSaving?.length) {
            const us = data.userSaving[0];

            setUserData({
                id: us.id,
                name: us.name,
                typeId: us.saving_type_id,
                amount: us.amount,
                date: us.date,
                notes: us.notes
            });

            setErrors({
                name: false,
                typeId: false,
                amount: false,
                date: false,
            });
        }
    }, [id, data, lan]);

    const types = data?.types.map(item => ({
        id: item.id,
        value: item.translation
    }));

    function handleSelectChange(selected, identifier) {
        setUserData(prev => ({
            ...prev,
            [identifier]: selected.id
        }))
    }

    function handleInputChange(event, identifier) {
        setUserData(prev => ({
            ...prev,
            [identifier]: event.target.value
        }))
    }

    async function handleSubmit() {
        if (savingDataValidator(userData, setErrors)) {
            setShowSpinner(true);
            const res = await fetch("/api/saving", {
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
            router.replace('/application/savings?reload=' + Date.now());
            toggleModal();
            showMessage(1, id ? errorData[lan].dataEditedSuccesfully + '!' : errorData[lan].dataSavedSuccesfully + '!');
        }
    }

    if (!data) return (<div className='bg-light-surface-background dark:bg-dark-surface-background
                        rounded-md  flex flex-col justify-center items-center gap-2 p-4 grow'>
        <ClipLoader color='gray' size={30} className='' />
        <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
    </div>)

    return (
        <>
            <div className='relative h-full w-full'>
                <div className={`${showSpinner ? 'absolute' : 'hidden'} z-30 h-full w-full flex justify-center items-center 
                    
                    bg-light-primary-text/10 dark:bg-dark-primary-text/10`}>

                    <div className='bg-light-surface-background dark:bg-dark-surface-background
                                         rounded-md 
                                        flex flex-col justify-center items-center gap-2 p-4
                                        '>
                        <ClipLoader color='gray' size={30} className='' />
                        <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.savingData}</p>
                    </div>
                </div>
                <div className='absolute h-full w-full flex flex-col' >
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
                            {id ? nav.edit : nav.create} {nav.saving}
                        </span>
                        <button className='md:hidden text-sm
                            text-light-secondary-text dark:text-dark-secondary-text'
                            onClick={handleSubmit}
                        >
                            {id ? nav.edit : nav.create}
                        </button>
                    </div>
                    <div className='flex flex-col grow p-4'>
                        <div className='flex flex-col md:flex md:flex-row gap-4'>
                            <div className='md:w-1/2'>
                                <CustomInput
                                    isRequired={true}
                                    label={nav.name}
                                    type='text' placeHolder={nav.enterName}
                                    onChange={(e) => handleInputChange(e, 'name')}
                                    isValid={errors.amount}
                                    value={userData.name}
                                ></CustomInput>
                            </div>
                            <div className='md:w-1/2'>
                                <CustomSelect
                                    isRequired={true}
                                    label={nav.type}
                                    options={types} onSelect={(e) => handleSelectChange(e, 'typeId')}
                                    isValid={errors.typeId}
                                    selectedKey={userData.typeId}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row gap-4 mt-4'>
                            <div className='md:w-1/2'>
                                <CustomInput
                                    isRequired={true}
                                    label={nav.amount}
                                    type='number'
                                    placeHolder={nav.enterAmount} onChange={(e) => handleInputChange(e, 'amount')}
                                    isValid={errors.amount}
                                    value={userData.amount}
                                ></CustomInput>
                            </div>
                            <div className='md:w-1/2'>
                                <CustomInput
                                    isRequired={true}
                                    label={nav.date}
                                    type='date'
                                    placeHolder={nav.enterSomething}
                                    onChange={(e) => handleInputChange(e, 'date')}
                                    isValid={errors.date}
                                    value={userData.date}
                                ></CustomInput>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex md:flex-row gap-4 mt-4'>
                            <CustomTextArea
                                label={nav.notes}
                                placeHolder={nav.enterSomething} onChange={(e) => handleInputChange(e, 'notes')}
                                value={userData.notes}
                            />
                        </div>
                        <div className='p-4'>
                            <li className={` ${errors.typeId ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.nameValidtionLabel}</li>
                            <li className={` ${errors.typeId ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.typeValidationLabel}</li>
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
                            >{id ? nav.edit : nav.create}</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddSaving;