// 'use client';

// import { arrowEnd, arrowFirst, cross, leftArrow, rightArrow, xxx } from '@/lib/icons'
// import React, { useState } from 'react';
// import { downArrow } from '@/lib/icons';
// import { useLanguage } from '@/app/application/context/LanguageContext';


// const SavingsDataTable = ({ titleArray, tableData }) => {
//     const [data, setData] = useState({
//         allSelect: false,
//         data: tableData
//     });

//     const [buttonActive, setButtonActive] = useState(1);

//     const { nav } = useLanguage();

//     function handleinputclick(id) {
//         setData(prev => {
//             const newData = {
//                 allSelect: prev.allSelect,
//                 data: []
//             };

//             for (let x of prev.data) {
//                 newData.data.push({
//                     isSelected: x.id === id ? !x.isSelected : x.isSelected,
//                     id: x.id,
//                     first: x.first,
//                     second: x.second,
//                     third: x.third,
//                     fourth: x.fourth,
//                     fifth: x.fifth,
//                     sixth: x.sixth,
//                     hidden: x.hidden,
//                 })
//             }
//             console.log(newData);
//             return newData;
//         })
//     }

//     console.log('after hand');


//     function handleAllSelect() {
//         setData(prev => {
//             const newData = {
//                 allSelect: !prev.allSelect,
//                 data: [],
//             };

//             for (let x of prev.data) {
//                 newData.data.push({
//                     isSelected: !prev.allSelect ? true : false,
//                     id: x.id,
//                     first: x.first,
//                     second: x.second,
//                     third: x.third,
//                     fourth: x.fourth,
//                     fifth: x.fifth,
//                     sixth: x.sixth,
//                     hidden: x.hidden,
//                 })
//             }
//             console.log(newData);
//             return newData;
//         })
//     }

//     function handleTypeSelection(identifier) {
//         if (identifier === 'all') {
//             setButtonActive(1);
//             setData(prev => {
//                 const newData = {
//                     allSelect: prev.allSelect,
//                     data: []
//                 };

//                 for (let x of prev.data) {
//                     if (true) {
//                         newData.data.push({
//                             isSelected: x.isSelected,
//                             id: x.id,
//                             first: x.first,
//                             second: x.second,
//                             third: x.third,
//                             fourth: x.fourth,
//                             fifth: x.fifth,
//                             sixth: x.sixth,
//                             hidden: false
//                         })
//                     }

//                 }
//                 console.log(newData);
//                 return newData;
//             })
//         } else if (identifier === 'Withdraw') {
//             setButtonActive(2);
//             setData(prev => {
//                 const newData = {
//                     allSelect: prev.allSelect,
//                     data: []
//                 };

//                 for (let x of prev.data) {
//                     if (true) {
//                         newData.data.push({
//                             isSelected: x.isSelected,
//                             id: x.id,
//                             first: x.first,
//                             second: x.second,
//                             third: x.third,
//                             fourth: x.fourth,
//                             fifth: x.fifth,
//                             sixth: x.sixth,
//                             hidden: x.fourth !== 'Withdraw'
//                         })
//                     }

//                 }
//                 console.log(newData);
//                 return newData;
//             })
//         } else if (identifier === 'Deposit') {
//             setButtonActive(3);
//             setData(prev => {
//                 const newData = {
//                     allSelect: prev.allSelect,
//                     data: []
//                 };

//                 for (let x of prev.data) {
//                     if (true) {
//                         newData.data.push({
//                             isSelected: x.isSelected,
//                             id: x.id,
//                             first: x.first,
//                             second: x.second,
//                             third: x.third,
//                             fourth: x.fourth,
//                             fifth: x.fifth,
//                             sixth: x.sixth,
//                             hidden: x.fourth !== 'Deposit'
//                         })
//                     }
//                 }
//                 console.log(newData);
//                 return newData;
//             })
//         }
//     }

