'use client';

import CustomSelect from './custom-dropdown';
import CustomInput from './custom-input';
import CustomTextArea from './custom-textarea';

import { cross } from '@/lib/icons';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/application/context/LanguageContext';
import { ClipLoader } from 'react-spinners';
import { goalDataValidator } from '@/util/form-validation';

const AddGoal = ({ toggleModal }) => {
    const [data, setData] = useState();
    const [userData, setUserData] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);

    const [errors, setErrors] = useState({
        title: false,
        categoryId: false,
        amount: false,
        priorityId: false,
        date: false,
    })

    const { lan, nav } = useLanguage();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/goal");
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);


    console.log(data);

    const priorities = data?.priorities.filter(item => item.lanid == lan).map(item => ({
        id: item.id,
        value: item.translation
    }));

    const categories = data?.categories.filter(item => item.lanid == lan).map(item => ({
        id: item.id,
        value: item.translation
    }));

    // console.log(priorities);


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
        if (goalDataValidator(userData, setErrors)) {
            setShowSpinner(true);
            const res = await fetch("/api/goal", {
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
            toggleModal();
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
                            {nav.create} {nav.goal}
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
                                <CustomInput label={nav.title} type='text' placeHolder={nav.enterName} onChange={(e) => handleInputChange(e, 'title')}
                                    isValid={errors.title}
                                ></CustomInput>
                            </div>
                            <div className='md:w-1/2'>
                                <CustomSelect label={nav.category} options={categories} onSelect={(e) => handleSelectChange(e, 'categoryId')}
                                    isValid={errors.categoryId}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row gap-4 mt-4'>
                            <CustomInput label={nav.targetAmount} type='number' placeHolder={nav.amount} onChange={(e) => handleInputChange(e, 'amount')}
                                isValid={errors.amount}
                            ></CustomInput>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row gap-4 mt-4'>
                            <div className='md:w-1/2'>
                                <CustomSelect label={nav.priority} options={priorities} onSelect={(e) => handleSelectChange(e, 'priorityId')}
                                    isValid={errors.priorityId}
                                />
                            </div>
                            <div className='md:w-1/2'>
                                <CustomInput label={nav.deadLine} type='date' placeHolder={nav.enterSomething} onChange={(e) => handleInputChange(e, 'date')}
                                    isValid={errors.date}
                                ></CustomInput>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row gap-4 mt-4'>
                            <CustomTextArea label={nav.notes} placeHolder={nav.enterSomething} onChange={(e) => handleInputChange(e, 'remarks')} />
                        </div>
                        <div className='p-4'>
                            <li className={` ${errors.title ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.titleValidationLabel}</li>
                            <li className={` ${errors.categoryId ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.categoryValidationLabel}</li>
                            <li className={` ${errors.amount ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.amountValidationLabel}</li>
                            <li className={` ${errors.priorityId ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.priorityValidationLabel}</li>
                            <li className={` ${errors.date ? undefined : 'hidden'}
                        text-warning-secondary/80 text-sm`}>{nav.dateValidationLabel}</li>
                        </div>
                        <div className='hidden md:flex justify-end items-center gap-3 pt-10 mt-auto'>
                            <button className='text-lg
                    text-blue-700
                    '
                                onClick={toggleModal}
                            >{nav.cancel}</button>
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

export default AddGoal;