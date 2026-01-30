import { serverSideTransactionDataValidator } from '@/util/form-validation';
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
    "https://oikjefdnymfghsbtznub.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2plZmRueW1mZ2hzYnR6bnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NzksImV4cCI6MjA4NDc1NDc3OX0.AH-V3gFKSX564PGltXn3IE2ieZ6RU___oK5xCtGVkgI"
)

export async function GET() {
    try {
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
            const type = types.find(t => t.id === tt.transaction_type_id);
            const language = languages.find(l => l.id === tt.language_id);
            return {
                transaction_type_id: tt.transaction_type_id,
                lanid: tt.language_id,
                saving_type_name: type?.name || null, // optional, from SavingType
                translation: tt.label,          // assuming this field exists
                language_name: language?.name || null // optional, from Language
            };
        });

        // categories 
        const transCategories = translations.map(t => {
            const category = categories.find(c => c.category_id === t.category_id);
            const language = languages.find(l => l.id === t.language_id);

            return {
                category_id: t.category_id,
                lanid: t.language_id,
                category_name: category?.category_name || null,
                translation: t.translation,
                language_name: language?.name || null
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
                base_name: subcategory?.subcategory_name || null, // main subcategory name
                translation: t.subcategory_name,                  // language-specific translation
                language_name: language?.name || null
            };
        });


        return NextResponse.json({
            types: transTypes,
            categories: transCategories,
            subCategories: transSubCategories
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