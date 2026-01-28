import { arrowEnd, arrowFirst, leftArrow, rightArrow } from '@/lib/icons'
import React from 'react'

const DataTable = ({ titleArray, tabledata }) => {
    return (
        <>
            <div className="w-full overflow-x-auto">
                <table className="min-w-[800px] w-full border-collapse border
            border-light-border dark:border-dark-border
            ">
                    <thead>
                        <tr className='border-b border-light-border dark:border-dark-border'>
                            <th className='text-left p-3
                        
                        '>
                                <input type='checkbox' />
                            </th>
                            <th className='text-left p-3 
                        text-light-secondary-text dark:text-dark-secondary-text'>
                                {titleArray[0]}
                            </th>
                            <th className='text-left p-3
                        text-light-secondary-text dark:text-dark-secondary-text
                        '>{titleArray[1]}</th>
                            <th className='text-left p-3
                        text-light-secondary-text dark:text-dark-secondary-text
                        '>{titleArray[2]}</th>
                            <th className='text-left p-3
                        text-light-secondary-text dark:text-dark-secondary-text
                        '>{titleArray[3]}</th>
                            <th className='text-left p-3
                        text-light-secondary-text dark:text-dark-secondary-text
                        '>{titleArray[4]}</th>
                        </tr>
                    </thead>
                    <tbody className='p-0'>
                        <tr className='border-b border-light-border dark:border-dark-border'>
                            <td className='text-left p-3'><input type='checkbox' /></td>
                            <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>Income</td>
                            <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>Income</td>
                            <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>Income</td>
                            <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>Income</td>
                            <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>Income</td>
                        </tr>

                        <tr>
                            <td className='p-4'></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer className='border border-t-0 flex justify-between items-center p-4
            border-light-border dark:border-dark-border
            text-light-secondary-text dark:text-dark-secondary-text
            '>
                <div className='flex gap-6'>
                    <button className='text-light-muted-text dark:text-dark-muted-text'>
                        {arrowFirst}
                    </button>
                    <button className='text-light-muted-text dark:text-dark-muted-text'>
                        {leftArrow}
                    </button>
                    <button className='text-light-primary-text dark:text-dark-primary-text'>
                        1
                    </button>
                    <button className='text-light-primary-text dark:text-dark-primary-text'>
                        2
                    </button>
                    <button className='text-light-muted-text dark:text-dark-muted-text'>
                        {rightArrow}
                    </button>
                    <button className='text-light-muted-text dark:text-dark-muted-text'>
                        {arrowEnd}
                    </button>
                </div>
                <div className='hidden md:flex text-light-muted-text dark:text-dark-muted-text'>
                    1 of 7 pages
                </div>
            </footer>
        </>
    )
}

export default DataTable