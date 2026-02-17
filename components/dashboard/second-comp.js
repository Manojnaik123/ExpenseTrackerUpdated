'use client';

import { expense, expenseSmall, income, incomeSmall, more } from '@/lib/icons';
import React, { useState } from 'react';
import RecentTransaction from './recent-transaction';
import { useLanguage } from '@/app/application/context/LanguageContext';
import CustomTimeSpanSelect from '../add-components/custom-timespan-picker';
import PieChartParent from './pie-chart-parent';
import { financialOverviewDropDOwnValues } from '@/data';
import MobileCalenderCustom from '../mobile-calender-custom';
import Link from 'next/link';


const filterTransactionsByTimeSpan = (transactions = [], timeSpanKey) => {
  const now = new Date();

  return transactions.filter(transaction => {
    const txnDate = new Date(transaction.date);

    switch (timeSpanKey) {
      case 1: // This Month
        return txnDate.getMonth() === now.getMonth() && txnDate.getFullYear() === now.getFullYear();

      case 2: // This Year
        return txnDate.getFullYear() === now.getFullYear();

      case 3: // Last Year
        return txnDate.getFullYear() === now.getFullYear() - 1;

      case 4: // Last 6 Months
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(now.getMonth() - 5); // include current month
        return txnDate >= sixMonthsAgo && txnDate <= now;

      default:
        return true; // fallback: return all
    }
  });
};


const SecondComponent = ({ transactions }) => {

  const [activeButton, setActiveButton] = useState(1);
  const [timeSpanId, setTimeSpanId] = useState(1);
  const { nav, lan } = useLanguage();

  function handleButtonActive(id) {
    setActiveButton(id);
  }

  const timeSpanBasedData = filterTransactionsByTimeSpan(transactions, timeSpanId);

  const filteredData = (timeSpanBasedData || []).filter(item => item.typeId == activeButton);

  const finalData = Object.values(
    (filteredData || []).reduce((acc, curr) => {
      const category = curr?.category?.name || curr?.category;
      if (!category) return acc;

      acc[category] = {
        name: category,
        value: (acc[category]?.value || 0) + (curr.amount || 0)
      };

      return acc;
    }, {})
  )
    .sort((a, b) => b.value - a.value)
    .reduce((acc, curr, index) => {
      if (index < 2) {
        acc.push(curr);
      } else {
        acc[2] = acc[2] || { name: "Others", value: 0 };
        acc[2].value += curr.value;
      }
      return acc;
    }, []);

  function handleTimeSpanSelect(e) {
    setTimeSpanId(e);
  }

  function handleSelectWeb(e) {
    setTimeSpanId(e.key);
  }

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
          {/* web button */}
          <div className='grow hidden md:flex'>
            <button className={`border px-6 rounded-l-full py-2 
                border-light-border dark:border-dark-border
                ${activeButton == 1 ? 'bg-primary-accent hover:bg-accent-hover text-white' : 'text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray/30'}  `}
              onClick={() => handleButtonActive(1)}>
              {nav.income}
            </button>
            <button className={`border px-6 rounded-r-full py-2 
                border-light-border dark:border-dark-border
                ${activeButton == 2 ? 'bg-primary-accent hover:bg-accent-hover text-white' : 'text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray/30'}`}
              onClick={() => handleButtonActive(2)}>
              {nav.expense}
            </button>
          </div>
          {/* mobile button */}
          <div className='grow md:hidden'>
            <button className={`border px-6 rounded-l-full py-2
                border-light-border dark:border-dark-border
                ${activeButton == 1 ? 'bg-primary-accent hover:bg-accent-hover text-white' : 'text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray/30'}  `}
              onClick={() => handleButtonActive(1)}>
              {incomeSmall}
            </button>
            <button className={`border px-6 rounded-r-full py-2  
                border-light-border dark:border-dark-border
                ${activeButton == 2 ? 'bg-primary-accent hover:bg-accent-hover text-white' : 'text-light-secondary-text dark:text-dark-secondary-text hover:bg-hover-gray/30'}`}
              onClick={() => handleButtonActive(2)}>
              {expenseSmall}
            </button>
          </div>
          <div className='flex md:hidden'>
            <MobileCalenderCustom options={financialOverviewDropDOwnValues[lan]} handleOnSelectClick={handleTimeSpanSelect} />
          </div>
          <div className='hidden md:flex'>
            <CustomTimeSpanSelect key={timeSpanId} height={10} onSelect={handleSelectWeb} selectedKey={timeSpanId} options={financialOverviewDropDOwnValues[lan]} />
          </div>
        </div>
        <div className='w-full h-[450px] md:h-full'>
          {finalData && finalData.length > 0 ? (
            <PieChartParent
              data={finalData}
              expenseOrIncome={activeButton}
            />
          ) : (
            <div className='w-full h-full flex justify-center items-center'>
              <span className='text-light-muted-text dark:text-dark-muted-text text-xs'>{nav.noRecords}</span>
            </div>
          )}
        </div>
      </div>

      {/* second  */}
      <div className='md:w-1/3 h-[60lvh] md:h-full border rounded-md p-4 flex flex-col
        border-light-border dark:border-dark-border
        bg-light-surface-background dark:bg-dark-surface-background'>
        <div className='flex justify-between items-center pb-2'>
          <span className='text-light-primary-text dark:text-dark-primary-text'>
            {nav.recentTransaction}
          </span>
          <Link href={'/application/transactions'} className='text-button-blue'>
            {nav.viewMore}
          </Link>
        </div>
        <div className='flex-1 max-h-full overflow-y-auto scrollbar-custom pr-2'>
          {transactions && transactions.length > 0 ? (
            transactions.map((item) => (
              <RecentTransaction key={item.id} prop={item} />
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-gray-500">
              <span className='text-light-muted-text dark:text-dark-muted-text text-xs'>{nav.noRecords}</span>

            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SecondComponent

