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
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    // Delete all user data
    const [tRes, sRes, gRes, bRes] = await Promise.all([
      supabase.from("UserTransaction").delete().eq("user_id", userId),
      supabase.from("UserSaving").delete().eq("user_id", userId),
      supabase.from("UserGoal").delete().eq("user_id", userId),
      supabase.from("UserBudget").delete().eq("user_id", userId),
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
      { message: "All user data reset successfully 🧹" },
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
