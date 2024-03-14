import { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const config  = {
   providers: [Google]
} 

export const {handlers, auth, signIn, signOut} = NextAuth(config);