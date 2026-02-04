'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';


import BudgetCard from '@/components/budget-card';
import { ClipLoader } from 'react-spinners';
import AddVerificaltionModal from '@/components/verification-modal/add-modal';

import { cross } from '@/lib/icons';
import AddModal from '@/components/add-components/add-modal';

const BudgetsPage = () => {
    const { nav, lan } = useLanguage();

    const [data, setData] = useState();
    const [buttonActive, setButtonActive] = useState(1);
    const [isVerificationModalOpen, setVerificationModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const [selectedId, setSelectedId] = useState(0);
    const [isAddExpensePage, setIsExpensePage] = useState(false);

    const [isCompleted, setIsCompleted] = useState(false);

    async function fetchBudgets(){
        const fetchData = async () => {
            try {
                const res = await fetch("/api/budgets");
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
        fetchBudgets();
    }, [lan]);

    function handleButtonClick(identifier) {
        setButtonActive(identifier);
        if(identifier == 1){
            setIsCompleted(false);
        } else if (identifier == 2){
            setIsCompleted(true);
        }
    }

    function toggleModal(){
        setVerificationModalOpen(prev => !prev);
    }

    function handleModalClose(){
        setVerificationModalOpen(false);
    }

    function openEditModal(identifier, isAddExpense){
        setIsExpensePage(isAddExpense); // here 
        setSelectedId(Number(identifier));
        setEditModalOpen(true);
    }

    function toggleEditModal(){
        fetchBudgets();
        setIsExpensePage(false);
        setEditModalOpen(prev => !prev);
    }

    function handleBudgetDelete(identifier){
        setSelectedId(identifier);
    }

    async function handleDeletionOfBudget(){
        const id = selectedId;
        
        const res = await fetch("/api/budgets", {
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
        setVerificationModalOpen(false);
        fetchBudgets();
    }

    const filteredData = data?.budgets
    .filter(item => item.lanId == lan && (!isCompleted ? (((item.amountSpent/ item.amount) * 100)  < 100) : (((item.amountSpent/ item.amount) * 100)  >= 100)));

    return (
        <div className='h-full w-full p-4
        bg-light-background dark:bg-dark-background
        '>
            {isVerificationModalOpen && <AddVerificaltionModal>
                 <div className='flex flex-col  rounded-md gap-4
                            bg-light-surface-background dark:bg-dark-surface-background
                            border border-light-border dark:border-dark-border
                            '>
                                <div className='flex justify-between items-center border-b p-4
                                border-light-border dark:border-dark-border'>
                                    <span className='text-lg text-light-primary-text dark:text-dark-primary-text'
                                    >{nav.confirmDeletionOfBudget}</span>
                                    <button className='text-light-secondary-text dark:text-dark-secondary-text'
                                    onClick={handleModalClose}
                                    >
                                        {cross}
                                    </button>
                                </div>
                                <div className='p-4 text-light-secondary-text dark:text-dark-secondary-text'>
                                    <p>
                                        {nav.areYouSureWantToDeleteTheSelectedBudget}
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
                                    onClick={handleModalClose}
                                    >
                                        {nav.cancel}
                                    </button>
                                    <button className='grow border max-w-1/2 rounded-sm py-2 border-warning-primary/30 bg-warning-secondary/50
                                    text-light-secondary-text dark:text-dark-secondary-text
                                    hover:border-warning-primary hover:bg-warning-secondary/60'
                                    onClick={handleDeletionOfBudget}
                                    >
                                        {nav.delete}
                                    </button>
                                </div>
                            </div>
                </AddVerificaltionModal>}
             {isEditModalOpen && <AddModal 
             modalId={2} 
             id={selectedId} 
             toggleModal={toggleEditModal}
             isAddExpensePage = {isAddExpensePage}
             />}
            <div className='h-full w-full'>
                <div className='flex w-96'>
                    <button className={`px-4 py-2 border rounded-l-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                          ${buttonActive === 1 ? 'bg-accent-hover text-white' :
                            'hover:bg-hover-gray/30'}
                         `}
                        onClick={() => handleButtonClick(1)}
                    >

                        {nav.active}
                    </button>
                    <button className={`px-4 py-2 border rounded-r-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                          ${buttonActive === 2 ?
                           'bg-accent-hover text-white ' :
                            'hover:bg-hover-gray/30'}
                         `}
                        onClick={() => handleButtonClick(2)}
                    >
                        {nav.completed}
                    </button>
                </div>
                {!data && <div className='bg-light-background dark:bg-dark-surface-background
                     rounded-md m-auto
                    flex flex-col justify-center items-center gap-2 p-4
                    '>
                    <ClipLoader color='gray' size={30} className='' />
                    <p className='text-light-muted-text text-xs dark:text-dark-muted-text'>{nav.loading}</p>
                </div>}
                {data && <div className='grid grid-cols-1 md:grid-cols-2 
                 xl:grid-cols-3 2xl:grid-cols-4
                 gap-4 pt-4'>
                    {data && filteredData.map(item => (
                        <BudgetCard 
                        toggleModal = {toggleModal}
                        toggleEditModal={openEditModal}
                        deleteHandler = {handleBudgetDelete}
                        id={item.id}
                        date={item.date} 
                        title={item.title} 
                        subTitle={item.category} 
                        amount={item.amount} 
                        amountSpent={item.amountSpent} 
                        imgId={item.categoryId}
                        />
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default BudgetsPage