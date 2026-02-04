import { serverSideBudgetDataValidator } from '@/util/form-validation';
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
    "https://oikjefdnymfghsbtznub.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2plZmRueW1mZ2hzYnR6bnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NzksImV4cCI6MjA4NDc1NDc3OX0.AH-V3gFKSX564PGltXn3IE2ieZ6RU___oK5xCtGVkgI"
)

export async function GET(req) {
    try {

        const { searchParams } = new URL(req.url);

        const id = searchParams.get('id');

        var userBudget;

        if (id > 0) {
            const [userBudgetRes] = await Promise.all([
                supabase.from("UserBudget").select("*")
                    .eq("id", id),
            ]);
            userBudget = userBudgetRes.data;
            userBudget[0].amountSpent = '';
            console.log(userBudget);

        }

        const [languagesRes, categoriesRes, translationsRes] = await Promise.all([
            supabase.from("Language").select("*"),
            supabase.from("BudgetTransactionCategory").select("*"),
            supabase.from("BudgetTransactionCategoryTranslation").select("*"),
        ]);

        if (languagesRes.error || categoriesRes.error || translationsRes.error) {
            throw new Error("Supabase fetch failed");
        }

        const languages = languagesRes.data;
        const categories = categoriesRes.data;
        const translations = translationsRes.data;

        // categories 
        const transCategories = translations.map(t => {
            const category = categories.find(c => c.category_id === t.category_id);
            const language = languages.find(l => l.id === t.language_id);

            return {
                id: t.category_id,
                lanid: t.language_id,
                translation: t.translation,
            };
        });

        return NextResponse.json({
            categories: transCategories,
            userBudget: userBudget,
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
        const body = await request.json();
        console.log(body);
        const { id, title, categoryId, amount, date, notes, amountSpent } = body;

        const errors = serverSideBudgetDataValidator({
            title,
            categoryId,
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

        let result;

        if (id && id > 0) {

            // get existing row 
            const { data: existingRow, error: fetchError } = await supabase
                .from("UserBudget")
                .select("amountSpent")
                .eq("id", id)
                .single();

            const updatedAmountSpent = Number(existingRow.amountSpent || 0) + Number(amountSpent);


            const { data, error } = await supabase
                .from("UserBudget")
                .update({
                    title,
                    budget_category_id: categoryId,
                    amount,
                    date,
                    notes,
                    amountSpent: updatedAmountSpent,
                })
                .eq("id", id)
                .select()
                .single();
            
            if (error) throw error;
            result = data;
        } else {
            const { data, error } = await supabase
                .from("UserBudget")
                .insert([
                    {
                        title,
                        budget_category_id: categoryId,
                        amount,
                        date,
                        notes
                    },
                ])
                .select()
                .single();

            if (error) throw error;
            result = data;
        }

        return NextResponse.json(
            { success: true, result },
            { status: 201 }
        );

    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        );
    }
}