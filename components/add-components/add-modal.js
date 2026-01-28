'use client';

import { cross } from '@/lib/icons'
import React from 'react'
import AddTransaction from './add-transaction'

import { useEffect, useRef } from 'react';

const AddModal = () => {
    const dialog = useRef();

    useEffect(() => {
        if (dialog.current) {
            dialog.current.showModal();
        }
    }, [])

    return (
        <>

            <div
                className="md:fixed md:inset-0 md:bg-black/10 md:backdrop-blur-sm md:z-40"
            // close when clicking overlay
            ></div>
            <dialog ref={dialog} className='fixed z-50 flex flex-col h-full w-full md:h-[60lvh] md:w-[40%] lg:w-[35%] xl:w-[25%] m-auto rounded-lg
    bg-light-background dark:bg-dark-background md:mt-44 border 
    border-light-border dark:border-dark-border
    '>
                <AddTransaction />
            </dialog>
        </>

    )
}

export default AddModal