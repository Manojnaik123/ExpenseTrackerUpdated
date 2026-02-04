import { serverSideSavingDataValidator } from '@/util/form-validation';
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

        var userSaving;

        if (id > 0) {
            const [userBudgetRes] = await Promise.all([
                supabase.from("UserSaving").select("*")
                    .eq("id", id),
            ]);
            userSaving = userBudgetRes.data;
        }

        console.log(userSaving);


        const [typesRes, typesTranslationsRes, languagesRes] = await Promise.all([
            supabase.from("SavingType").select("*"),
            supabase.from("SavingTypeTranslation").select("*"),
            supabase.from("Language").select("*"),
        ]);

        if (typesRes.error || typesTranslationsRes.error || languagesRes.error) {
            throw new Error("Supabase fetch failed");
        }

        const types = typesRes.data;
        const typesTranslations = typesTranslationsRes.data;
        const languages = languagesRes.data;

        // saving types 
        const transTypes = typesTranslations.map(tt => {
            const type = types.find(t => t.id === tt.saving_type_id);
            const language = languages.find(l => l.id === tt.language_id);
            return {
                id: tt.saving_type_id,
                lanid: tt.language_id,
                translation: tt.label,
            };
        });

        return NextResponse.json({
            types: transTypes,
            userSaving: userSaving,
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
        const { id, name, typeId, amount, date, notes } = body;

        const errors = serverSideSavingDataValidator({
            name,
            typeId,
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
            const { data, error } = await supabase
                .from("UserSaving")
                .update([
                    {
                        name: name,
                        saving_type_id: typeId,
                        amount,
                        date,
                        notes
                    },
                ])
                .eq("id", id)
                .select()
                .single();

            if (error) throw error;
            result = data;

        } else {
            const { data, error } = await supabase
                .from("UserSaving")
                .insert([
                    {
                        name: name,
                        saving_type_id: typeId,
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