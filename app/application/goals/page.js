'use client';

import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

import { ClipLoader } from 'react-spinners';

import GoalCard from '@/components/goal-card';
import AddVerificaltionModal from '@/components/verification-modal/add-modal';
import { cross } from '@/lib/icons';
import AddModal from '@/components/add-components/add-modal';
import { useCurrency } from '../context/CurrencyContext';

const GoalsPage = () => {
    const { nav, lan } = useLanguage();

    const { currentCurrencySymbol } = useCurrency();

    const [data, setData] = useState();
    const [isVerificationModalOpen, setVerifyModalVisibility] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [isAddFundPage, setIsFundPage] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [buttonActive, setButtonActive] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);


    async function fetchGoals() {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/goals");
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }

    useEffect(() => {
        fetchGoals();
    }, [lan]);

    function handleVerifyModalClose() {
        setVerifyModalVisibility(false);
    }

    function handleDeletion(identifier) {
        setSelectedId(identifier);
    }

    function openEditModal(identifier, isAddExpense) {
        setIsFundPage(isAddExpense); // here 
        setSelectedId(Number(identifier));
        setEditModalOpen(true);
    }

    function toggleEditModal() {
        setEditModalOpen(prev => !prev)
    }

    async function handleDeletionOfGoal() {
        const id = selectedId;
        console.log('here');
        console.log(id);

        const res = await fetch("/api/goals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(id),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error(data.error);
            return;
        }
        console.log('data deletes');
        setVerifyModalVisibility(false);
        fetchGoals();
    }

    function toggleModal() {
        setVerifyModalVisibility(prev => !prev)
    }

    function handleButtonClick(identifier) {
        setButtonActive(identifier);
        if (identifier == 1) {
            setIsCompleted(false);
        } else if (identifier == 2) {
            setIsCompleted(true);
        }
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filteredData = data?.goals
        .filter(item => item.lanId == lan)
        .filter(item => {
            const goalDate = new Date(item.date);
            goalDate.setHours(0, 0, 0, 0);

            // if isCompleted === true → show completed goals
            if (isCompleted) {
                return goalDate < today;
            }

            // if isCompleted === false → show uncompleted goals
            return goalDate >= today;
        });

    const activeGoals = data?.goals
        .filter(item => item.lanId == lan)
        .filter(item => {
            const goalDate = new Date(item.date);
            goalDate.setHours(0, 0, 0, 0);
            return goalDate >= today;
        }).length;

    const completedGoals = data?.goals
        .filter(item => item.lanId == lan)
        .filter(item => {
            const goalDate = new Date(item.date);
            goalDate.setHours(0, 0, 0, 0);
            return goalDate < today;
        }).length;

    const now = new Date();
    const currentMonth = now.getMonth(); // 0–11
    const currentYear = now.getFullYear();

    const thisMonthSavings = data?.goals
        .filter(item => {
            const d = new Date(item.date); // '2026-02-04' ✅ valid
            return (
                d.getMonth() === currentMonth &&
                d.getFullYear() === currentYear
            );
        })
        .reduce((total, item) => total + Number(item.fund), 0);

    return (
        <>
            {isVerificationModalOpen && <AddVerificaltionModal>

                <div className='flex flex-col  rounded-md gap-4
                                        bg-light-surface-background dark:bg-dark-surface-background
                                        border border-light-border dark:border-dark-border
                                        '>
                    <div className='flex justify-between items-center border-b p-4
                                            border-light-border dark:border-dark-border'>
                        <span className='text-lg text-light-primary-text dark:text-dark-primary-text'
                        >{nav.confirmDeletionOfGoal}</span>
                        <button className='text-light-secondary-text dark:text-dark-secondary-text'
                            onClick={handleVerifyModalClose}
                        >
                            {cross}
                        </button>
                    </div>
                    <div className='p-4 text-light-secondary-text dark:text-dark-secondary-text'>
                        <p>
                            {nav.areYouSureWantToDeleteTheSelectedGoal}
                        </p>
                        <p className='text-sm
                                                text-light-muted-text dark:text-dark-muted-text'>
                            {nav.thisActionCannotBeUnDone}
                        </p>
                    </div>
                    <div className='flex justify-between items-center p-4 gap-2 border-t border-light-border dark:border-dark-border'>
                        <button className='grow border max-w-1/2 rounded-sm py-2 border-light-border dark:border-dark-border
                                                text-light-secondary-text dark:text-dark-secondary-text
                                                hover:bg-hover-gray/30'
                            onClick={handleVerifyModalClose}
                        >
                            {nav.cancel}
                        </button>
                        <button className='grow border max-w-1/2 rounded-sm py-2 border-warning-primary/30 bg-warning-secondary/50
                                                text-light-secondary-text dark:text-dark-secondary-text
                                                hover:border-warning-primary hover:bg-warning-secondary/60'
                            onClick={handleDeletionOfGoal}
                        >
                            {nav.delete}
                        </button>
                    </div>
                </div>

            </AddVerificaltionModal>}
            {isEditModalOpen && <AddModal
                modalId={4}
                id={selectedId}
                toggleModal={toggleEditModal}
                isAddFundPage={isAddFundPage}
            />}
            <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
                <div className='h-full w-full'>
                    {!data && <div className='bg-light-background dark:bg-dark-surface-background
                     rounded-md m-auto
                    flex flex-col justify-center items-center gap-2 p-4
                    '>
                        <ClipLoader color='gray' size={30} className='' />
                        <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
                    </div>}




                    {data &&
                        <>

                            <div className='flex gap-4 pb-4'>

                                <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                                    <span className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.thisMonthSaving}</span>
                                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>{currentCurrencySymbol} {thisMonthSavings}</span>
                                </div>

                                <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                                    <span className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.noOfActiveGoals}</span>
                                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>{activeGoals}</span>
                                </div>

                                <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                                    <span className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.noOfCompletedGoals}</span>
                                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'>{completedGoals} </span>
                                </div>

                            </div>

                            <div className='flex grow md:grow-0'>
                                <button className={`px-4 py-2 border rounded-l-full w-28
                    border-light-border dark:border-dark-border
                    text-light-secondary-text dark:text-dark-secondary-text
                     
                    ${buttonActive === 1 ? 'bg-accent-hover text-white' :
                                        'hover:bg-hover-gray/30'}
                    `}
                                    onClick={() => handleButtonClick(1)}>
                                    {nav.active}
                                </button>
                                <button className={`px-4 py-2 border rounded-r-full w-28
                    border-light-border dark:border-dark-border
                    text-light-secondary-text dark:text-dark-secondary-text
                     
                    ${buttonActive === 2 ? 'bg-accent-hover text-white' :
                                        'hover:bg-hover-gray/30'}
                    `}
                                    onClick={() => handleButtonClick(2)}>
                                    {nav.completed}
                                </button>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 
                xl:grid-cols-3 2xl:grid-cols-4
                 gap-4 pt-4'>

                                {filteredData.map(item => (
                                    <GoalCard
                                        toggleModal={toggleModal}
                                        toggleEditModal={openEditModal}
                                        deleteHandler={handleDeletion}
                                        id={item.id}
                                        title={item.title}
                                        subTitle={item.category}
                                        amount={item.amount}
                                        priority={item.priority}
                                        priorityId={item.priorityId}
                                        date={item.date}
                                        fund={item.fund}
                                        imgId={item.categoryId}
                                    />
                                ))}
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default GoalsPage