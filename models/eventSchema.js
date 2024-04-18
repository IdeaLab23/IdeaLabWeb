import mongoose from "mongoose"

const eventSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    desc: String,
    date: {
        type: String,
        required: [true, "Date is required"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    seats: Number,
    link: String,
},
{
    timestamps: true
})

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema)

export default Event