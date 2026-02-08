// 'use client';

// import * as XLSX from 'xlsx';
// import { exportTableHeaders as header} from '@/data';

// export function exportTransactionsToExcel(transactions, lanId) {
//     var count = 1;
//     // 1. Shape the data (VERY important)
//     const formattedData = transactions.map(tx => ({
//         Slno : count++,
//         Date: tx.first,
//         Type: tx.fourth,
//         Category: tx.second,
//         SubCategory: tx.third,
//         Amount: tx.fifth,
//         Notes: tx.sixth ?? ''
//     }));

//     // 2. Convert JSON → worksheet
//     const worksheet = XLSX.utils.json_to_sheet(formattedData);

//     // 3. Create workbook & append sheet
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');

//     // 4. Trigger download
//     XLSX.writeFile(workbook, 'transactions.xlsx');
// }




// export function exportTransactionAndSavingsToExcel(transactions, savings, lanId) {
//     var transCount = 1;
//     var savCount = 1;

//     const formattedTransactionsData = transactions.map(tx => ({
//         [header[lanId].slno]: transCount++,
//         [header[lanId].date]: tx.date,
//         [header[lanId].type]: tx.type,
//         [header[lanId].category]: tx.category,
//         [header[lanId].subCategory]: tx.subCategory,
//         [header[lanId].amount]: tx.amount,
//         [header[lanId].notes]: tx.notes ?? ''
//     }));

//     const formattedSavingsData = savings.map(tx => ({
//         [header[lanId].slno]: savCount++,
//         [header[lanId].date]: tx.date,
//         [header[lanId].title]: tx.name,
//         [header[lanId].type]: tx.type,
//         [header[lanId].amount]: tx.amount,
//         [header[lanId].notes]: tx.notes,
//     }));

//     // Create workbook
//     const workbook = XLSX.utils.book_new();

//     // Create sheets
//     const transactionsSheet = XLSX.utils.json_to_sheet(formattedTransactionsData);
//     const savingsSheet = XLSX.utils.json_to_sheet(formattedSavingsData);

//     // Append sheets
//     XLSX.utils.book_append_sheet(workbook, transactionsSheet, 'Transactions');
//     XLSX.utils.book_append_sheet(workbook, savingsSheet, 'Savings');

//     // Download
//     XLSX.writeFile(workbook, `${header[lanId].expenseReport}.xlsx`);
// }


'use client';

import * as XLSX from 'xlsx';
import { exportTableHeaders as header } from '@/data';

const getLang = (lanId) => header[lanId] ?? header[1];

/* ---------------- TRANSACTIONS ONLY ---------------- */
export function exportTransactionsToExcel(transactions, lanId) {
    const t = getLang(lanId);
    let count = 1;

    const formattedData = transactions.map(tx => ({
        [t.slno]: count++,
        [t.date]: tx.first,
        [t.type]: tx.fourth,
        [t.category]: tx.second,
        [t.subCategory]: tx.third,
        [t.amount]: tx.fifth,
        [t.notes]: tx.sixth ?? '',
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, t.transactions);

    XLSX.writeFile(
        workbook,
        `${t.transactions}.xlsx`
    );
}

// /* ---------------- SAVINGS ONLY ---------------- */
export function exportSavingsToExcel(savings, lanId) {
    const t = getLang(lanId);
    let count = 1;

    const formattedData = savings.map(tx => ({
        [t.slno]: count++,
        [t.date]: tx.first,
        [t.title]: tx.second,
        [t.type]: tx.third,
        [t.amount]: tx.fourth,
        [t.notes]: tx.fifth ?? '',
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);

    // 3. Create workbook & append sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, t.savings);

    // 4. Trigger download
    XLSX.writeFile(workbook, `${t.savings}.xlsx`);

}



/* ---------------- TRANSACTIONS + SAVINGS ---------------- */
export function exportTransactionAndSavingsToExcel(transactions, savings, lanId) {
    const t = getLang(lanId);
    let transCount = 1;
    let savCount = 1;

    const formattedTransactionsData = transactions.map(tx => ({
        [t.slno]: transCount++,
        [t.date]: tx.date,
        [t.type]: tx.type,
        [t.category]: tx.category,
        [t.subCategory]: tx.subCategory,
        [t.amount]: tx.amount,
        [t.notes]: tx.notes ?? '',
    }));

    const formattedSavingsData = savings.map(tx => ({
        [t.slno]: savCount++,
        [t.date]: tx.date,
        [t.title]: tx.name,
        [t.type]: tx.type,
        [t.amount]: tx.amount,
        [t.notes]: tx.notes ?? '',
    }));

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        XLSX.utils.json_to_sheet(formattedTransactionsData),
        t.transactions
    );

    XLSX.utils.book_append_sheet(
        workbook,
        XLSX.utils.json_to_sheet(formattedSavingsData),
        t.savings
    );

    XLSX.writeFile(
        workbook,
        `${t.expenseReport}.xlsx`
    );
}
