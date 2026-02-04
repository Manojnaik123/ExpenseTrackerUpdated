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
        const [userSavingsRes, savingsTranslationRes] = await Promise.all([
            supabase.from("UserSaving").select("*"),
            supabase.from("SavingTypeTranslation").select("*"),
        ]);

        if (userSavingsRes.error || savingsTranslationRes.error) {
            throw new Error("Supabase fetch failed");
        }

        const userSavings = userSavingsRes.data;
        const savingsTypesTranslation = savingsTranslationRes.data;

        // user savings 
        const savings = userSavings.flatMap(us =>
            savingsTypesTranslation
                .filter(t => t.saving_type_id === us.saving_type_id)
                .map(t => ({
                    id: us.id,
                    lanId: t.language_id,
                    type: t.label,
                    typeId: us.saving_type_id,
                    name: us.name,
                    amount: us.amount,
                    date: us.date,
                    notes: us.notes,
                }))
        );
        console.log(savings.length);
        

        return NextResponse.json({
            savings: savings,
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

        console.log(idsToDelete);

        const { data, error } = await supabase
            .from('UserSaving')
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