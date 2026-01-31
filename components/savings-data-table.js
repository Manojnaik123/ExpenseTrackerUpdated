'use client';

import { arrowEnd, arrowFirst, cross, leftArrow, rightArrow, xxx } from '@/lib/icons'
import React, { useState } from 'react';
import { downArrow } from '@/lib/icons';
import { useLanguage } from '@/app/application/context/LanguageContext';


const SavingsDataTable = ({ titleArray, tableData }) => {
    const [data, setData] = useState({
        allSelect: false,
        data: tableData
    });

    const [buttonActive, setButtonActive] = useState(1);

    const { nav } = useLanguage();

    function handleinputclick(id) {
        setData(prev => {
            const newData = {
                allSelect: prev.allSelect,
                data: []
            };

            for (let x of prev.data) {
                newData.data.push({
                    isSelected: x.id === id ? !x.isSelected : x.isSelected,
                    id: x.id,
                    first: x.first,
                    second: x.second,
                    third: x.third,
                    fourth: x.fourth,
                    fifth: x.fifth,
                    sixth: x.sixth,
                    hidden: x.hidden,
                })
            }
            console.log(newData);
            return newData;
        })
    }

    console.log('after hand');


    function handleAllSelect() {
        setData(prev => {
            const newData = {
                allSelect: !prev.allSelect,
                data: [],
            };

            for (let x of prev.data) {
                newData.data.push({
                    isSelected: !prev.allSelect ? true : false,
                    id: x.id,
                    first: x.first,
                    second: x.second,
                    third: x.third,
                    fourth: x.fourth,
                    fifth: x.fifth,
                    sixth: x.sixth,
                    hidden: x.hidden,
                })
            }
            console.log(newData);
            return newData;
        })
    }

    function handleTypeSelection(identifier) {
        if (identifier === 'all') {
            setButtonActive(1);
            setData(prev => {
                const newData = {
                    allSelect: prev.allSelect,
                    data: []
                };

                for (let x of prev.data) {
                    if (true) {
                        newData.data.push({
                            isSelected: x.isSelected,
                            id: x.id,
                            first: x.first,
                            second: x.second,
                            third: x.third,
                            fourth: x.fourth,
                            fifth: x.fifth,
                            sixth: x.sixth,
                            hidden: false
                        })
                    }

                }
                console.log(newData);
                return newData;
            })
        } else if (identifier === 'Withdraw') {
            setButtonActive(2);
            setData(prev => {
                const newData = {
                    allSelect: prev.allSelect,
                    data: []
                };

                for (let x of prev.data) {
                    if (true) {
                        newData.data.push({
                            isSelected: x.isSelected,
                            id: x.id,
                            first: x.first,
                            second: x.second,
                            third: x.third,
                            fourth: x.fourth,
                            fifth: x.fifth,
                            sixth: x.sixth,
                            hidden: x.fourth !== 'Withdraw'
                        })
                    }

                }
                console.log(newData);
                return newData;
            })
        } else if (identifier === 'Deposit') {
            setButtonActive(3);
            setData(prev => {
                const newData = {
                    allSelect: prev.allSelect,
                    data: []
                };

                for (let x of prev.data) {
                    if (true) {
                        newData.data.push({
                            isSelected: x.isSelected,
                            id: x.id,
                            first: x.first,
                            second: x.second,
                            third: x.third,
                            fourth: x.fourth,
                            fifth: x.fifth,
                            sixth: x.sixth,
                            hidden: x.fourth !== 'Deposit'
                        })
                    }
                }
                console.log(newData);
                return newData;
            })
        }
    }

    return (
        <>
            <div className="w-full ">

                {/* edit box */}
                {data.data.some(item => item.isSelected === true) &&
                    <div className='w-full rounded-full flex justify-start items-center px-4 gap-2
                bg-light-muted-text/15 dark:bg-light-surface-background/5
                text-light-secondary-text dark:text-dark-secondary-text
                text-[13px] border
                border-light-muted-text/15 dark:border-dark-surface-background/5
                '>
                        <button className='py-2'>{cross}</button>
                        <span> {data.data.filter(i => i.isSelected === true && i.hidden === false).length} Selected </span>
                        <button>{`[edit]`}</button>
                        <button>{`[del]`}</button>
                    </div>
                }

                {/* button box all income epense */}
                {!data.data.some(item => item.isSelected === true) &&
                    <div className=' flex flex-col md:flex md:flex-row justify-between  gap-4'>
                        <div className='flex grow max-w-[340px]'>
                            <button className={`px-4 py-2 border rounded-l-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                         hover:bg-hover-gray/30
                         ${buttonActive === 1? 'bg-accent-hover text-white/70 hover:bg-accent-hover hover:dark:bg-accent-hover':
                          undefined}
                         `}
                                onClick={() => handleTypeSelection('all')}
                            >{nav.all}</button>
                            <button className= {`
                            px-4 py-2 border-y w-1/3
                        border-light-border dark:border-dark-border
                        text-light-secondary-text dark:text-dark-secondary-text
                        hover:bg-hover-gray/30
                        ${buttonActive === 2? 'bg-accent-hover text-white': undefined}
                            `}
                                onClick={() => handleTypeSelection('Income')}
                            >{nav.income}</button>

                            <button className={`
                            px-4 py-2 border rounded-r-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                         hover:bg-hover-gray/30
                         ${buttonActive === 3? 'bg-accent-hover text-white': undefined}
                            `}
                                onClick={() => handleTypeSelection('Expense')}
                            >
                                {nav.expense}
                            </button>
                        </div>
                        <div className='flex gap-3 grow justify-between md:justify-end'>
                            <span className='px-4 py-2 border rounded-md flex gap-32
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                        '>all {downArrow}</span>
                            <button className='px-4 py-2 border rounded-full
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                         hover:bg-hover-gray/30
                        '>{nav.export}</button>
                        </div>
                    </div>
                }

                <div className='overflow-x-auto'>
                    <table className="min-w-[800px] w-full border-collapse border mt-4
            border-light-border dark:border-dark-border
            ">
                        <thead>
                            <tr className='border-b border-light-border dark:border-dark-border'>
                                <th className='text-left p-3
                        '>
                                    <button className={`border-3 rounded-sm p-2 h-5 w-5
                                    flex justify-center items-center
                                    border-light-border dark:border-dark-border
                                    bg-light-background dark:bg-dark-background
                                    text-light-secondary-text dark:text-dark-secondary-text
                                    `}
                                        onClick={() => handleAllSelect()}
                                    >
                                        {data.allSelect ? data.data.some(item => item.isSelected === false) ? '-' : 'x' : ''}
                                    </button>
                                </th>
                                <th className='text-left p-3 
                        text-light-secondary-text dark:text-dark-secondary-text'>
                                    {titleArray[0]}
                                </th>
                                <th className='text-left p-3
                        text-light-secondary-text dark:text-dark-secondary-text
                        '>{titleArray[1]}</th>
                                <th className='text-left p-3
                        text-light-secondary-text dark:text-dark-secondary-text
                        '>{titleArray[2]}</th>
                                <th className='text-left p-3
                        text-light-secondary-text dark:text-dark-secondary-text
                        '>{titleArray[3]}</th>
                                <th className='text-left p-3
                        text-light-secondary-text dark:text-dark-secondary-text
                        '>{titleArray[4]}</th>
                            </tr>
                        </thead>
                        <tbody className='p-0  text-[13px] md:text-[18px]'>
                            {data.data && data.data.filter(item => item.hidden === false).map((item) => (
                                <tr className='border-b border-light-border dark:border-dark-border'>
                                    <td className='text-left p-3'>
                                        <button className={`border-3 rounded-sm p-2 h-5 w-5
                                    flex justify-center items-center
                                    border-light-border dark:border-dark-border
                                    bg-light-background dark:bg-dark-background
                                    text-light-secondary-text dark:text-dark-secondary-text
                                    `}
                                            onClick={() => handleinputclick(item.id)}
                                        >
                                            {item.isSelected ? 'x' : ''}
                                        </button>
                                        {/* <input type='checkbox' onChange={()=> handleinputclick(item.id)} checked={item.isSelected ? item.isSelected: undefined}/> checked={true} */}
                                    </td>
                                    <td className='p-6
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>{item.first}</td>
                                    <td className='p-3 
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>
                                        
                                                {item.second}
                                            
                                    </td>
                                    <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>
                                        <span className={`${item.third === 'Deposit' ? 'bg-success-bg/40 text-success-bg' : 'bg-warning-secondary/40 text-warning-secondary'} border px-2  rounded-md`}>
                                            {item.third}
                                        </span>
                                    </td>
                                    <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>{item.fourth}</td>
                                    <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>{item.fifth}</td>
                                </tr>
                            ))}

                            <tr>
                                <td className='p-4'></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <footer className='border border-t-0 flex justify-between items-center p-4
            border-light-border dark:border-dark-border
            text-light-secondary-text dark:text-dark-secondary-text
            '>
                <div className='flex gap-6'>
                    <button className='text-light-muted-text dark:text-dark-muted-text'>
                        {arrowFirst}
                    </button>
                    <button className='text-light-muted-text dark:text-dark-muted-text'>
                        {leftArrow}
                    </button>
                    <button className='text-light-primary-text dark:text-dark-primary-text'>
                        1
                    </button>
                    <button className='text-light-primary-text dark:text-dark-primary-text'>
                        2
                    </button>
                    <button className='text-light-muted-text dark:text-dark-muted-text'>
                        {rightArrow}
                    </button>
                    <button className='text-light-muted-text dark:text-dark-muted-text'>
                        {arrowEnd}
                    </button>
                </div>
                <div className='hidden md:flex text-light-muted-text dark:text-dark-muted-text'>
                    1 of 7 pages
                </div>
            </footer>
        </>
    )
}

export default SavingsDataTable