//     return (
//         <>
//             <div className="w-full ">

//                 {/* edit box */}
//                 {data.data.some(item => item.isSelected === true) &&
//                     <div className='w-full rounded-full flex justify-start items-center px-4 gap-2
//                 bg-light-muted-text/15 dark:bg-light-surface-background/5
//                 text-light-secondary-text dark:text-dark-secondary-text
//                 text-[13px] border
//                 border-light-muted-text/15 dark:border-dark-surface-background/5
//                 '>
//                         <button className='py-2'>{cross}</button>
//                         <span> {data.data.filter(i => i.isSelected === true && i.hidden === false).length} Selected </span>
//                         <button>{`[edit]`}</button>
//                         <button>{`[del]`}</button>
//                     </div>
//                 }

//                 {/* button box all income epense */}
//                 {!data.data.some(item => item.isSelected === true) &&
//                     <div className=' flex flex-col md:flex md:flex-row justify-between  gap-4'>
//                         <div className='flex grow max-w-[340px]'>
//                             <button className={`px-4 py-2 border rounded-l-full w-1/3
//                          border-light-border dark:border-dark-border
//                          text-light-secondary-text dark:text-dark-secondary-text
//                          hover:bg-hover-gray/30
//                          ${buttonActive === 1? 'bg-accent-hover text-white/70 hover:bg-accent-hover hover:dark:bg-accent-hover':
//                           undefined}
//                          `}
//                                 onClick={() => handleTypeSelection('all')}
//                             >{nav.all}</button>
//                             <button className= {`
//                             px-4 py-2 border-y w-1/3
//                         border-light-border dark:border-dark-border
//                         text-light-secondary-text dark:text-dark-secondary-text
//                         hover:bg-hover-gray/30
//                         ${buttonActive === 2? 'bg-accent-hover text-white': undefined}
//                             `}
//                                 onClick={() => handleTypeSelection('Income')}
//                             >{nav.income}</button>

//                             <button className={`
//                             px-4 py-2 border rounded-r-full w-1/3
//                          border-light-border dark:border-dark-border
//                          text-light-secondary-text dark:text-dark-secondary-text
//                          hover:bg-hover-gray/30
//                          ${buttonActive === 3? 'bg-accent-hover text-white': undefined}
//                             `}
//                                 onClick={() => handleTypeSelection('Expense')}
//                             >
//                                 {nav.expense}
//                             </button>
//                         </div>
//                         <div className='flex gap-3 grow justify-between md:justify-end'>
//                             <span className='px-4 py-2 border rounded-md flex gap-32
//                          border-light-border dark:border-dark-border
//                          text-light-secondary-text dark:text-dark-secondary-text
//                         '>all {downArrow}</span>
//                             <button className='px-4 py-2 border rounded-full
//                          border-light-border dark:border-dark-border
//                          text-light-secondary-text dark:text-dark-secondary-text
//                          hover:bg-hover-gray/30
//                         '>{nav.export}</button>
//                         </div>
//                     </div>
//                 }

