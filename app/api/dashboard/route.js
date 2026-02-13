import { transaction } from '@/lib/icons';
import { serverSideTransactionDataValidator } from '@/util/form-validation';
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { auth } from '@/auth';
import { fetchTransactions } from '../transactions/route';
import { fetchBudgets } from '../budgets/route';
import { fetchGoals } from '../goals/route';
import { fetchSavings } from '../savings/route';

const supabase = createClient(
    "https://oikjefdnymfghsbtznub.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2plZmRueW1mZ2hzYnR6bnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NzksImV4cCI6MjA4NDc1NDc3OX0.AH-V3gFKSX564PGltXn3IE2ieZ6RU___oK5xCtGVkgI"
)

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

        // transactions 
        const { rows: transactions, error: transactionsError } = await fetchTransactions(session?.user?.id, lanId);

        // goals 
        const goals = await fetchGoals(session?.user?.id, lanId);

        // savings 
        const savings = await fetchSavings(session?.user?.id, lanId);

        if (transactionsError || '') throw error;

        return NextResponse.json({
            transactions: transactions,
            goals: goals,
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

