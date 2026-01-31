
// ---------------------------------------------------------------------------------------------

import { getWeekStartDate, toLocalDate } from '@/util/time-related-date';
import React, { useState } from 'react'

const TransactionsDataTable = ({ titleArray, tableData }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [type, setType] = useState(1);
    const [timeSpanId, setTimeSpanId] = useState(1);
    const [selectedRows, setSelectedRows] = useState(false);
    const [allSelected, setAllSelected] = useState(false);

    // 1 all 
    // 2 today
    // 3 yesterdat
    // 4 this week
    // 5 this month

    const rowsPerPage = 5;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const totalPages = Math.ceil(tableData.length / rowsPerPage);

    const currentPageData = tableData.slice(indexOfFirstRow, indexOfLastRow)
        .filter(item => {
            if (item.fourth == 'Income' && type == 2) {
                return item;
            }
            if (item.fourth == 'Expense' && type == 3) {
                return item;
            }
            if (type == 1) {
                return item;
            }

        }).filter(trans => {
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

    console.log(currentPageData);


    function handleNextPick() {
        setAllSelected(false);
        currentPageData.map(item => item.isSelected = false);
        setCurrentPage(prev => {
            if (prev + 1 <= totalPages) {
                return prev + 1
            } else {
                return prev;
            }
        })
    }

    function handlePreviousClick() {
        setAllSelected(false);
        currentPageData.map(item => item.isSelected = false);
        setCurrentPage(prev => {
            if (prev - 1 >= 1) {
                return prev - 1
            } else {
                return prev;
            }
        })
    }

    function handleTypeClick(identifier) {
        if (identifier == 1) {
            setType(1);
        } else if (identifier == 2) {
            setType(2);
        } else if (identifier == 3) {
            setType(3);
        }
    }

    function handleSelectChange(e) {
        console.log(e.target.value);

        setTimeSpanId(e.target.value)
    }

    function handleHeaderInputCheck() {
        currentPageData.map(item => item.isSelected = !allSelected);
        setAllSelected(prev => !prev);
    }

    function handleInputClick(id) {
        currentPageData.find(item => item.id == id).isSelected === true ?
            currentPageData.find(item => item.id == id).isSelected = false :
            currentPageData.find(item => item.id == id).isSelected = true;
        setSelectedRows(prev => !prev);
    }

    function handlebuttonClick(id) {
        setCurrentPage(id);
    }

    return (
        <>
            <div className='flex justify-between p-4'>
                <div>
                    <button className='border px-2' onClick={() => handleTypeClick(1)}>
                        All
                    </button>
                    <button className='border px-2' onClick={() => handleTypeClick(2)}>
                        Income
                    </button>
                    <button className='border px-2' onClick={() => handleTypeClick(3)}>
                        Expense
                    </button>
                </div>
                <select name="" id="" className='border' onChange={(e) => handleSelectChange(e)}>
                    <option value="1">All</option>
                    <option value="2">Today</option>
                    <option value="3">Yesterday</option>
                    <option value="4">This week</option>
                    <option value="5">This month</option>

                </select>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='p-2 border'>
                            <input type="checkbox"
                                onClick={handleHeaderInputCheck}
                                checked={allSelected}
                            />
                        </th>
                        {titleArray.map((title) => (
                            <th  >
                                {title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='h-[350px]'>
                    {currentPageData && currentPageData.map(transaction => (
                        <tr className='border max-h-20'>
                            <td  className='p-0'>
                                <input type="checkbox"
                                    onClick={() => handleInputClick(transaction.id)}
                                    checked={transaction.isSelected}
                                />
                            </td>
                            <td className='p-0'>
                                {transaction.first}
                            </td>
                            <td  className='p-0' >
                                {transaction.second}
                            </td>
                            <td  className='p-0' >
                                {transaction.third}
                            </td>
                            <td  className='p-0' >
                                {transaction.fourth}
                            </td>
                            <td  className='p-0' >
                                {transaction.fifth}
                            </td>

                        </tr>
                    ))}
                    {rowsPerPage - currentPageData.length > 0 &&

                        Array.from({ length: totalPages }).map((_, index) => (
                            <tr className='border'>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
            <div className='p-4'>
                <button className='border rounded-full px-4'
                    onClick={handlePreviousClick}
                >
                    previous
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button className='p-4' onClick={() => handlebuttonClick(index + 1)}>{index + 1}</button>
                ))}
                <button className='border rounded-full px-4'
                    onClick={handleNextPick}
                >
                    next
                </button>
            </div>
        </>
    )
}

export default TransactionsDataTable


/// -   -------------------------------------------------------------------------------------------------------------------------
// 'use client';

// import { arrowEnd, arrowFirst, cross, dash, deleteIcon, download, edit, leftArrow, rightArrow, tick, xxx } from '@/lib/icons'
// import React, { useState } from 'react';
// import { useLanguage } from '@/app/application/context/LanguageContext';
// import CustomSelect from './add-components/custom-dropdown';

// import { transactionTimeSpan } from '@/data.js';
// import { getWeekStartDate, toLocalDate } from '@/util/time-related-date';

// const DataTable = ({ titleArray, tableData }) => {
//     const [data, setData] = useState({
//         allSelect: false,
//         timeSpanId: 1,
//         data: tableData
//     });

//     const [buttonActive, setButtonActive] = useState(1);

//     const { nav, lan } = useLanguage();

//     function handleTimeSpanSelect(selectedKey) {
//         const today = new Date();

//         setData(prev => {
//             const newData = {
//                 allSelect: prev.allSelect,
//                 timeSpanId: selectedKey,

//                 data: prev.data.map(x => {
//                     let timeSpanId = prev.timeSpanId;

//                     if (x.first) {
//                         const today = new Date();
//                         today.setHours(0, 0, 0, 0);

//                         const date = toLocalDate(x.first);

//                         if (selectedKey === 2) { // Today // 1
//                             if (date.getFullYear() === today.getFullYear() &&
//                                 date.getMonth() === today.getMonth() &&
//                                 date.getDate() === today.getDate()) {
//                                 timeSpanId = selectedKey
//                             }
//                         } else if (selectedKey === 1) { //  all transactions 
//                             timeSpanId = selectedKey
//                         } else if (selectedKey === 3) { // yestarday 
//                             const yesterday = new Date(today);
//                             yesterday.setDate(today.getDate() - 1);

//                             if (
//                                 date.getFullYear() === yesterday.getFullYear() &&
//                                 date.getMonth() === yesterday.getMonth() &&
//                                 date.getDate() === yesterday.getDate()
//                             ) {
//                                 timeSpanId = selectedKey;
//                             }
//                         } else if (selectedKey === 4) { // this week starts from monday 
//                             const startDate = getWeekStartDate(new Date());
//                             startDate.setHours(0, 0, 0, 0);

//                             const endDate = new Date();
//                             endDate.setHours(23, 59, 59, 999);

//                             if (date >= startDate && date <= endDate) {
//                                 timeSpanId = selectedKey;
//                             }
//                         } else if (selectedKey === 5) {
//                             if (
//                                 date.getFullYear() === today.getFullYear() &&
//                                 date.getMonth() === today.getMonth()
//                             ) {
//                                 timeSpanId = selectedKey;
//                             }

//                         } else if (selectedKey === 6) {
//                             if (date.getFullYear() === today.getFullYear()) {
//                                 timeSpanId = selectedKey;
//                             }
//                         }

//                     } else {
//                         timeSpanId = prev.timeSpanId; // hide if no date
//                     }

//                     return {
//                         ...x,
//                         timeSpanId
//                     };
//                 })
//             };

//             return newData;
//         });
//     }



//     console.log(data);


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
//                     timeSpanId: x.timeSpanId,
//                 })
//             }
//             console.log(typeof (newData.data[0].first));
//             return newData;
//         })
//     }

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
//                     timeSpanId: x.timeSpanId,
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
//                     timeSpanId: prev.timeSpanId,
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
//                             hidden: false,
//                             timeSpanId: x.timeSpanId,
//                         })
//                     }

//                 }
//                 console.log(newData);
//                 return newData;
//             })
//         } else if (identifier === 'Income') {
//             setButtonActive(2);
//             setData(prev => {
//                 const newData = {
//                     allSelect: prev.allSelect,
//                     timeSpanId: prev.timeSpanId,
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
//                             hidden: x.fourth !== 'Income',
//                             timeSpanId: x.timeSpanId,
//                         })
//                     }

//                 }
//                 console.log(newData);
//                 return newData;
//             })
//         } else if (identifier === 'Expense') {
//             setButtonActive(3);
//             setData(prev => {
//                 const newData = {
//                     allSelect: prev.allSelect,
//                     timeSpanId: prev.timeSpanId,
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
//                             hidden: x.fourth !== 'Expense',
//                             timeSpanId: x.timeSpanId,
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
//                     <div className='w-full h-10 rounded-full flex justify-start items-center px-4 gap-2
//                 bg-light-muted-text/15 dark:bg-light-surface-background/5
//                 text-light-secondary-text dark:text-dark-secondary-text
//                 text-[13px] border
//                 border-light-muted-text/15 dark:border-dark-surface-background/5
//                 '>
//                         <button className='py-2'>{cross}</button>
//                         <span> {data.data.filter(i => i.isSelected === true && i.hidden === false).length} Selected </span>
//                         <button>{edit}</button>
//                         <button>{deleteIcon}</button>
//                     </div>
//                 }

//                 {/* button box all income epense */}
//                 {!data.data.some(item => item.isSelected === true) &&
//                     <div className=' flex flex-col sm:flex sm:flex-row justify-between gap-4'>
//                         <div className='flex grow  sm:max-w-[340px]'>
//                             <button className={`px-4 py-2 border rounded-l-full w-1/3
//                          border-light-border dark:border-dark-border
//                          text-light-secondary-text dark:text-dark-secondary-text
                      
//                          ${buttonActive === 1 ? 'bg-accent-hover text-white' : 'hover:bg-hover-gray/30'}
//                          `}
//                                 onClick={() => handleTypeSelection('all')}
//                             >{nav.all}</button>
//                             <button className={`
//                             px-4 py-2 border-y w-1/3
//                         border-light-border dark:border-dark-border
//                         text-light-secondary-text dark:text-dark-secondary-text
//                         ${buttonActive === 2 ? 'bg-accent-hover text-white' : 'hover:bg-hover-gray/30'}
//                             `}
//                                 onClick={() => handleTypeSelection('Income')}
//                             >{nav.income}</button>

//                             <button className={`
//                             px-4 py-2 border rounded-r-full w-1/3
//                          border-light-border dark:border-dark-border
//                          text-light-secondary-text dark:text-dark-secondary-text
//                          ${buttonActive === 3 ? 'bg-accent-hover text-white' : 'hover:bg-hover-gray/30'}
//                             `}
//                                 onClick={() => handleTypeSelection('Expense')}
//                             >
//                                 {nav.expense}
//                             </button>
//                         </div>
//                         <div className='flex gap-3 justify-between items-center md:justify-end bg-red400'>
//                             <div className='w-44'>
//                                 <CustomSelect options={transactionTimeSpan[lan]}
//                                     onSelect={(e) => handleTimeSpanSelect(e.key)}
//                                     selectedKey={1}
//                                     height={10}
//                                 />
//                             </div>

//                             <button className='px-4 py-2 border rounded-full flex justify-between items-center gap-3
//                          border-light-border dark:border-dark-border
//                          text-light-secondary-text dark:text-dark-secondary-text
//                          hover:bg-hover-gray/30
//                         '>{nav.export} {download}</button>
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
//                                         {data.allSelect ? data.data.some(item => item.isSelected === false) ? <span>{dash}</span> : <span>{tick}</span> : ''}
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
//                             {data.data && data.data.filter(item => item.hidden === false && item.timeSpanId === data.timeSpanId).map((item) => (
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
//                                             {item.isSelected ? <span> {tick} </span> : ''}
//                                         </button>
//                                         {/* <input type='checkbox' onChange={()=> handleinputclick(item.id)} checked={item.isSelected ? item.isSelected: undefined}/> checked={true} */}
//                                     </td>
//                                     <td className='p-6
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>{item.first}</td>
//                                     <td className='p-3 
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>
//                                         <div className='flex flex-col'>
//                                             <span>
//                                                 {item.second}
//                                             </span>
//                                             <span className=' text-[12px] md:text-[15px]
//                                         text-light-muted-text dark:text-dark-muted-text
//                                         '>
//                                                 {item.third}
//                                             </span>
//                                         </div>
//                                     </td>
//                                     <td className='p-3
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>
//                                         <span className={`${item.fourth === 'Income' ? 'bg-success-bg/40 text-success-bg' : 'bg-warning-secondary/40 text-warning-secondary'} border px-2  rounded-md`}>
//                                             {item.fourth}
//                                         </span>
//                                     </td>
//                                     <td className='p-3
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>{item.fifth}</td>
//                                     <td className='p-3
//                     text-light-secondary-text dark:text-dark-secondary-text
//                     '>{item.sixth}</td>
//                                 </tr>
//                             ))}

//                             {/* <tr>
//                                 <td className='p-3'>Total 9</td>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                             </tr> */}
//                         </tbody>
//                     </table>
//                     <div className='h-16 border border-t-0 flex justify-end items-center p-4
//                     border-light-border dark:border-dark-border
//                     text-light-muted-text dark:text-dark-muted-text
//                     '>
//                         <span>{nav.total} {data.data.filter(item => item.hidden === false && item.timeSpanId === data.timeSpanId).length} {nav.transactions}</span>
//                     </div>
//                 </div>
//             </div>
//             {/* <footer className='border border-t-0 flex justify-between items-center p-4
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
//             </footer> */}
//         </>
//     )
// }

// export default DataTable;

