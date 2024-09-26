'use server'
import Login from "@/models/loginSchema"
import jwt from "jsonwebtoken"
import { cookies } from 'next/headers'
import Link from 'next/link'
// import { redirect } from 'next/navigation'



export default async function verTok() {
    const cookieStore = cookies()
    const theme = await cookieStore.get('token')
    try {
        const ftheme=Object.values(theme)[1];
        jwt.verify(ftheme, "siddhant", (err, decoded) => {
            if (err) {
                console.log("Can't verify, please login again")
                // sj="false"
                // redirect("/login")   
                return false
            } else {
                console.log("Successfully verified")
                return true
            }
        });
        
    }
    catch (error) {
        if (error) {
            console.log("Can't verify, please login again")
            // redirect("/login")   
            return false
        }
    }         
}
    // verTok()