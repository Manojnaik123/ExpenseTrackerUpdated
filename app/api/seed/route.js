import { auth } from "@/auth";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
    "https://oikjefdnymfghsbtznub.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2plZmRueW1mZ2hzYnR6bnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NzksImV4cCI6MjA4NDc1NDc3OX0.AH-V3gFKSX564PGltXn3IE2ieZ6RU___oK5xCtGVkgI"
)

export async function POST() {
    try {

        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthroized' },
                { status: 401 }
            )
        }

        const userId = session.user.id;
        const now = new Date();

        const format = (date) => date.toISOString();

        const today = format(new Date());

        const yesterdayDate = new Date();
        yesterdayDate.setDate(now.getDate() - 1);
        const yesterday = format(yesterdayDate);

        const randomCurrentMonthDate = () => {
            const start = new Date(now.getFullYear(), now.getMonth(), 1);
            const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
            const randomDay =
                Math.floor(Math.random() * (end.getDate() - 1)) + 1;

            return format(
                new Date(now.getFullYear(), now.getMonth(), randomDay)
            );
        };

        const futureDate = (days) => {
            const d = new Date();
            d.setDate(now.getDate() + days);
            return format(d);
        };

        const pastDate = (days) => {
            const d = new Date();
            d.setDate(now.getDate() - days);
            return format(d);
        };

        // =============================
        // TRANSACTIONS
        // =============================

        const transactions = [
            { amount: 1200, date: today, type_id: 2, category_id: 4, subcategory_id: 7 },
            { amount: 800, date: today, type_id: 1, category_id: 2, subcategory_id: 3 },
            { amount: 300, date: yesterday, type_id: 2, category_id: 5, subcategory_id: 9 },
            { amount: 300, date: yesterday, type_id: 1, category_id: 7, subcategory_id: 14 },
            { amount: 2200, date: randomCurrentMonthDate(), type_id: 1, category_id: 3, subcategory_id: 5 },
            { amount: 1000, date: randomCurrentMonthDate(), type_id: 2, category_id: 6, subcategory_id: 11 },
        ].map((t) => ({
            ...t,
            user_id: userId,
            notes: "Seed data",
        }));

        // =============================
        // SAVINGS (same date pattern)
        // =============================

        const savings = [
            { name: "Emergency Fund", amount: 5000, date: today, saving_type_id: 1 },
            { name: "Bike Fund", amount: 3000, date: today, saving_type_id: 2 },
            { name: "Trip Fund", amount: 2000, date: yesterday, saving_type_id: 1 },
            { name: "Festival Saving", amount: 4000, date: randomCurrentMonthDate(), saving_type_id: 2 },
            { name: "Investment Saving", amount: 3500, date: randomCurrentMonthDate(), saving_type_id: 1 },
        ].map((s) => ({
            ...s,
            user_id: userId,
            notes: "Seed data",
        }));

        // =============================
        // GOALS (3 future, 2 past)
        // =============================

        const goals = [
            { title: "Buy Laptop", amount: 80000, date: futureDate(10), goal_category_id: 7, priority_id: 1 },
            { title: "Goa Trip", amount: 30000, date: futureDate(20), goal_category_id: 3, priority_id: 1, fund: 10000 },
            { title: "New Phone", amount: 60000, date: futureDate(30), goal_category_id: 5, priority_id: 1, fund: 40000 },
            { title: "Old Goal", amount: 50000, date: pastDate(15), goal_category_id: 6, priority_id: 1 },
            { title: "Completed Course", amount: 15000, date: pastDate(40), goal_category_id: 11, priority_id: 1 },
        ].map((g) => ({
            ...g,
            user_id: userId,
            remarks: "Seed data",
        }));

        // =============================
        // BUDGET (same as goals pattern)
        // =============================

        const budgets = [
            { title: "Groceries Budget", amount: 10000, date: futureDate(5), budget_category_id: 1 },
            { title: "Entertainment Budget", amount: 5000, date: futureDate(12), budget_category_id: 2, amountSpent: 5100 },
            { title: "Travel Budget", amount: 15000, date: futureDate(25), budget_category_id: 3 , amountSpent: 13000},
            { title: "Old Rent Budget", amount: 12000, date: pastDate(20), budget_category_id: 4, amountSpent: 12100 },
            { title: "Old Utility Budget", amount: 4000, date: pastDate(35), budget_category_id: 5, amountSpent: 1000 },
        ].map((b) => ({
            ...b,
            user_id: userId,
            notes: "Seed data",
        }));

        // =============================
        // INSERT ALL TABLES
        // =============================

        const [tRes, sRes, gRes, bRes] = await Promise.all([
            supabase.from("UserTransaction").insert(transactions),
            supabase.from("UserSaving").insert(savings),
            supabase.from("UserGoal").insert(goals),
            supabase.from("UserBudget").insert(budgets),
        ]);

        if (tRes.error || sRes.error || gRes.error || bRes.error) {
            throw (
                tRes.error ||
                sRes.error ||
                gRes.error ||
                bRes.error
            );
        }

        return NextResponse.json(
            { message: "Seed data inserted successfully 🚀" },
            { status: 200 }
        );

    } catch (error) {
        console.log(error.message);

        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
