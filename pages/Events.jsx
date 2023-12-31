"use client"
import '../app/globals.css'
import Link from "next/link"
import data from './data'
import EventsCardComp from './EventsCardComp'
const Events = () => {
  const events = data.map(item => {
    return (
      <EventsCardComp 
        key={item.id}
        {...item}
      />
    )
  })
  return ( 
    <div className="bg-gray-900 text-white h-max w-fit ">   
      <div className='flex justify-between items-center max-sm:flex-wrap max-sm:w-[35rem] '>
        <h1 className="text-4xl font-mono p-7">Upcoming Events</h1>
        <button className='border-2 rounded w-24 bg-[#111827] p-1 me-8 hover:bg-indigo-900'>
          <Link href="/" >Home</Link>
        </button> 
      </div>
      <div className='flex flex-wrap'>
          {events}
      </div>
      <h1 className="text-4xl font-mono p-7">Past Events</h1>
      <div className='flex max-sm:flex-wrap'>
          <EventsCardComp/>
          <EventsCardComp/>
          <EventsCardComp/>
      </div>
    </div>
  )
}

export default Events