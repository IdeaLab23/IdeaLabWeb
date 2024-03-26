import Image from "next/legacy/image"
const EventsCardComp = (props) => {
  return (
    <>
    <div className="flex xl:p-5 p-10">
      <span className='border-2 rounded-xl w-36 h-20 border-color: rgb(161 161 170) flex flex-col justify-center text-center font-bold p-4 '>{props.date}</span>
      <div className="ml-3">
        <div className="flex justify-between font-bold text-lg ">
          <span >{props.title}</span>
          <span >{props.time}</span>
        </div>
        <p className="text-xl pb-4">{props.desc}</p>
        <Image
          src="/roboHand.jpg" 
          width="180px" 
          height="100px"
          alt="Image" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="flex gap-5 font-bold xl:p-3 p-5 text-lg">
          <span>{props.seats}</span>
          <button className='border-2 rounded w-24 bg-[#111827] xl:p-1  max-sm: hover:bg-indigo-900'>Sign Up</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default EventsCardComp