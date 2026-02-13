import React, { useState } from 'react'
import HomeGraph from './account-overview-graph';
import CustomSelect from '../add-components/custom-dropdown';
import { useLanguage } from '@/app/application/context/LanguageContext';
import { useCurrency } from '@/app/application/context/CurrencyContext';
import { financialOverviewDropDOwnValues } from '@/data';
import CustomTimeSpanSelect from '../add-components/custom-timespan-picker';

export const generateTransactionsChartData = (transactions = [], timeSpanId) => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const getAmount = (t) => Number(t.amount) || 0;

  // =====================================
  // 🔹 1 → THIS MONTH (Daily)
  // =====================================
  if (timeSpanId === 1) {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const chartData = Array.from({ length: daysInMonth }, (_, i) => ({
      xAxisVal: i + 1,
      value: 0,
    }));

    transactions.forEach((t) => {
      if (!t.date) return;

      const [year, month, day] = t.date.split("-").map(Number);

      if (year === currentYear && month - 1 === currentMonth) {
        chartData[day - 1].value += getAmount(t);
      }
    });

    return chartData;
  }

  // =====================================
  // 🔹 2 → THIS YEAR (Monthly)
  // =====================================
  if (timeSpanId === 2) {
    const chartData = Array.from({ length: 12 }, (_, i) => ({
      xAxisVal: new Date(currentYear, i).toLocaleString("default", {
        month: "short",
      }),
      value: 0,
    }));

    transactions.forEach((t) => {
      if (!t.date) return;

      const [year, month] = t.date.split("-").map(Number);

      if (year === currentYear) {
        chartData[month - 1].value += getAmount(t);
      }
    });

    return chartData;
  }

  // =====================================
  // 🔹 3 → LAST YEAR (Monthly)
  // =====================================
  if (timeSpanId === 3) {
    const lastYear = currentYear - 1;

    const chartData = Array.from({ length: 12 }, (_, i) => ({
      xAxisVal: new Date(lastYear, i).toLocaleString("default", {
        month: "short",
      }),
      value: 0,
    }));

    transactions.forEach((t) => {
      if (!t.date) return;

      const [year, month] = t.date.split("-").map(Number);

      if (year === lastYear) {
        chartData[month - 1].value += getAmount(t);
      }
    });

    return chartData;
  }

  // =====================================
  // 🔹 4 → LAST 6 MONTHS (Monthly)
  // =====================================
  if (timeSpanId === 4) {
    const chartData = [];

    for (let i = 5; i >= 0; i--) {
      const date = new Date(currentYear, currentMonth - i, 1);
      const year = date.getFullYear();
      const month = date.getMonth();

      const monthLabel = date.toLocaleString("default", {
        month: "short",
      });

      let total = 0;

      transactions.forEach((t) => {
        if (!t.date) return;

        const [tYear, tMonth] = t.date.split("-").map(Number);

        if (tYear === year && tMonth - 1 === month) {
          total += getAmount(t);
        }
      });

      chartData.push({
        xAxisVal: monthLabel,
        value: total,
      });
    }

    return chartData;
  }

  return [];
};

const ThirdComponent = ({ transactions }) => {

  const [timeSpanId, setTimeSpanId] = useState(1);

  const { nav, lan } = useLanguage();
  const { currentCurrencySymbol } = useCurrency();

  function handleSelect(e){
    setTimeSpanId(e.key);
  }
  const filteredIncome = generateTransactionsChartData(transactions?.filter(item => item.typeId == 1), timeSpanId);
  const filteredExpense = generateTransactionsChartData(transactions?.filter(item => item.typeId == 2), timeSpanId);
  
  return (
    <div className='h-full w-full border rounded-md p-4 flex flex-col
        border-light-border dark:border-dark-border
        bg-light-surface-background dark:bg-dark-surface-background    
        '>
      <span className='text-light-primary-text dark:text-dark-primary-text'>
        {nav.accountOverview}
      </span>
      <div className='flex justify-between items-center py-4'>
        <span className='grow font-semibold text-light-secondary-text dark:text-dark-secondary-text'>
          {nav.balance} : {currentCurrencySymbol} 10,444
        </span>
        <div>
          <CustomTimeSpanSelect height={10} onSelect={handleSelect} selectedKey={timeSpanId} options={financialOverviewDropDOwnValues[lan]} />
        </div>
      </div>
      <div className='flex-1 w-full pt-4'>
        <HomeGraph income={filteredIncome} expense={filteredExpense}/>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-4'>
          <div className='flex justify-center items-center gap-2'>
            <button className='p-1.5 bg-blue-300 rounded-full'></button>
            <span className='text-light-secondary-text dark:text-dark-secondary-text'>
              {nav.income}
            </span>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <button className='p-1.5 bg-purple-300 rounded-full'></button>
            <span className='text-light-secondary-text dark:text-dark-secondary-text'>
              {nav.expense}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdComponent