'use client';

import { more } from '@/lib/icons'
import React, { useState } from 'react'
import RecentTransaction from './recent-transaction'
import PieChartComp from './pie-chart'
import CustomSelect from '../add-components/custom-dropdown'
import { useLanguage } from '@/app/application/context/LanguageContext';

const SecondComponent = ({ transactions }) => {

  const [activeButton, setActiveButton] = useState(1);
  const { nav } = useLanguage();

  return (
    <div className='w-full h-auto md:h-full pt-0 flex flex-col md:flex-row gap-4'>

      {/* first  */}
      <div className='md:w-2/3 border rounded-md p-4 flex flex-col
        border-light-border dark:border-dark-border
        bg-light-surface-background dark:bg-dark-surface-background'>
        <div className='flex justify-between items-center'>
          <span className='text-light-primary-text dark:text-dark-primary-text'>
            {nav.financialOverview}
          </span>
        </div>
        <div className='flex justify-between items-center py-2'>
          <div className='flex grow'>
            <button className='border px-6 rounded-l-full py-2 
            border-light-border dark:border-dark-border
            text-light-secondary-text dark:text-dark-secondary-text'>
              {nav.income}
            </button>
            <button className='border px-6 rounded-r-full py-2
            border-light-border dark:border-dark-border
            text-light-secondary-text dark:text-dark-secondary-text'>
              {nav.income}
            </button>
          </div>
          {/* here added hiddedn */}

          <div className='hidden'>
            <CustomSelect height={10} />
          </div>
        </div>
        <div className='h-full w-full flex-1 flex items-center justify-center'>
          <div className='h-[300px]  md:h-[75%] md:w-7/10  flex justify-center items-center'>
            <PieChartComp />
          </div>
          {/* here added hiddedn */}
          <div className=' hidden w-3/10 h-[75%] flex flex-col justify-center items-start  '>
            <ul className='w-full max-w-52 text-light-secondary-text dark:text-dark-secondary-text'>
              <li className='flex justify-between items-center gap-2 '>
                <div className='flex justify-center items-center gap-2 '>
                  <button className='p-2 bg-red-500 rounded-full'></button>
                  <span>Housing</span>
                </div>
                <span>$ 300</span>
              </li>

              <li className='flex justify-between items-center gap-2 '>
                <div className='flex justify-center items-center gap-2 '>
                  <button className='p-2 bg-yellow-500 rounded-full'></button>
                  <span>Education</span>
                </div>
                <span>$ 250</span>
              </li>

              <li className='flex justify-between items-center gap-2 '>
                <div className='flex justify-center items-center gap-2 '>
                  <button className='p-2 bg-green-500 rounded-full'></button>
                  <span>Social Events</span>
                </div>
                <span>$ 100</span>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* second  */}
      <div className='md:w-1/3 h-full border rounded-md p-4 flex flex-col
        border-light-border dark:border-dark-border
        bg-light-surface-background dark:bg-dark-surface-background'>
        <div className='flex justify-between items-center pb-2'>
          <span className='text-light-primary-text dark:text-dark-primary-text'>
            {nav.recentTransaction}
          </span>
          <span className='text-button-blue'>
            {nav.viewMore}
          </span>
        </div>
        <div className='flex-1 max-h-full overflow-y-auto scrollbar-custom pr-2'>
          {transactions?.map(item => (
            <RecentTransaction prop={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SecondComponent

