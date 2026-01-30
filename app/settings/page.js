'use client';

import { rightArrow } from '@/lib/icons';
import { useLanguage } from '../context/LanguageContext';


import React from 'react';
import Link from 'next/link';

const SettingsPage = () => {
    const { nav } = useLanguage();

    return (
        <div className='h-full w-full p-4
    bg-light-background dark:bg-dark-background
    '>
            <div className='border rounded-md h-full w- p-4
        border-light-border dark:border-dark-border
        bg-light-surface-background dark:bg-dark-surface-background
        '>
                <div className='flex justify-between items-center border-b
            border-light-border dark:border-dark-border
            '>
                    <div className='flex gap-3 justify-start items-center py-4 '>
                        <span className='bg-primary-accent p-2 md:p-4 rounded-full'>
                            MN
                        </span>
                        <spam className=' text-[13px] md:text-[18px] font-semibold
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>
                            Manoj Naik
                        </spam>
                    </div>
                    <div className='flex gap-3'>
                        <button className='px-4 py-1 border rounded-full text-[13px] md:text-[18px]
                        border-light-border dark:border-dark-border
                        text-light-secondary-text dark:text-dark-secondary-text
                    '>{nav.export}</button>
                        <button className='px-4 py-1 border rounded-full text-[13px] md:text-[18px]
                        border-light-border dark:border-dark-border
                        text-light-secondary-text dark:text-dark-secondary-text
                    '>{nav.reset}</button>
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='border rounded-md
                border-light-border dark:border-dark-border
                bg-light-background dark:bg-dark-background
                '>
                        {/* Profile */}
                        <div className='px-4'>
                            <div className='flex justify-between items-center py-4 border-b 
                  border-light-border dark:border-dark-border
                    '>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[13px] md:text-[18px]
                            text-light-secondary-text dark:text-dark-secondary-text
                            '>{nav.profile}</span>
                                    <span className='text-[12px] md:text-[15px]
                            text-light-muted-text dark:text-dark-muted-text
                            '>{nav.name}, {nav.gender}</span>
                                </div>
                                <div>
                                    <span className='text-light-secondary-text dark:text-dark-secondary-text'>
                                        {rightArrow}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Preferences */}
                     <Link href='/settings/editpersonalization'>
                        <div className='px-4'>
                            <div className='flex justify-between items-center py-4 border-b 
                  border-light-border dark:border-dark-border
                    '>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[13px] md:text-[18px]
                            text-light-secondary-text dark:text-dark-secondary-text
                            '>{nav.preference}</span>
                                    <span className='text-[12px] md:text-[15px]
                            text-light-muted-text dark:text-dark-muted-text
                            '>{nav.preferredLanguage}, {nav.currency}, {nav.timeZone}</span>
                                </div>
                                <div>
                                    <div className='text-light-secondary-text dark:text-dark-secondary-text'>
                                        {rightArrow}
                                    </div>
                                </div>
                            </div>
                        </div>
                     </Link>

                        {/* Appearance */}
                        <Link href='/settings/editappearance'>
                        <div className='px-4'>
                            <div className='flex justify-between items-center py-4 border-b 
                  border-light-border dark:border-dark-border
                    '>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[13px] md:text-[18px]
                            text-light-secondary-text dark:text-dark-secondary-text
                            '>{nav.appearance}</span>
                                    <span className='text-[12px] md:text-[15px]
                            text-light-muted-text dark:text-dark-muted-text
                            '>{` ${nav.lightDarkThemes} (remove the border of the below last child bottom)`}</span>
                                </div>
                                <div>
                                    <Link href='/settings/editappearance' className='text-light-secondary-text dark:text-dark-secondary-text'>
                                        {rightArrow}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default SettingsPage