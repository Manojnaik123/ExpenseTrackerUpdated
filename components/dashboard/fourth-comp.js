import { more } from '@/lib/icons'
import React, { useState } from 'react'
import ActiveGoal from './active-goal'
import SavingGraph from './savings-graph'
import CustomSelect from '../add-components/custom-dropdown'
import CustomTimeSpanSelect from '../add-components/custom-timespan-picker'
import AddGoal from '../add-components/add-goal'
import { useLanguage } from '@/app/application/context/LanguageContext';
import { savingsGrowthDropDownValues } from '@/data';

const FourthComponent = ({ goals, savings }) => {
    const [timeSpanId, setTimeSpanId] = useState(1);

    const { nav, lan } = useLanguage();

    function handleSelect(e){
        setTimeSpanId(e.key);
    }

    return (
        <>
            <div className='h-full md:w-1/2 border rounded-md p-4 flex flex-col
               border-light-border dark:border-dark-border'>
                <div className='flex justify-between items-center pb-2'>
                    <span className='text-light-primary-text dark:text-dark-primary-text'>
                        {nav.activeGoals}
                    </span>
                    <span className='text-button-blue'>
                        {nav.viewMore}
                    </span>
                </div>
                <div className='flex-1 max-h-full overflow-y-auto scrollbar-custom pr-2'>
                    {goals?.map(item => (
                        <ActiveGoal prop={item} />
                    ))}
                </div>
            </div>

            {/* x0x0x0x */}
            <div className='h-full md:w-1/2 border rounded-md p-4 flex flex-col
               border-light-border dark:border-dark-border'>
                <div className='flex justify-between items-center'>
                    <span className='text-light-primary-text dark:text-dark-primary-text'>
                        {nav.savingGrowth}
                    </span>
                    <span className='text-button-blue'>
                        {nav.viewMore}
                    </span>
                </div>
                <div className='flex justify-end py-4'>
                    <div className=''>
                        <CustomTimeSpanSelect selectedKey={timeSpanId} height={10} options={savingsGrowthDropDownValues[lan]} onSelect={handleSelect} />
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
