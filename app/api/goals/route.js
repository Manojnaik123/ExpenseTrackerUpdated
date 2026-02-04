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
        const [userGoalsRes, goalCategoryRes, goalPriorityRes] = await Promise.all([
            supabase.from("UserGoal").select("*"),
            supabase.from("GoalCategoryTranslation").select("*"),
            supabase.from("GoalPriorityTranslation").select("*"),

        ]);

        if (userGoalsRes.error || goalCategoryRes.error || goalPriorityRes.error) {
            throw new Error("Supabase fetch failed");
        }

        const userGoals = userGoalsRes.data;
        const goalCategories = goalCategoryRes.data;
        const goalPriorities = goalPriorityRes.data;

        // user goals
        const goals = userGoals.flatMap(ug =>
            goalCategories
                .filter(c => c.goal_category_id === ug.goal_category_id)
                .map(t => ({
                    id: ug.id,
                    lanId: t.language_id, 
                    title: ug.title,
                    category: t.label,
                    categoryId: ug.goal_category_id,
                    amount: ug.amount,
                    priorityId: ug.priority_id,
                    fund:ug.fund,
                    date: ug.date,
                }))
        );

        // updated goals 
        const updatedGoals = goals.flatMap(ug =>
            goalPriorities
                .filter(c => c.priority_id === ug.priorityId && ug.lanId === c.language_id)
                .map(t => ({
                    id: ug.id,
                    lanId: ug.lanId,
                    title: ug.title,
                    category: ug.category,
                    categoryId: ug.categoryId,
                    amount: ug.amount,
                    priority: t.label,
                    priorityId: ug.priorityId,
                    date: ug.date,
                    fund:ug.fund
                }))
        );

        return NextResponse.json({
            goals: updatedGoals,
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

        const id = await request.json();

        console.log(id);
        

        const { data, error } = await supabase
            .from('UserGoal')
            .delete()
            .eq('id', id)
            .select();

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



// export async function POST(request) {
//     try {
//         const body = await request.json();
//         const { typeId, categoryId, subCategoryId, amount, date, notes } = body;

//         const errors = serverSideTransactionDataValidator({
//             typeId,
//             categoryId,
//             subCategoryId,
//             amount,
//             date,
//             notes
//         });

//         if (Object.values(errors).some(Boolean)) {
//             return NextResponse.json(
//                 { error: true, errors },
//                 { status: 400 }
//             );
//         }

//         const { data, error } = await supabase
//             .from("UserTransaction")
//             .insert([
//                 {
//                     type_id: typeId,
//                     category_id: categoryId,
//                     subcategory_id: subCategoryId,
//                     date,
//                     amount,
//                     notes
//                 },
//             ])
//             .select()
//             .single();

//         if (error) throw error;

//         return NextResponse.json(
//             { success: true, data },
//             { status: 201 }
//         );

//     } catch (err) {
//         return NextResponse.json(
//             { error: err.message },
//             { status: 500 }
//         );
//     }
// }