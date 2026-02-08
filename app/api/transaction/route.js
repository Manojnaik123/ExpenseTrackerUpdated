import { serverSideTransactionDataValidator } from '@/util/form-validation';
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server';
import { auth } from '@/auth';


const supabase = createClient(
    "https://oikjefdnymfghsbtznub.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2plZmRueW1mZ2hzYnR6bnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NzksImV4cCI6MjA4NDc1NDc3OX0.AH-V3gFKSX564PGltXn3IE2ieZ6RU___oK5xCtGVkgI"
)

export async function GET(req) {
    try {

        const session = await auth();

        if (!session) {
            return NextResponse.json(
                { error: 'Unauthroized' },
                { status: 401 }
            )
        }

        // edit mode 
        const { searchParams } = new URL(req.url);

        const id = searchParams.get('id');
        const lanId = searchParams.get('lanId');

        var userTransaction;

        if (id > 0) {
            const [userTransRes] = await Promise.all([
                supabase.from("UserTransaction").select("*")
                    .eq("id", id),
            ]);
            userTransaction = userTransRes.data;
        }

        const [typesRes, typesTranslationsRes, languagesRes, categoriesRes, translationsRes,
            subcategoriesRes, subcategoryTranslationsRes
        ] = await Promise.all([
            supabase.from("TransactionType").select("*"),
            supabase.from("TransactionTypeTranslation").select("*"),
            supabase.from("Language").select("*"),

            supabase.from("BudgetTransactionCategory").select("*"),
            supabase.from("BudgetTransactionCategoryTranslation").select("*"),

            supabase.from("TransactionSubCategory").select("*"),
            supabase.from("TransactionSubCategoryTranslation").select("*"),
        ]);

        if (typesRes.error || typesTranslationsRes.error || languagesRes.error ||
            categoriesRes.error || translationsRes.error ||
            subcategoriesRes.error || subcategoryTranslationsRes.error
        ) {
            throw new Error("Supabase fetch failed");
        }

        const types = typesRes.data;
        const typesTranslations = typesTranslationsRes.data;
        const languages = languagesRes.data;

        const categories = categoriesRes.data;
        const translations = translationsRes.data;

        const subcategories = subcategoriesRes.data;
        const subcategoryTranslations = subcategoryTranslationsRes.data;

        // transaction types 
        const transTypes = typesTranslations.map(tt => {
            // const type = types.find(t => t.id === tt.transaction_type_id);
            // const language = languages.find(l => l.id === tt.language_id);
            return {
                transaction_type_id: tt.transaction_type_id,
                lanid: tt.language_id,
                translation: tt.label,          
            };
        });

        // categories 
        const transCategories = translations.map(t => {
            const category = categories.find(c => c.category_id === t.category_id);
            const language = languages.find(l => l.id === t.language_id);

            return {
                category_id: t.category_id,
                lanid: t.language_id,
                translation: t.translation,
            };
        });

        // sub categories 
        const transSubCategories = subcategoryTranslations.map(t => {
            const subcategory = subcategories.find(sc => sc.subcategory_id === t.subcategory_id);
            const language = languages.find(l => l.id === t.language_id);

            return {
                subcategory_id: t.subcategory_id,
                category_id: subcategory?.category_id || null,
                lanid: t.language_id,
                translation: t.subcategory_name,  
            };
        });

        return NextResponse.json({
            types: transTypes.filter(item => item.lanid == lanId),
            categories: transCategories.filter(item => item.lanid == lanId),
            subCategories: transSubCategories.filter(item => item.lanid == lanId),
            userTransaction: userTransaction
        });
    } catch (error) {
        console.log('reached');
        
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}


export async function POST(request) {
    try {

        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthroized' },
                { status: 401 }
            )
        }

        const body = await request.json();
        const { id, typeId, categoryId, subCategoryId, amount, date, notes } = body;
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

        let result;

        if (id && id > 0) {
            // edit
            const { data, error } = await supabase
                .from("UserTransaction")
                .update({
                    type_id: typeId,
                    category_id: categoryId,
                    subcategory_id: subCategoryId,
                    date,
                    amount,
                    notes,
                })
                .eq("id", id)
                .eq("user_id", session.user.id)
                .select()
                .single();

            if (error) throw error;
            result = data;
        } else {
            // insert
            const { data, error } = await supabase
                .from("UserTransaction")
                .insert([
                    {
                        type_id: typeId,
                        user_id: session.user.id,
                        category_id: categoryId,
                        subcategory_id: subCategoryId,
                        date,
                        amount,
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