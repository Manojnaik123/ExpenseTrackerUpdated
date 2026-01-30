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
        const [userBudgetsRes, budgetsCategoryTranslationRes] = await Promise.all([
            supabase.from("UserBudget").select("*"),
            supabase.from("BudgetTransactionCategoryTranslation").select("*"),
        ]);

        if (userBudgetsRes.error || budgetsCategoryTranslationRes.error) {
            throw new Error("Supabase fetch failed");
        }

        const userBudgets = userBudgetsRes.data;
        const categoryTranslations = budgetsCategoryTranslationRes.data;

        // user budgets 
        const budgets = userBudgets.flatMap(tx =>
            categoryTranslations
                .filter(t => t.category_id === tx.budget_category_id)
                .map(t => ({
                    id: tx.id,
                    lanId: t.language_id,
                    title: tx.title,
                    category: t.translation,
                    amount: tx.amount,
                    date: tx.date,
                    amountSpent: tx.amountSpent,
                    categoryId: tx.budget_category_id,
                }))
        );

        return NextResponse.json({
            budgets: budgets
        });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
