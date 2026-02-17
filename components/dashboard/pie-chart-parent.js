import React from 'react';
import PieChartComp from './pie-chart'
import { useCurrency } from '@/app/application/context/CurrencyContext';
import { PIECOLORS } from './pie-chart';

const PieChartParent = ({ data, expenseOrIncome }) => {
    const { currentCurrencySymbol } = useCurrency();

    return (
        <div className='w-full flex flex-col md:flex-row h-full '>
            <div className='h-2/3 md:h-full w-full md:w-3/5'>
                <PieChartComp expenseOrIncome={expenseOrIncome} data={data} />
            </div>
            <div className='h-1/3 md:h-full w-full md:w-2/5 flex justify-center items-center'>
                <ul className='flex flex-col w-full gap-2 md:max-w-50'>

                    {data && data.map((item, index) => (
                        <li className='flex items-center justify-between gap-2 w-full px-4  
                        text-sm text-light-secondary-text dark:text-dark-secondary-text
                        '>
                            <div className='flex justify-center items-center gap-2'>
                                <button className='p-2 rounded-full'
                                    style={{ backgroundColor: PIECOLORS[index % PIECOLORS.length] }}
                                ></button>
                                <span className=''>
                                    {item.name}
                                </span>
                            </div>
                            <span className=''>
                                {currentCurrencySymbol +' '+ new Intl.NumberFormat().format(item.value)}
                            </span>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default PieChartParent