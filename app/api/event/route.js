import connectDB from "@/libs/mongodb"
import Event from "@/models/eventSchema"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await connectDB()
    const eventsData = await Event.find({})
    return NextResponse.json(eventsData)
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create event",
      error: error
    },
    {
      status: 500
    })
  }
}

export async function POST(request) {
  try {
    const { title, desc, date, seats } = await request.json()
    const newEvent = new Event({
      title,
      desc,
      date,
      seats
    })
    await connectDB()
    await Event.create(newEvent)
    return NextResponse.json({
      message: "Event created successfully"
    },
    {
      status: 201
    })
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create event",
      error: error
    },
    {
      status: 500
    })
  }
}