//                 <div className='overflow-x-auto'>
//                     <table className="min-w-[800px] w-full border-collapse border mt-4
//             border-light-border dark:border-dark-border
//             ">
//                         <thead>
//                             <tr className='border-b border-light-border dark:border-dark-border'>
//                                 <th className='text-left p-3
//                         '>
//                                     <button className={`border-3 rounded-sm p-2 h-5 w-5
//                                     flex justify-center items-center
//                                     border-light-border dark:border-dark-border
//                                     bg-light-background dark:bg-dark-background
//                                     text-light-secondary-text dark:text-dark-secondary-text
//                                     `}
//                                         onClick={() => handleAllSelect()}
//                                     >
//                                         {data.allSelect ? data.data.some(item => item.isSelected === false) ? '-' : 'x' : ''}
//                                     </button>
//                                 </th>
//                                 <th className='text-left p-3 
//                         text-light-secondary-text dark:text-dark-secondary-text'>
//                                     {titleArray[0]}
//                                 </th>
//                                 <th className='text-left p-3
//                         text-light-secondary-text dark:text-dark-secondary-text
//                         '>{titleArray[1]}</th>
//                                 <th className='text-left p-3
//                         text-light-secondary-text dark:text-dark-secondary-text
//                         '>{titleArray[2]}</th>
//                                 <th className='text-left p-3
//                         text-light-secondary-text dark:text-dark-secondary-text
//                         '>{titleArray[3]}</th>
//                                 <th className='text-left p-3
//                         text-light-secondary-text dark:text-dark-secondary-text
//                         '>{titleArray[4]}</th>
//                             </tr>
//                         </thead>
//                         <tbody className='p-0  text-[13px] md:text-[18px]'>
//                             {data.data && data.data.filter(item => item.hidden === false).map((item) => (
//                                 <tr className='border-b border-light-border dark:border-dark-border'>
//                                     <td className='text-left p-3'>
//                                         <button className={`border-3 rounded-sm p-2 h-5 w-5
//                                     flex justify-center items-center
//                                     border-light-border dark:border-dark-border
//                                     bg-light-background dark:bg-dark-background
//                                     text-light-secondary-text dark:text-dark-secondary-text
//                                     `}
//                                             onClick={() => handleinputclick(item.id)}
//                                         >
//                                             {item.isSelected ? 'x' : ''}
//                                         </button>
//                                         {/* <input type='checkbox' onChange={()=> handleinputclick(item.id)} checked={item.isSelected ? item.isSelected: undefined}/> checked={true} */}
//                                     </td>
//                                     <td className='p-6
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>{item.first}</td>
//                                     <td className='p-3 
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>

//                                                 {item.second}

//                                     </td>
//                                     <td className='p-3
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>
//                                         <span className={`${item.third === 'Deposit' ? 'bg-success-bg/40 text-success-bg' : 'bg-warning-secondary/40 text-warning-secondary'} border px-2  rounded-md`}>
//                                             {item.third}
//                                         </span>
//                                     </td>
//                                     <td className='p-3
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>{item.fourth}</td>
//                                     <td className='p-3
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>{item.fifth}</td>
//                                 </tr>
//                             ))}

//                             <tr>
//                                 <td className='p-4'></td>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             <footer className='border border-t-0 flex justify-between items-center p-4
//             border-light-border dark:border-dark-border
//             text-light-secondary-text dark:text-dark-secondary-text
//             '>
//                 <div className='flex gap-6'>
//                     <button className='text-light-muted-text dark:text-dark-muted-text'>
//                         {arrowFirst}
//                     </button>
//                     <button className='text-light-muted-text dark:text-dark-muted-text'>
//                         {leftArrow}
//                     </button>
//                     <button className='text-light-primary-text dark:text-dark-primary-text'>
//                         1
//                     </button>
//                     <button className='text-light-primary-text dark:text-dark-primary-text'>
//                         2
//                     </button>
//                     <button className='text-light-muted-text dark:text-dark-muted-text'>
//                         {rightArrow}
//                     </button>
//                     <button className='text-light-muted-text dark:text-dark-muted-text'>
//                         {arrowEnd}
//                     </button>
//                 </div>
//                 <div className='hidden md:flex text-light-muted-text dark:text-dark-muted-text'>
//                     1 of 7 pages
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default SavingsDataTable


'use client';

import { arrowEnd, arrowFirst, cross, dash, dashboard, deleteIcon, download, edit, leftArrow, rightArrow, tick, xxx } from '@/lib/icons'
import React, { useRef, useState } from 'react';
import { useLanguage } from '@/app/application/context/LanguageContext';
import CustomSelect from './add-components/custom-dropdown';

