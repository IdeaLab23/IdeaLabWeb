"use client"
import React from 'react'


const page = () => {
    const [title, setEventTitle] = React.useState('')
    const [desc, setEventDesc] = React.useState('')
    const [date, setEventDate] = React.useState('')
    const [time, setEventTime] = React.useState('')
    const [seats, setEventSeats] = React.useState('')
    const submitHandler = async (e) => {
        e.preventDefault()
        const event = {
            title,
            desc,
            date,
            time,
            seats
        }
        const res = await fetch('/api/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        eval(alert("Event created successfully"))
    }
  return (
    <div className='flex flex-col justify-center items-center bg-black max-sm:w-[100vw] '>
        <h1 className="xl:text-[2rem] font-bold text-white leading-[4rem] pt-16 max-sm:text-[3rem] max-sm:leading-[5rem] max-sm:my-9 max-sm:w-[50rem]  max-sm:text-center ">Create Event</h1>  
        <form onSubmit={submitHandler} >
            <div>
                <label className='text-2xl' htmlFor="title">Event Title</label>
                <input className='w-full h-[4.5rem] my-4 px-4 text-lg text-white placeholder-[#959595] bg-[#1D1E24] rounded-sm border-[1px] border-white focus:border-2 focus:border-blue-500 focus:outline-none' type="text" name="title" id="" placeholder='Enter a title' value={title} onChange={(e) => setEventTitle(e.target.value)} />
            </div>
            <div>
                <label className='text-2xl' htmlFor="desc">Event Description</label>
                <textarea className='w-full h-[10rem] my-4 py-5 pl-4 text-lg text-white placeholder-[#959595] bg-[#1D1E24] rounded-sm border-[1px] border-white focus:border-2 focus:border-blue-500 focus:outline-none' type="text" name="desc" id="" placeholder='Enter a description' value={desc} onChange={(e) => setEventDesc(e.target.value)} />
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <label className='text-2xl' htmlFor="date">Event Date</label>
                    <input className='w-full h-[4.5rem] my-4 px-4 text-lg text-white placeholder-[#959595] bg-[#1D1E24] rounded-sm border-[1px] border-white focus:border-2 focus:border-blue-500 focus:outline-none' type="date" placeholder="dd-mm-yyyy" name="date" id="" value={date} onChange={(e) => setEventDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="time" className='text-2xl'>Event Time</label>
                    <input className='w-full h-[4.5rem] my-4 px-4 text-lg text-white placeholder-[#959595] bg-[#1D1E24] rounded-sm border-[1px] border-white focus:border-2 focus:border-blue-500 focus:outline-none' type="time" name="time" id="" value={time} onChange={(e) => setEventTime(e.target.value)} />
                </div>
            </div>
            <div>
                <label className='text-2xl' htmlFor="seats">Seats</label>
                <input className='w-full h-[4.5rem] my-4 px-4 text-lg text-white placeholder-[#959595] bg-[#1D1E24] rounded-sm border-[1px] border-white focus:border-2 focus:border-blue-500 focus:outline-none' type="number" name="seats" id="" placeholder='Enter seats' value={seats} onChange={(e) => setEventSeats(e.target.value)} />
            </div>
            <button className="w-full h-16 text-2xl my-10 bg-[#292C36] rounded-md ms-auto hover:bg-[#393b41]" type="submit">Add Event</button>
        </form>
    </div>
  )
}

export default page