import connectDB from "@/libs/mongodb"
import Login from "@/models/loginSchema"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectDB()
        const user = await Login.find({})
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({
            message: "Failed to get user",
            error: error
        },
        {
            status: 500
        })
    }
}