import { transactionTimeSpan } from '@/data.js';
import { getWeekStartDate, toLocalDate } from '@/util/time-related-date';
import AddModal from './add-components/add-modal';
import AddVerificaltionModal from './verification-modal/add-modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { exportSavingsToExcel, exportTransactionsToExcel } from '@/util/xl-export';
import { useCurrency } from '@/app/application/context/CurrencyContext';

const SavingsDataTable = ({ titleArray, tableData, onRefresh }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [type, setType] = useState(1);
    const [timeSpanId, setTimeSpanId] = useState(1);
    const [allSelected, setAllSelected] = useState(false);
    const [selectedRows, setSelectedRows] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);

    const dialog = useRef();

    const router = useRouter();

    const rowsPerPage = 5;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexofFirstRow = indexOfLastRow - rowsPerPage;

    const totalPages = Math.ceil(tableData.length / rowsPerPage);

    const [buttonActive, setButtonActive] = useState(1);

    const { nav, lan } = useLanguage();
    const { currentCurrencySymbol } = useCurrency();


    var totalAmount = tableData.reduce(
        (sum, item) => sum + item.fourth,
        0
    )

    const now = new Date();
    const currentMonth = now.getMonth(); // 0–11
    const currentYear = now.getFullYear();

    const thisMonthSavings = tableData
        .filter(item => {
            const d = new Date(item.first); // '2026-02-04' ✅ valid
            return (
                d.getMonth() === currentMonth &&
                d.getFullYear() === currentYear
            );
        })
        .reduce((total, item) => total + Number(item.fourth), 0);

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
        if (!filterdData.some(item => item.isSelected === true)) {
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

    function toggleModal() {
        setIsModalOpen(prev => !prev);
    }

    function handleEditTransaction() {
        toggleModal();
    }

    async function handleMultipleDelete() {
        const selectedIds = filterdData.filter(item => item.isSelected === true).map(item => item.id);
        console.log(selectedIds);

        const res = await fetch("/api/savings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedIds),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error(data.error);
            return;
        }
        onRefresh();
        setShowVerificationModal(false);
    }

    async function showConfirmationModal() {
        setShowVerificationModal(true);
    }

    function handleVerifyDialog() {
        setShowVerificationModal(false);
    }

    function handleSavingsExport(savings) {
        exportSavingsToExcel(savings);
    }

    function handleUnSelectAllRows() {
        filterdData.map(item => item.isSelected = false);
        setAllSelected(false);
    }

    console.log('rerendered');
    

    return (
        <>
            {showVerificationModal && <AddVerificaltionModal ref={dialog}>
                <div className='flex flex-col  rounded-md gap-4
            bg-light-surface-background dark:bg-dark-surface-background
            border border-light-border dark:border-dark-border
            '>
                    <div className='flex justify-between items-center border-b p-4
                border-light-border dark:border-dark-border'>
                        <span className='text-lg text-light-primary-text dark:text-dark-primary-text'
                        >{nav.confirmDeletionOfTransaction}</span>
                        <button className='text-light-secondary-text dark:text-dark-secondary-text'
                            onClick={handleVerifyDialog}
                        >
                            {cross}
                        </button>
                    </div>
                    <div className='p-4 text-light-secondary-text dark:text-dark-secondary-text'>
                        <p>
                            {nav.areYouSureWantToDeleteTheSelectedRows}
                        </p>
                        <p className='text-sm
                                    text-light-muted-text dark:text-dark-muted-text'>
                            {nav.thisActionCannotBeUnDone}
                        </p>
                    </div>
                    <div className='flex justify-between items-center p-4 gap-2 border-t border-light-border dark:border-dark-border'>
                        <button className='grow border max-w-1/2 rounded-sm py-2 border-light-border dark:border-dark-border
                    text-light-secondary-text dark:text-dark-secondary-text
                    hover:bg-hover-gray/30
                    ' onClick={handleVerifyDialog}>
                            {nav.cancel}
                        </button>
                        <button className='grow border max-w-1/2 rounded-sm py-2 border-warning-primary/30 bg-warning-secondary/50
                    text-light-secondary-text dark:text-dark-secondary-text
                    hover:border-warning-primary hover:bg-warning-secondary/60
                    ' onClick={handleMultipleDelete}>
                            {nav.delete}
                        </button>
                    </div>
                </div>
            </AddVerificaltionModal>}
            <div className='flex gap-4 pb-4'>
                <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                    <h1 className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.totalSavings}</h1>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'> {currentCurrencySymbol + ' ' + new Intl.NumberFormat('en-IN').format(totalAmount)}</span>
                </div>
                <div className='p-4 flex flex-col gap-2 grow border rounded-md 
                border-light-border dark:border-dark-border
                bg-light-surface-background dark:bg-dark-surface-background
                '>
                    <h1 className='text-light-secondary-text dark:text-dark-secondary-text'>{nav.thisMonthSaving}</h1>
                    <span className='text-2xl text-light-primary-text dark:text-dark-primary-text'> {currentCurrencySymbol + ' ' + new Intl.NumberFormat('en-IN').format(thisMonthSavings)}</span>
                </div>
            </div>
            <div className='w-full  border p-4 rounded-md h-full
                        border-light-border dark:border-dark-border
                        bg-light-surface-background dark:bg-dark-surface-background '>
                <div className="">

                    {/* edit box */}
                    {filterdData.some(item => item.isSelected === true) &&
                        <div className='w-full h-[43.9px] rounded-full flex justify-start items-center px-4 gap-2
                bg-light-muted-text/15 dark:bg-light-surface-background/5
                text-light-secondary-text dark:text-dark-secondary-text
                text-[13px] border
                border-light-muted-text/15 dark:border-dark-surface-background/5
                '>
                            <button className='py-2'
                                onClick={handleUnSelectAllRows}
                            >{cross}
                            </button>
                            <span> {filterdData.filter(i => i.isSelected === true).length} {nav.selected} </span>
                            <button onClick={handleEditTransaction}>
                                {filterdData.filter(item => item.isSelected).length === 1 && edit}
                            </button>
                            <button onClick={showConfirmationModal}>
                                {deleteIcon}
                            </button>
                        </div>
                    }

                    {isModalOpen && <AddModal id={filterdData.find(item => item.isSelected === true).id} modalId={3} toggleModal={toggleModal} />}

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
                                >{nav.deposit}</button>

                                <button className={`
                            px-4 py-2 border rounded-r-full w-1/3
                         border-light-border dark:border-dark-border
                         text-light-secondary-text dark:text-dark-secondary-text
                         ${buttonActive === 3 ? 'bg-accent-hover text-white' : 'hover:bg-hover-gray/30'}
                            `}
                                    onClick={() => handleTypeSelection(3)}
                                >
                                    {nav.withdraw}
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
                         hover:bg-hover-gray/30'
                                    onClick={() => handleSavingsExport(tableData)}
                                >
                                    {nav.export} {download}
                                </button>
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
                                            {(allSelected || filterdData.every(item => item.isSelected == true)) ?
                                                <span>{tick}</span> : ''}
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
                                                {/* <span className=' text-[12px] md:text-[15px]
                                        text-light-muted-text dark:text-dark-muted-text
                                        '>
                                                {item.third}
                                            </span> */}
                                            </div>
                                        </td>
                                        <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>
                                            <span className={`${item.typeId == 1 ? 'bg-success-bg/40 text-success-bg' : 'bg-warning-secondary/40 text-warning-secondary'} border px-2  rounded-md`}>
                                                {item.third}
                                            </span>
                                        </td>
                                        <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>{currentCurrencySymbol} {item.fourth}</td>
                                        <td className='p-3
                    text-light-secondary-text dark:text-dark-secondary-text
                    '>{item.fifth}</td>
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
            </div>
        </>
    )
}

export default SavingsDataTable;

