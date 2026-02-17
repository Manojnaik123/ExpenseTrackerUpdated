import { more } from '@/lib/icons'
import React, { useState } from 'react'
import ActiveGoal from './active-goal'
import SavingGraph from './savings-graph'
import CustomSelect from '../add-components/custom-dropdown'
import CustomTimeSpanSelect from '../add-components/custom-timespan-picker'
import AddGoal from '../add-components/add-goal'
import { useLanguage } from '@/app/application/context/LanguageContext';
import { savingsGrowthDropDownValues } from '@/data';
import Link from 'next/link'
import MobileCalenderCustom from '../mobile-calender-custom'

const FourthComponent = ({ goals, savings }) => {
    const [timeSpanId, setTimeSpanId] = useState(1);

    const { nav, lan } = useLanguage();

    function handleSelect(e) {
        setTimeSpanId(e.key);
    }


    function handleSelectMob(e){
        setTimeSpanId(e);
    }

    return (
        <>
            <div className='h-[60lvh] md:h-full md:w-1/2 border rounded-md p-4 flex flex-col
               border-light-border dark:border-dark-border'>
                <div className='flex justify-between items-center pb-2'>
                    <span className='text-light-primary-text dark:text-dark-primary-text'>
                        {nav.activeGoals}
                    </span>
                    <Link href={'/application/goals'} className='text-button-blue'>
                        {nav.viewMore}
                    </Link>
                </div>
                <div className='flex-1 max-h-full overflow-y-auto scrollbar-custom pr-2'>
                    {goals && goals.length > 0 ? (
                        goals?.map(item => (
                            <ActiveGoal prop={item} />
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-full text-sm text-gray-500">
                            <span className='text-light-muted-text dark:text-dark-muted-text text-xs'>{nav.noRecords}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* x0x0x0x */}
            <div className='h-full md:w-1/2 border rounded-md p-4 flex flex-col
               border-light-border dark:border-dark-border'>
                <div className='flex justify-between items-center'>
                    <span className='text-light-primary-text dark:text-dark-primary-text'>
                        {nav.savingGrowth}
                    </span>
                    <Link href={'/application/savings'} className='text-button-blue'>
                        {nav.viewMore}
                    </Link>
                </div>
                <div className='flex justify-end py-4'>
                    <div className='hidden md:flex'>
                        <CustomTimeSpanSelect key={timeSpanId} selectedKey={timeSpanId} height={10} options={savingsGrowthDropDownValues[lan]} onSelect={handleSelect} />
                    </div>
                    <div className='flex md:hidden'>
                        <MobileCalenderCustom options={savingsGrowthDropDownValues[lan]} handleOnSelectClick={handleSelectMob} />
                    </div>
                </div>
                <div className='flex-1 min-h-auto'>
                    <SavingGraph values={savings} timeSpanId={timeSpanId} />
                </div>
            </div>
        </>
    )
}

export default FourthComponent
