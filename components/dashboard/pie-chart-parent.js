import React from 'react';
import PieChartComp from './pie-chart'

const PieChartParent = ({transactions}) => {
    console.log(transactions);
    
    return (
        <div className='w-full flex flex-col md:flex-row h-full '>
            <div className='h-2/3 md:h-full w-full md:w-2/3'>
                <PieChartComp />
            </div>
            <div className='h-1/3 md:h-full w-full md:w-1/3 flex justify-center items-center'>
                <ul className='flex flex-col w-full gap-2 md:max-w-44'>
                    <li className='flex items-center justify-between gap-2 w-full px-4  
                        text-sm text-light-secondary-text dark:text-dark-secondary-text
                        '>
                       <div className='flex justify-center items-center gap-2'>
                         <button className='bg-red-400 p-2 rounded-full'></button>
                        <span className=''>
                            Social Events
                        </span>
                       </div>
                       <span>
                        $300
                       </span>
                    </li>
                    <li className='flex items-center justify-between gap-2 w-full px-4  
                        text-sm text-light-secondary-text dark:text-dark-secondary-text
                        '>
                       <div className='flex justify-center items-center gap-2'>
                         <button className='bg-red-400 p-2 rounded-full'></button>
                        <span className=''>
                            Social Events
                        </span>
                       </div>
                       <span>
                        $300
                       </span>
                    </li>
                    <li className='flex items-center justify-between gap-2 w-full px-4 
                        text-sm text-light-secondary-text dark:text-dark-secondary-text
                        '>
                       <div className='flex justify-center items-center gap-2'>
                         <button className='bg-red-400 p-2 rounded-full'></button>
                        <span className=''>
                            Social Events
                        </span>
                       </div>
                       <span>
                        $300
                       </span>
                    </li>
                    
                     
                </ul>
            </div>
        </div>
    )
}

export default PieChartParent