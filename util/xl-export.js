'use client';

import * as XLSX from 'xlsx';

export function exportTransactionsToExcel(transactions) {
    var count = 1;
    // 1. Shape the data (VERY important)
    const formattedData = transactions.map(tx => ({
        Slno: count++,
        Date: tx.first,
        Type: tx.fourth,
        Category: tx.second,
        SubCategory: tx.third,
        Amount: tx.fifth,
        Notes: tx.sixth ?? ''
    }));

    // 2. Convert JSON → worksheet
    const worksheet = XLSX.utils.json_to_sheet(formattedData);

    // 3. Create workbook & append sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');

    // 4. Trigger download
    XLSX.writeFile(workbook, 'transactions.xlsx');
}
