import Image from "next/image"
const EventsCardComp = () => {
  return (
    <>
    <div className="flex p-5 ">
     <span className='border-2 rounded-xl  w-36  h-20	border-color: rgb(161 161 170); p-3 text-center font-bold' >April 14</span>
     <div className="ml-3">
      <div className="flex   justify-between font-bold ">
     <span >Q and A </span>
         <span >7:00  to 9:00</span></div>
        <span>Lorem ipsum dolor sit amet cons ecte tur adipi si cing elit. Labo riosam,  mini ma.</span>
     <Image
      src="/roboHand.jpg" width={500} alt="Image" height={10}
     ></Image>
     <div className="flex justify-between font-bold p-3 ">
      <span>21 Seats left</span>
     <button className='border-2 rounded  w-24 bg-indigo-950 '>Sign Up</button>
     </div></div></div>
     </>
  )
}

export default EventsCardComp