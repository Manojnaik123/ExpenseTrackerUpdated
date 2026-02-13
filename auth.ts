import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://oikjefdnymfghsbtznub.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2plZmRueW1mZ2hzYnR6bnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NzksImV4cCI6MjA4NDc1NDc3OX0.AH-V3gFKSX564PGltXn3IE2ieZ6RU___oK5xCtGVkgI"
)

console.log('`process.env.GOOGLE_CLIENT_ID`');
console.log(process.env.GOOGLE_CLIENT_ID);


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      // Check if the user already exists
      const { data, error } = await supabase
        .from("User")
        .select("*")
        .eq("email", user.email)
        .single();

      console.log('-------data--error-------');

      console.log(data);
      console.log(error);

      console.log('-------data--error-------');


      if (!data) {
        await supabase.from("User").insert({
          name: user.name,
          email: user.email,
          image: user.image,
          provider: "google",
          provider_account_id: account?.providerAccountId,
        });
      }
      return true; // allow sign-in
    },

    async session({ session, token }) {
      const { data } = await supabase
        .from("User")
        .select("id")
        .eq("email", session.user.email)
        .single();
      session.user.id = data?.id;
      return session;
    },
  },
})