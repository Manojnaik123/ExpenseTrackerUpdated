import React from 'react'
import HomeGraph from './account-overview-graph';
import CustomSelect from '../add-components/custom-dropdown';

const ThirdComponent = () => {
  return (
    <div className='h-full w-full border rounded-md p-4 flex flex-col
        border-light-border dark:border-dark-border
        bg-light-surface-background dark:bg-dark-surface-background    
        '>
      <span className='text-light-primary-text dark:text-dark-primary-text'>
        Account Overview
      </span>
      <div className='flex justify-between items-center py-4'>
        <span className='grow font-semibold text-light-secondary-text dark:text-dark-secondary-text'>Balance : $ 10,444</span>
        <CustomSelect height={12}/>
      </div>
      <div className='flex-1 w-full pt-4'>
        <HomeGraph />
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-4'>
          <div className='flex justify-center items-center gap-2'>
            <button className='p-1.5 bg-blue-300 rounded-full'></button>
            <span className='text-light-secondary-text dark:text-dark-secondary-text'>Income</span>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <button className='p-1.5 bg-purple-300 rounded-full'></button>
            <span className='text-light-secondary-text dark:text-dark-secondary-text'>Income</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdComponent