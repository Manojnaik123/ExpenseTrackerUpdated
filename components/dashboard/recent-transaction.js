import { useCurrency } from '@/app/application/context/CurrencyContext';
import { more } from '@/lib/icons';
import React from 'react';
import { categoryIcons, iconColor } from '@/lib/icons';
import { hexToRgba } from '@/util/ui';

const RecentTransaction = ({ prop }) => {
    const { currentCurrencySymbol } = useCurrency();
    return (
        <>
            <div className='flex justify-start items-center gap-2 py-4 border-b
      border-light-border dark:border-dark-border'>
                <div className='p-3 rounded-full'
                    style={{
                        backgroundColor: hexToRgba(iconColor[prop.categoryId], 0.2),
                        color: hexToRgba(iconColor[prop.categoryId], 1)
                    }}
                >
                    {categoryIcons[prop.categoryId]}
                </div>
                <div className='grow'>
                    <div className='flex justify-between'>
                        <span className='text-light-primary-text dark:text-dark-primary-text'>
                            {prop.category}
                        </span>
                        <span className='text-sm text-warning-primary'>
                            {currentCurrencySymbol + ' ' + prop.amount}
                        </span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-sm text-light-secondary-text'>
                            {prop.subCategory}
                        </span>
                        <span className='text-sm text-light-secondary-text'>
                            {prop.date}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentTransaction