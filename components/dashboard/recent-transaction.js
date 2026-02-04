import { more } from '@/lib/icons'
import React from 'react'

const RecentTransaction = () => {
    return (
        <>
            <div className='flex justify-start items-center gap-2 py-4 border-b
      border-light-border dark:border-dark-border'>
                <div className='p-3 bg-red-400/20 text-red-400 rounded-full'>
                    {more}
                </div>
                <div className='grow'>
                    <div className='flex justify-between'>
                        <span className='text-light-primary-text dark:text-dark-primary-text'>
                            Others
                        </span>
                        <span className='text-sm text-warning-primary'>$ 250</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-sm text-light-secondary-text'>
                            Online course
                        </span>
                        <span className='text-sm text-light-secondary-text'>
                            12-2-2023
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentTransaction