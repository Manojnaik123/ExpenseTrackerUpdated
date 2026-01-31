'use client';

import { arrowEnd, arrowFirst, cross, dash, deleteIcon, download, edit, leftArrow, rightArrow, tick, xxx } from '@/lib/icons'
import React, { useState } from 'react';
import { useLanguage } from '@/app/application/context/LanguageContext';
import CustomSelect from './add-components/custom-dropdown';

import { transactionTimeSpan } from '@/data.js';
import { getWeekStartDate, toLocalDate } from '@/util/time-related-date';
import AddModal from './add-components/add-modal';

const DataTable = ({ titleArray, tableData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [type, setType] = useState(1);
    const [timeSpanId, setTimeSpanId] = useState(1);
    const [allSelected, setAllSelected] = useState(false);
    const [selectedRows, setSelectedRows] = useState(false);
     const [isModalOpen, setIsModalOpen] = useState(false);

    const rowsPerPage = 5;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexofFirstRow = indexOfLastRow - rowsPerPage;

    const totalPages = Math.ceil(tableData.length / rowsPerPage);

    const [buttonActive, setButtonActive] = useState(1);

    const { nav, lan } = useLanguage();

    const filterdData = tableData.slice(indexofFirstRow, indexOfLastRow)
        .filter(item => {
            if (item.typeId == 1 && type == 2) {
                return item;
            }
            if (item.typeId == 2 && type == 3) {
                return item;
            }
            if (type == 1) {
                return item;
            }
        })
        .filter(trans => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const date = toLocalDate(trans.first);

            // all 
            if (timeSpanId == 1) {
                return trans;
            }

            // today 
            if (timeSpanId == 2) {
                if (date.getFullYear() === today.getFullYear() &&
                    date.getMonth() === today.getMonth() &&
                    date.getDate() === today.getDate()) {
                    return trans;
                }
            }

            // yesterday 
            if (timeSpanId == 3) {
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);

                if (
                    date.getFullYear() === yesterday.getFullYear() &&
                    date.getMonth() === yesterday.getMonth() &&
                    date.getDate() === yesterday.getDate()
                ) {
                    return trans;
                }
            }

            // this week 
            if (timeSpanId == 4) {
                const startDate = getWeekStartDate(new Date());
                startDate.setHours(0, 0, 0, 0);

                const endDate = new Date();
                endDate.setHours(23, 59, 59, 999);

                if (date >= startDate && date <= endDate) {
                    return trans;
                }
            }

            // this month
            if (timeSpanId == 5) {
                if (
                    date.getFullYear() === today.getFullYear() &&
                    date.getMonth() === today.getMonth()
                ) {
                    return trans;
                }
            }

            // this year 
            if (timeSpanId == 6) {
                if (date.getFullYear() === today.getFullYear()) {
                    return trans
                }
            }
        })

    function handleNextSelection() {
        setCurrentPage(prev => {
            if (prev < totalPages) {
                return prev + 1
            } else {
                return prev
            }
        });
    }

    function handlePreviousSelection() {
        setCurrentPage(prev => {
            if (prev > 1) {
                return prev - 1
            } else {
                return prev
            }
        });
    }

    function handlePageButtonClick(number) {
        setCurrentPage(number);
    }

    function handleTimeSpanSelect(selectedKey) {
        setTimeSpanId(selectedKey);
    }

    function handleinputclick(id) {
        if(!filterdData.some(item => item.isSelected === true)){
            setAllSelected(false);
        }
        filterdData.find(item => item.id == id).isSelected === true ?
            filterdData.find(item => item.id == id).isSelected = false :
            filterdData.find(item => item.id == id).isSelected = true;
        setSelectedRows(prev => !prev);
    }

    function handleAllSelect() {
        filterdData.map(item => item.isSelected = !allSelected);
        setAllSelected(prev => !prev);
    }

    function handleTypeSelection(identifier) {
        setButtonActive(identifier);
        if (identifier == 1) {
            setType(1);
        } else if (identifier == 2) {
            setType(2);
        } else if (identifier == 3) {
            setType(3);
        }
    }

    function toggleModal(){
        setIsModalOpen(prev => !prev);
    }

    function handleEditTransaction(){
        toggleModal();
    }

    return (
        <>
            <div className="w-full ">

                {/* edit box */}
                {filterdData.some(item => item.isSelected === true) &&
                    <div className='w-full h-[43.9px] rounded-full flex justify-start items-center px-4 gap-2
                bg-light-muted-text/15 dark:bg-light-surface-background/5
                text-light-secondary-text dark:text-dark-secondary-text
                text-[13px] border
                border-light-muted-text/15 dark:border-dark-surface-background/5
                '>
                        <button className='py-2'>{cross}</button>
                        <span> {filterdData.filter(i => i.isSelected === true).length} Selected </span>
                        <button onClick={handleEditTransaction}>
                            {filterdData.filter(item=> item.isSelected).length === 1&& edit}
                            </button>
                        <button>{deleteIcon}</button>
                    </div>
                }

                { isModalOpen && <AddModal id={filterdData.find(item => item.isSelected === true).id} modalId={1} toggleModal={toggleModal}/>}

                {/* button box all income epense */}
                {!filterdData.some(item => item.isSelected === true) &&
                    <div className=' flex flex-col sm:flex sm:flex-row justify-between gap-4'>
                        <div className='flex grow  sm:max-w-[340px]'>
                            <button className={`px-4 py-2 border rounded-l-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                      
                         ${buttonActive === 1 ? 'bg-accent-hover text-white' : 'hover:bg-hover-gray/30'}
                         `}
                                onClick={() => handleTypeSelection(1)}
                            >{nav.all}</button>
                            <button className={`
                            px-4 py-2 border-y w-1/3
                        border-light-border dark:border-dark-border
                        text-light-secondary-text dark:text-dark-secondary-text
                        ${buttonActive === 2 ? 'bg-accent-hover text-white' : 'hover:bg-hover-gray/30'}
                            `}
                                onClick={() => handleTypeSelection(2)}
                            >{nav.income}</button>

                            <button className={`
                            px-4 py-2 border rounded-r-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                         ${buttonActive === 3 ? 'bg-accent-hover text-white' : 'hover:bg-hover-gray/30'}
                            `}
                                onClick={() => handleTypeSelection(3)}
                            >
                                {nav.expense}
                            </button>
                        </div>
                        <div className='flex gap-3 justify-between items-center md:justify-end bg-red400'>
                            <div className='w-44'>
                                <CustomSelect options={transactionTimeSpan[lan]}
                                    onSelect={(e) => handleTimeSpanSelect(e.key)}
                                    selectedKey={1}
                                    height={10}
                                />
                            </div>

                            <button className='px-4 py-2 border rounded-full flex justify-between items-center gap-3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                         hover:bg-hover-gray/30
                        '>{nav.export} {download}</button>
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
                                        {allSelected ? <span>{tick}</span> : ''}
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
                            {filterdData && filterdData.map((item) => (
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
                                            {item.isSelected ? <span> {tick} </span> : ''}
                                        </button>
                                        {/* <input type='checkbox' onChange={()=> handleinputclick(item.id)} checked={item.isSelected ? item.isSelected: undefined}/> checked={true} */}
                                    </td>
                                    <td className='p-6
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>{item.first}</td>
                                    <td className='p-3 
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>
                                        <div className='flex flex-col'>
                                            <span>
                                                {item.second}
                                            </span>
                                            <span className=' text-[12px] md:text-[15px]
                                        text-light-muted-text dark:text-dark-muted-text
                                        '>
                                                {item.third}
                                            </span>
                                        </div>
                                    </td>
                                    <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>
                                        <span className={`${item.typeId == 1 ? 'bg-success-bg/40 text-success-bg' : 'bg-warning-secondary/40 text-warning-secondary'} border px-2  rounded-md`}>
                                            {item.fourth}
                                        </span>
                                    </td>
                                    <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>{item.fifth}</td>
                                    <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>{item.sixth}</td>
                                </tr>
                            ))}

                            {Array.from({ length: (rowsPerPage - filterdData.length) }).map((_, index) => (
                                <tr className='border-b border-transparent'>

                                    <td className='text-left p-3'></td>
                                    <td className='text-left p-3'></td>
                                    <td className='text-left p-3'>
                                        <div className='flex flex-col text-transparent'>
                                            <span>
                                                dddd
                                            </span>
                                            <span className=' text-[12px] md:text-[15px]
                                        text-transparent
                                        '>
                                                ddd
                                            </span>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
            <div className='h-10 border-x border-light-border dark:border-dark-border '>

            </div>
            <footer className='border border-t- flex flex-col justify-center gap-2 md:gap-0 md:flex-row md:justify-between items-center p-4
            border-light-border dark:border-dark-border
            text-light-secondary-text dark:text-dark-secondary-text
            '>
                <div className='flex gap-2'>
                    <button className='text-light-muted-text dark:text-dark-muted-text
                    px-2 py-2 rounded-md
                    hover:bg-hover-gray 
                    '>
                        {arrowFirst}
                    </button>
                    <button className='text-light-muted-text dark:text-dark-muted-text
                    px-2 py-2 rounded-md
                   hover:bg-hover-gray '
                        onClick={handlePreviousSelection}
                    >
                        {leftArrow}
                    </button>

                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button className={` px-4 py-2 rounded-md hidden sm:flex
                        ${currentPage === index + 1 ? 'bg-primary-accent text-white ' :
                                'hover:bg-hover-gray text-light-secondary-text dark:text-dark-secondary-text'}
                        `}
                            onClick={() => handlePageButtonClick(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button className='text-light-muted-text dark:text-dark-muted-text
                    px-2 py-2 rounded-md
                    hover:hover:bg-hover-gray '
                        onClick={handleNextSelection}>
                        {rightArrow}
                    </button>
                    <button className='text-light-muted-text dark:text-dark-muted-text
                    px-2 py-2 rounded-md
                    hover:hover:bg-hover-gray'>
                        {arrowEnd}
                    </button>
                </div>
                <div className='flex text-light-muted-text dark:text-dark-muted-text'>
                    {currentPage} of {totalPages} pages
                </div>
            </footer>
        </>
    )
}

export default DataTable;

