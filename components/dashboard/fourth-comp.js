import { more } from '@/lib/icons'
import React from 'react'
import ActiveGoal from './active-goal'
import SavingGraph from './savings-graph'
import CustomSelect from '../add-components/custom-dropdown'
import CustomTimeSpanSelect from '../add-components/custom-timespan-picker'

const FourthComponent = () => {
    return (
        <>
            <div className='h-full w-1/2 border rounded-md p-4 flex flex-col
               border-light-border dark:border-dark-border'>
                <div className='flex justify-between items-center pb-2'>
                    <span className='text-light-primary-text dark:text-dark-primary-text'>
                        Active Goals
                    </span>
                    <span className='text-button-blue'>
                        View more
                    </span>
                </div>
                <div className='flex-1 max-h-full overflow-y-auto scrollbar-custom pr-2'>
                    <ActiveGoal />
                    <ActiveGoal />
                    <ActiveGoal />
                    <ActiveGoal />
                    <ActiveGoal />
                    <ActiveGoal />
                    <ActiveGoal />
                </div>
            </div>
            <div className='h-full w-1/2 border rounded-md p-4 flex flex-col
                border-light-border dark:border-dark-border'>
                <div className='flex justify-between items-center'>
                    <span className='text-light-primary-text dark:text-dark-primary-text'>
                        Saving Growth
                    </span>
                    <span className='text-button-blue'>
                        View more
                    </span>
                </div>
                <div className='flex justify-end py-4'>
                    <div className=''>
                        <CustomTimeSpanSelect height={10} />
                    </div>
                </div>
                <div className='flex-1'>
                    <SavingGraph />
                </div>
            </div>
        </>
    )
}

export default FourthComponent
