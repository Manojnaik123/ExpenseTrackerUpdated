'use client';
import { useState } from 'react';
import { useLanguage } from '@/app/application/context/LanguageContext'
import { budget, transaction, goals, savings } from '@/lib/icons'
import React from 'react'
import AddModal from '../add-components/add-modal';

const MobileDropDown = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIdentifier, setModalIdentifier] = useState(0);


    const { nav } = useLanguage();

    function handleCreateClick(identifier) {
        // setIsDropDownOpen(false);
        setModalIdentifier(identifier);
        setIsModalOpen(true);
    }
    function toggleModal(){
        setIsModalOpen(prev => !prev);
    }

    return (
        <>
            {isModalOpen && <AddModal toggleModal={toggleModal} modalId={modalIdentifier}/>}

            <div className='fixed slide-up w-44 right-4 bottom-35 border rounded-sm py-4 flex flex-col gap-5
                    bg-light-surface-background dark:bg-dark-sidebar-background
                    border-light-border dark:border-dark-border
                    '>
                <button className='flex justify-start items-center py-2 px-4 gap-2
                    hover:bg-hover-gray/30
                        text-light-secondary-text dark:text-dark-secondary-text'
                    onClick={() => handleCreateClick(1)}
                >
                    {transaction}
                    <span>{nav.transactions}</span>
                </button>
                <button className='flex justify-start items-center py-2 px-4 gap-2
                    hover:bg-hover-gray/30
                        text-light-secondary-text dark:text-dark-secondary-text'
                    onClick={() => handleCreateClick(2)}
                >
                    {budget}
                    <span>{nav.budget}</span>
                </button>
                <button className='flex justify-start items-center py-2 px-4 gap-2
                    hover:bg-hover-gray/30
                        text-light-secondary-text dark:text-dark-secondary-text'
                    onClick={() => handleCreateClick(3)}
                >
                    {savings}
                    <span>{nav.saving}</span>
                </button>
                <button className='flex justify-start items-center py-2 px-4 gap-2
                    hover:bg-hover-gray/30
                        text-light-secondary-text dark:text-dark-secondary-text'
                    onClick={() => handleCreateClick(4)}
                >
                    {goals}
                    <span>{nav.goal}</span>
                </button>
            </div>
        </>
    )
}

export default MobileDropDown