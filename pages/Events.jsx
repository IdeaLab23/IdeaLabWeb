import getEvents from '@/app/controllers/getEvents'
import '../app/globals.css'
import Link from "next/link"
import React from 'react'
import EventsCardComp from './EventsCardComp'

const Events = () => {
  const [events, setEvents] = React.useState([])
  React.useEffect( () => {
    async function fetchEvents() {
      try {
        const eventsData = await getEvents()
        setEvents(eventsData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchEvents()
  }, [])
  console.log(events);  
  const fetchedEvents = events.map( event => {
    return (
      <EventsCardComp 
        key={event._id}
        title={event.title}
        desc={event.desc}
        date={event.date}
        time={event.time}
        seats={event.seats}
        link={event.link}
      />
    )
  })

  return ( 
    <div className="bg-gray-900 text-white min-h-screen w-full ">   
      <div className='flex justify-between items-center max-sm:flex-wrap max-sm:w-[25rem] '>
        <h1 className="text-4xl font-mono p-7">Upcoming Events</h1>
        <button className='border-2 rounded w-24 bg-[#111827] p-1 me-8 hover:bg-indigo-900 max-sm:ms-[10rem]'>
          <Link href="/">Home</Link>
        </button> 
      </div>
      <div className='flex flex-wrap'>
          {fetchedEvents}
      </div>
    </div>
  )
}

export default Events