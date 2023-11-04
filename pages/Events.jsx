import '../app/globals.css'
import EventsCardComp from './EventsCardComp'
const Events = () => {
  return ( 
    <div className="bg-gray-900 text-white h-max ">    
     <span className="text-lg p-5 "> Upcoming Events</span>
     <div className='flex'>
        <EventsCardComp/>
        <EventsCardComp/>
        <EventsCardComp/>
       
    </div>
    <span className="text-lg p-5 "> Past  Events</span>
     <div className='flex'>
    <EventsCardComp/>
        <EventsCardComp/>
        <EventsCardComp/>
       
    </div>
    </div>
  )
}

export default Events