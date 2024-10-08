import connectDB from "@/libs/mongodb"
import Event from "@/models/eventSchema"
import { NextResponse } from "next/server"

//GET all events
export async function GET() {
  try {
    await connectDB()
    const eventsData = await Event.find({}).sort({"createdAt" : "desc"})
    return NextResponse.json(eventsData)
  } catch (error) {
    return NextResponse.json({
      message: "Failed to get event",
      error: error
    },
    {
      status: 500
    })
  }
}

//POST new event
export async function POST(request) {
  try {
    const { title, desc, date, time, seats, link } = await request.json()
    const newEvent = new Event({
      title,
      desc,
      date,
      time,
      seats,
      link
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

//DELETE event
export async function DELETE(request) {
  try {
    const id = await request.nextUrl.searchParams.get("id")
    await connectDB() 
    await Event.findOneAndDelete({_id: id})
    return NextResponse.json({
      message: "Event deleted successfully"
    },
    {
      status: 200
    })
  } catch (error) {
    return NextResponse.json({
      message: "Failed to delete event",
      error: error
    },
    {
      status: 500
    })
  }
}