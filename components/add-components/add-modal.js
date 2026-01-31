'use client';

import { cross } from '@/lib/icons'
import React from 'react'
import AddTransaction from './add-transaction'

import { useEffect, useRef } from 'react';
import AddSaving from './add-saving';
import AddBudget from './add-budget';
import AddGoal from './add-goal';

const AddModal = ({ toggleModal, modalId, id }) => {
    const dialog = useRef();

    useEffect(() => {
        if (dialog.current) {
            dialog.current.showModal();
        }
    }, [])

    return (
        <>
            <div
                className="md:fixed md:inset-0 md:bg-black/10 md:backdrop-blur-[2px] md:z-40"
            // close when clicking overlay
            ></div>
            <dialog ref={dialog} className='fixed z-50 flex flex-col h-full w-full md:h-[80lvh] md:w-[600px] m-auto rounded-lg
    bg-light-background dark:bg-dark-background border 
    border-light-border dark:border-dark-border
    '>
                {modalId === 1 && <AddTransaction toggleModal={toggleModal} id={id}/>}
                {modalId === 2 && <AddBudget toggleModal={toggleModal}/> }
                {modalId === 3 && <AddSaving toggleModal={toggleModal}/>}
                {modalId === 4 && <AddGoal toggleModal={toggleModal}/>}
            </dialog>
        </>

    )
}

export default AddModal