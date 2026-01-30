import { car, more , categoryIcons, iconColor, cross, goalIconColor, goalCategoryIcons} from '@/lib/icons'
import React from 'react';
import { hexToRgba } from '@/util/ui';

const GoalCard = ({title, subTitle, amount, date, priority, imgId}) => {

    return (
        <div className='flex flex-col w-full border rounded-md p-4
    border-light-border dark:border-dark-border
    bg-light-surface-background dark:bg-dark-surface-background
    '>
            <div className='flex justify-between items-center py-3
        border-b border-light-border dark:border-dark-border
        '>
                <div className={`p-3 rounded-md`}
                 style={{
                        backgroundColor: hexToRgba(goalIconColor[imgId], 0.2),
                        color: hexToRgba(goalIconColor[imgId], 1)
                    }}
                >
                    {goalCategoryIcons[imgId]}
                </div>
                <div className='flex flex-col grow pl-4'>
                    <span className='text-[18px]
                text-light-primary-text dark:text-dark-primary-text
                '>
                        {title} 
                    </span>
                    <span className='text-[15px]
                text-light-secondary-text dark:text-dark-muted-text
                '>{subTitle}</span>
                </div>
                <div>
                    {more}
                </div>
            </div>
            <div className='w-full'>
                <div className='flex justify-between items-center pt-2'>
                    <span className='text-2xl
                    text-light-primary-text dark:text-dark-primary-text
                    '>${amount}</span>
                    <span className={`${priority === 'Low' ? 'bg-success-bg/40 text-success-bg' : 'bg-warning-secondary/40 text-warning-secondary'} 
                        border px-1  rounded-md text-[13px]`}>
                        {priority}
                    </span>
                </div>
                <div className='flex justify-between items-center
                text-light-muted-text dark:text-dark-muted-text
                '>
                    <span>Out of ${amount}</span>
                    <span>Priority</span>
                </div>
                <div className='flex justify-between items-center pt-4
                text-light-muted-text dark:text-dark-muted-text
                '>
                    <span>Deadline</span>
                    <span>90 days left</span>
                </div>
                <div className='flex justify-between items-center py-1
                text-light-secondary-text dark:text-light-secondary-text
                '>
                    <span>{date}</span>
                    <span>6%</span>
                </div>
                {/* <progress value='40' max='100' className='w-full h-3 rounded-full overflow-hidden'></progress> */}
                <div className="w-full h-3 overflow-hidden
                rounded-full border border-light-border dark:border-dark-border
                bg-light-background dark:bg-dark-background
                ">
                    <div
                        className="h-full bg-green-500 transition-all duration-300"
                        style={{ width: `${60}%` }}
                    />
                </div>
            </div>
        </div>
    )
}

export default GoalCard