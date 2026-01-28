import { car, more } from '@/lib/icons'
import React from 'react'

const BudgetCard = () => {
    return (
        <div className='flex flex-col w-full border rounded-md p-4
    border-light-border dark:border-dark-border
    bg-light-surface-background dark:bg-dark-surface-background
    '>
            <div className='flex justify-between items-center py-3
        border-b border-light-border dark:border-dark-border
        '>
                <div className='bg-green-400/30 text-green-500 p-3 rounded-md'>
                    {car}
                </div>
                <div className='flex flex-col grow pl-4'>
                    <span className='text-[18px]
                text-light-primary-text dark:text-dark-primary-text
                '>
                        Birthday expense
                    </span>
                    <span className='text-[15px]
                text-light-secondary-text dark:text-dark-muted-text
                '>My birthday</span>
                </div>
                <div>
                    {more}
                </div>
            </div>
            <div className='w-full'>
                <div className='flex justify-between items-center pt-2'>
                    <span className='text-2xl
                    text-light-primary-text dark:text-dark-primary-text
                    '>$28,000</span>
                    <span className=''>12/20/2024</span>
                </div>
                <div className='flex justify-between items-center
                text-light-muted-text dark:text-dark-muted-text
                '>
                    <span>Remaining from $30,000</span>
                    <span>Credited on</span>
                </div>
                <div className='flex justify-between items-center pt-4
                text-light-muted-text dark:text-dark-muted-text
                '>
                    <span>Amount spent</span>
                    <span>Utilization</span>
                </div>
                <div className='flex justify-between items-center py-1
                text-light-secondary-text dark:text-light-secondary-text
                '>
                    <span>$2,000</span>
                    <span>6.67%</span>
                </div>
                {/* <progress value='40' max='100' className='w-full h-3 rounded-full overflow-hidden'></progress> */}
                <div className="w-full h-3 overflow-hidden
                rounded-full border border-light-border dark:border-dark-border
                bg-light-background dark:bg-dark-background
                ">
                    <div
                        className="h-full bg-green-500 transition-all duration-300"
                        style={{ width: '60%' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default BudgetCard