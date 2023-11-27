import '../app/globals.css'
import EventsCardComp from './EventsCardComp'
const Events = () => {
  return ( 
    <div className="bg-gray-900 text-white h-max ">    
      <h1 className="text-4xl font-mono p-7">Upcoming Events</h1>
      <div className='flex max-sm:flex-wrap'>
          <EventsCardComp/>
          <EventsCardComp/>
          <EventsCardComp/>
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