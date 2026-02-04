import { transaction } from '@/lib/icons';
import { serverSideTransactionDataValidator } from '@/util/form-validation';
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
    "https://oikjefdnymfghsbtznub.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2plZmRueW1mZ2hzYnR6bnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NzksImV4cCI6MjA4NDc1NDc3OX0.AH-V3gFKSX564PGltXn3IE2ieZ6RU___oK5xCtGVkgI"
)

export async function GET() {
    try {
        const [userTransactionsRes, typesTranslationsRes, categoryTranslationRes, subCategoryRes, subCategoryTranslationsRes] = await Promise.all([
            supabase.from("UserTransaction").select("*"),
            supabase.from("TransactionTypeTranslation").select("*"),
            supabase.from("BudgetTransactionCategoryTranslation").select("*"),
            supabase.from("TransactionSubCategory").select("*"),
            supabase.from("TransactionSubCategoryTranslation").select("*"),
        ]);

        if (userTransactionsRes.error || typesTranslationsRes.error) {
            throw new Error("Supabase fetch failed");
        }

        const userTransaction = userTransactionsRes.data;
        const typesTranslations = typesTranslationsRes.data;

        const categoryTranslations = categoryTranslationRes.data;
        const subCategory = subCategoryRes.data;
        const subCategoryTranslations = subCategoryTranslationsRes.data;

        // user transactions 
        const transactions = userTransaction.flatMap(tx =>
            typesTranslations
                .filter(t => t.transaction_type_id === tx.type_id)
                .map(t => ({
                    id: tx.id,
                    lanId: t.language_id,
                    translation: t.label,
                    amount: tx.amount,
                    categoryId: tx.category_id,
                    subCategoryId: tx.subcategory_id,
                    date: tx.date,
                    notes: tx.notes,
                    typeId: tx.type_id,
                }))
        );

        const newTransaction = transactions.flatMap(tx =>
            categoryTranslations
                .filter(c => c.category_id === tx.categoryId && c.language_id === tx.lanId)
                .map(t => ({
                    id: tx.id,
                    lanId: tx.lanId,
                    type: tx.translation,
                    category: t.translation, // 
                    subCategoryId: tx.subCategoryId,
                    amount: tx.amount,
                    date: tx.date,
                    notes: tx.notes,
                    typeId: tx.typeId
                })));

        const updatedTransaction = newTransaction.flatMap(tx =>
            subCategoryTranslations
                .filter(s => s.subcategory_id === tx.subCategoryId && s.language_id === tx.lanId)
                .map(t => ({
                    id: tx.id,
                    lanId: tx.lanId,
                    type: tx.type,
                    category: tx.category,
                    subCategory: t.subcategory_name,
                    amount: tx.amount,
                    date: tx.date,
                    notes: tx.notes,
                    typeId: tx.typeId
                }))
        )

        return NextResponse.json({
            transactions: updatedTransaction,
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


/**
 * 
 *  const body = await request.json();
        const { typeId, categoryId, subCategoryId, amount, date, notes } = body;

        const errors = serverSideTransactionDataValidator({
            typeId,
            categoryId,
            subCategoryId,
            amount,
            date,
            notes
        });

        if (Object.values(errors).some(Boolean)) {
            return NextResponse.json(
                { error: true, errors },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from("UserTransaction")
            .insert([
                {
                    type_id: typeId,
                    category_id: categoryId,
                    subcategory_id: subCategoryId,
                    date,
                    amount,
                    notes
                },
            ])
            .select()
            .single();

 */