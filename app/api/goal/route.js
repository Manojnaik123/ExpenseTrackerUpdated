import { serverSideGoalDataValidator } from '@/util/form-validation';
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

        console.log(id);

        var userGoal;

        if (id > 0) {
            const [userGoalRes] = await Promise.all([
                supabase.from("UserGoal").select("*")
                    .eq("id", id),
            ]);
            userGoal = userGoalRes.data;
            userGoal[0].fund = '';
        }

        const [prioritiesRes, prioritiesTranslationsRes, languagesRes, categoriesRes, catTranslationsRes] = await Promise.all([
            supabase.from("GoalPriority").select("*"),
            supabase.from("GoalPriorityTranslation").select("*"),
            supabase.from("Language").select("*"),

            supabase.from("GoalCategory").select("*"),
            supabase.from("GoalCategoryTranslation").select("*"),
        ]);

        if (prioritiesRes.error || prioritiesTranslationsRes.error || prioritiesTranslationsRes.error ||
            categoriesRes.error || catTranslationsRes.error
        ) {
            throw new Error("Supabase fetch failed");
        }

        const priorities = prioritiesRes.data;
        const prioritiesTranslation = prioritiesTranslationsRes.data;
        const languages = languagesRes.data;

        const categories = categoriesRes.data;
        const categoryTranslations = catTranslationsRes.data;

        // priorities
        const prioritiesData = prioritiesTranslation.map(tt => {
            const type = priorities.find(t => t.id === tt.priority_id);
            const language = languages.find(l => l.id === tt.language_id);
            return {
                id: tt.priority_id,
                lanid: tt.language_id,
                translation: tt.label,
            };
        });

        // categories 
        const categoriesData = categoryTranslations.map(tt => {
            const type = categories.find(t => t.id === tt.goal_category_id);
            const language = languages.find(l => l.id === tt.language_id);
            return {
                id: tt.goal_category_id,
                lanid: tt.language_id,
                translation: tt.label,
            };
        });

        return NextResponse.json({
            priorities: prioritiesData,
            categories: categoriesData,
            userGoal: userGoal
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
        const { id, title, categoryId, amount, priorityId, date, remarks, fund } = body;

        const errors = serverSideGoalDataValidator({
            title,
            categoryId,
            amount,
            priorityId,
            date,
            remarks
        });

        if (Object.values(errors).some(Boolean)) {
            return NextResponse.json(
                { error: true, errors },
                { status: 400 }
            );
        }

        let result;

        if (id && id > 0) {

             const { data: existingRow, error: fetchError } = await supabase
                .from("UserGoal")
                .select("fund")
                .eq("id", id)
                .single();

            const updatedAmountSpent = Number(existingRow.fund || 0) + Number(fund);

            const { data, error } = await supabase
                .from("UserGoal")
                .update([
                    {
                        title,
                        goal_category_id: categoryId,
                        amount,
                        priority_id: priorityId,
                        date,
                        remarks,
                        fund: updatedAmountSpent
                    },
                ])
                .eq("id", id)
                .select()
                .single();

            if (error) throw error;
            result = data;
        } else {
            const { data, error } = await supabase
                .from("UserGoal")
                .insert([
                    {
                        title,
                        goal_category_id: categoryId,
                        amount,
                        priority_id: priorityId,
                        date,
                        remarks
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