import connectDB from "@/libs/mongodb"
import Event from "@/models/eventSchema"
import { NextResponse } from "next/server"

export async function GET(request, {params: {id}}) {
    try {
      await connectDB()
      const eventData = await Event.findOne({_id: id})
      return NextResponse.json(eventData)
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
  