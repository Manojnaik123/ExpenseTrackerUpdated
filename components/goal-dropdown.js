'use client';

import { useLanguage } from '@/app/application/context/LanguageContext';
import { deleteIcon, edit, plus } from '@/lib/icons'
import React from 'react'

const GoalDropDown = ({id, toggleEditModal, toggleModal, deleteHandler}) => {

    const {nav} = useLanguage();

    function handleDeletion(id){
        toggleModal();
        deleteHandler(id);
    }

  return (
    <>
    <div className='absolute right-2 top-17 flex flex-col py-2 gap-2 rounded-sm
     bg-light-background dark:bg-dark-background
     border border-light-border dark:border-dark-border
     '>    
        <button className='flex justify-start items-center gap-2 px-4 py-2
        text-light-secondary-text dark:text-dark-secondary-text
        hover:bg-hover-gray/30'
        onClick={() => toggleEditModal(id, true)}
        > 
            {plus} 
            {nav.addFund}
        </button>

        <button className='flex justify-start items-center gap-2 px-4 py-2
        text-light-secondary-text dark:text-dark-secondary-text
        hover:bg-hover-gray/30'
        onClick={() => toggleEditModal(id, false)}
        > 
            {edit} 
            {nav.edit}
        </button>

        <button className='flex justify-start items-center gap-2 px-4 py-2
        text-light-secondary-text dark:text-dark-secondary-text
        hover:bg-hover-gray/30'
        onClick={()=> handleDeletion(id)}
        > 
            {deleteIcon} 
            {nav.delete}
        </button>
    </div>
    </>
    
  )
}

export default GoalDropDown