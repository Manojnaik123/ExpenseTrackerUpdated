import { cross } from '@/lib/icons'
import React from 'react'
import CustomDropDown from './custom-dropdown'
import CustomSelect from './custom-dropdown'
import CustomInput from './custom-input'
import CustomTextArea from './custom-textarea'

const AddTransaction = () => {
    return (
        <>
            <div className=' h-16 border-b flex justify-between items-center p-4 md:flex-row-reverse
        border-light-border dark:border-dark-border
        '>
                <button className='text-light-primary-text dark:text-dark-primary-text'>
                    {cross}
                </button>
                <span className='grow pl-4 text-lg md:p-0
            text-light-primary-text dark:text-dark-primary-text
            '>
                    Create Transaction
                </span>
                <button className='md:hidden text-sm
            text-light-secondary-text dark:text-dark-secondary-text'>
                    Create
                </button>
            </div>
            <div className='flex flex-col grow p-4'>
                <div className='flex flex-col md:flex md:flex-row gap-2'>
                    <div className='md:w-1/2'>
                        <CustomSelect label='Type' options={['apple', 'banana', 'apple', 'banana', 'apple', 'banana', 'xxxx', 'xxxx']} />
                    </div>
                    <div className='md:w-1/2'>
                        <CustomSelect label='Type' options={['apple', 'banana', 'apple', 'banana', 'apple', 'banana', 'xxxx', 'xxxx']} />
                    </div>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-2 mt-2'>
                    <div className='md:w-1/2'>
                        <CustomSelect label='Sub Category' options={['cc']} />
                    </div>
                    <div className='md:w-1/2'>
                        <CustomInput label='Amount' type='number' placeHolder='Enter amount'></CustomInput>
                    </div>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-2 mt-2'>
                    <CustomInput label='Date' type='date' placeHolder='Enter amount'></CustomInput>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-2 mt-2'>
                    <CustomTextArea label='Notes' placeHolder='Enter Something...' />
                </div>
                <div className='hidden md:flex justify-end items-center gap-3 pt-10 mt-auto'>
                    <button className='text-lg
                    text-blue-700
                    '>Cancel</button>
                    <button className='text-lg
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>Create</button>
                </div>
            </div>
        </>
    )
}

export default AddTransaction