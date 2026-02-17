import { transaction } from '@/lib/icons';
import { serverSideTransactionDataValidator } from '@/util/form-validation';
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { auth } from '@/auth';

const supabase = createClient(
    "https://oikjefdnymfghsbtznub.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2plZmRueW1mZ2hzYnR6bnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NzksImV4cCI6MjA4NDc1NDc3OX0.AH-V3gFKSX564PGltXn3IE2ieZ6RU___oK5xCtGVkgI"
)

export async function fetchTransactions(userId, lanId) {
    const { data, error } = await supabase
        .from("UserTransaction")
        .select(`
                id,
                amount,
                date,
                notes,
                type_id,
                category_id,

                TransactionType (
                TransactionTypeTranslation!inner (
                    label,
                    language_id
                )
                ),

                BudgetTransactionCategory (
                BudgetTransactionCategoryTranslation!inner (
                    translation,
                    language_id
                )
                ),

                TransactionSubCategory (
                TransactionSubCategoryTranslation!inner (
                    subcategory_name,
                    language_id
                )
                )
            `)
        .eq("user_id", userId)
        .eq("TransactionType.TransactionTypeTranslation.language_id", lanId)
        .eq("BudgetTransactionCategory.BudgetTransactionCategoryTranslation.language_id", lanId)
        .eq("TransactionSubCategory.TransactionSubCategoryTranslation.language_id", lanId);

    const rows = data.map(tx => ({
        id: tx.id,
        type: tx.TransactionType?.TransactionTypeTranslation?.[0]?.label,
        category: tx.BudgetTransactionCategory?.BudgetTransactionCategoryTranslation?.[0]?.translation,
        categoryId: tx.category_id,
        subCategory: tx.TransactionSubCategory?.TransactionSubCategoryTranslation?.[0]?.subcategory_name,
        amount: tx.amount,
        date: tx.date,
        notes: tx.notes,
        typeId: tx.type_id
    }));

    return { rows, error };
}

export async function GET(request) {
    try {

        const { searchParams } = new URL(request.url);
        const lanId = searchParams.get('lanId');

        if (!lanId) {
            return NextResponse.json(
                { error: 'Language ID not found from get request' },
                { status: 500 }
            )
        }

        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthroized' },
                { status: 401 }
            )
        }

        const { rows, error } = await fetchTransactions(session?.user?.id, lanId);

        if (error) throw error;

        return NextResponse.json({
            transactions: rows,
        });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const session = await auth();
        if (!session) {
            return NextResponse.json(
                { error: 'Unauthroized' },
                { status: 401 }
            )
        }
        const idsToDelete = await request.json();
        const { data, error } = await supabase
            .from('UserTransaction')
            .delete()
            .in('id', idsToDelete);

        if (error) throw error;

        return NextResponse.json(
            { success: true, data },
            { status: 201 }
        );

    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        );
    }
}

