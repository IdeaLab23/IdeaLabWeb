import connectDB from "@/libs/mongodb"
import FormResponse from "@/models/formResponsesSchema"
import { NextResponse } from "next/server"

//GET all form responses
export async function GET() {
  try {
    await connectDB()
    const formResponsesData = await FormResponse.find({}).sort({"createdAt" : "desc"})
    return NextResponse.json(formResponsesData)
  } catch (error) {
    return NextResponse.json({
      message: "Failed to get form responses",
      error: error
    },
    {
      status: 500
    })
  }
}

//POST new form response
export async function POST(request) {
  try {
    const { name, email, phone, pitch, iot, dev, ui } = await request.json()
    const newFormResponse = new FormResponse({
      name,
      email,
      phone,
      pitch,
      iot,
      dev,
      ui
    })
    await connectDB()
    await FormResponse.create(newFormResponse)
    return NextResponse.json({
      message: "Form response created successfully"
    },
    {
      status: 201
    })
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create form response",
      error: error
    },
    {
      status: 500
    })
  }
}