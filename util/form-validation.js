// export function dataValidator(userData, errors, setErrors) {
//     if (!userData) {
//         setErrors(prev => ({
//             ...prev,
//             typeId: true,
//             categoryId: true,
//             subCategoryId: true,
//             amount: true,
//             date: true,
//         }))
//     }
//     if (userData?.amount === null ||
//         userData?.amount === undefined ||
//         userData.amount === 0 ||
//         String(userData.amount).trim() === '') {
//         setErrors(prev => ({
//             ...prev,
//             amount: true
//         }))
//     } else {
//         setErrors(prev => ({
//             ...prev,
//             amount: false
//         }))
//     }
//     if (userData?.typeId === null || userData?.typeId === 0 ||
//         userData?.typeId === undefined
//     ) {
//         setErrors(prev => ({
//             ...prev,
//             typeId: true
//         }));
//     } else {
//         setErrors(prev => ({
//             ...prev,
//             typeId: false
//         }));
//     }

//     if (userData?.categoryId === null || userData?.categoryId === 0 ||
//         userData?.categoryId === undefined
//     ) {
//         setErrors(prev => ({
//             ...prev,
//             categoryId: true
//         }));
//     } else {
//         setErrors(prev => ({
//             ...prev,
//             categoryId: false
//         }));
//     }

//     if (userData?.subCategoryId === null || userData?.subCategoryId === 0 ||
//         userData?.subCategoryId === undefined
//     ) {
//         setErrors(prev => ({
//             ...prev,
//             subCategoryId: true
//         }));
//     } else {
//         setErrors(prev => ({
//             ...prev,
//             subCategoryId: false
//         }));
//     }

//     if (userData?.date === null || userData?.date === '' ||
//         userData?.date === undefined
//     ) {
//         setErrors(prev => ({
//             ...prev,
//             date: true
//         }));
//     } else {
//         setErrors(prev => ({
//             ...prev,
//             date: false
//         }));
//     }

//     if (!errors.amount || !errors.typeId || !errors.categoryId || !errors.subCategoryId || !errors.date) {
//         return false;
//     }

//     return true;
// }

export function transactionDataValidator(userData, setErrors) {
    const newErrors = {
        typeId: !userData?.typeId,
        categoryId: !userData?.categoryId,
        subCategoryId: !userData?.subCategoryId,
        amount: !userData?.amount && userData?.amount !== 0, // treat 0 as invalid
        date: !userData?.date,
    };

    setErrors(newErrors); // update state

    // If any field is invalid, return false
    return !Object.values(newErrors).some(Boolean);
}

export function serverSideTransactionDataValidator(userData) {
    const newErrors = {
        typeId: !userData?.typeId,
        categoryId: !userData?.categoryId,
        subCategoryId: !userData?.subCategoryId,
        amount: !userData?.amount && userData?.amount !== 0, // treat 0 as invalid
        date: !userData?.date,
    };

    return newErrors;
}

export function savingDataValidator(userData, setErrors) {
    const newErrors = {
        name: !userData?.name,
        typeId: !userData?.typeId,
        amount: !userData?.amount && userData?.amount !== 0,
        date: !userData?.date,
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
}

export function serverSideSavingDataValidator(userData) {
    const newErrors = {
        name: !userData?.name,
        typeId: !userData?.typeId,
        amount: !userData?.amount && userData?.amount !== 0, // treat 0 as invalid
        date: !userData?.date,
    };
    return newErrors;
}

export function budgetDataValidator(userData, setErrors) {
    const newErrors = {
        title: !userData?.title,
        categoryId: !userData?.categoryId,
        amount: !userData?.amount && userData?.amount !== 0,
        date: !userData?.date,
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
}

export function serverSideBudgetDataValidator(userData) {
    const newErrors = {
        title: !userData?.title,
        categoryId: !userData?.categoryId,
        amount: !userData?.amount && userData?.amount !== 0,
        date: !userData?.date,
    };
    console.log(newErrors);

    return newErrors;
}


export function goalDataValidator(userData, setErrors) {
    const newErrors = {
        title: !userData?.title,
        categoryId: !userData?.categoryId,
        amount: !userData?.amount && userData?.amount !== 0,
        priorityId: !userData?.priorityId,
        date: !userData?.date,
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
}

export function serverSideGoalDataValidator(userData) {
    const newErrors = {
        title: !userData?.title,
        categoryId: !userData?.categoryId,
        amount: !userData?.amount && userData?.amount !== 0,
        priorityId: !userData?.priorityId,
        date: !userData?.date,
    };
    return newErrors;
}
