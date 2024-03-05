import mongoose from "mongoose"

const formResponseSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    phone: String,
    pitch: {
        type: String,
        required: [true, "Pitch is required"],
    },
    iot: String,
    dev: String,
    ui: String
},
{
    timestamps: true
})

const FormResponse = mongoose.models.FormResponse || mongoose.model("FormResponse", formResponseSchema)

export default FormResponse