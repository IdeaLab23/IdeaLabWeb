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

export async function PATCH(request, {params: {id}}) {
  try {
    await connectDB()
    const {
      newTitle: title,
      newDesc: desc,
      newDate: date,
      newSeats: seats } = await request.json()
      const updatedEvent = {
        title,
        desc,
        date,
        seats
      }
      await Event.findByIdAndUpdate(id, updatedEvent)
      return NextResponse.json({
        message: "Event updated successfully",
        updatedEvent: updatedEvent
      },
      {
        status: 201
      })
  } catch (error) {
    return NextResponse.json({
      message: "Failed to update event",
      error: error
    },
    {
      stauts: 500
    })
  }
}
  