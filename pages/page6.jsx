import Image from "next/image"

const page6 = () => {
  return (
    <div className="pt-48 pb-32 text-center text-white bg-black justify-center">
      <div className="z-0 absolute top-[324.3rem] w-full h-[300px]">
        <Image 
          src="/Ellipse-BG.png"
          alt="rfe"
          layout="fill"
          objectFit="cover"
        />
      </div>
        <span className="block p-2" >CALL TO ACTION</span>
        <span className='block font-bold text-5xl leading-normal p-5'>Take the First Step Towards<br/> Intelligent Automation</span>
        <span className='block p-5 '>Tincidunt duis suspendisse euismod integer aenean. <br/>Suspendisse aliquet diam ut vulputate eu metus nulla facilisi. Tristique tincidunt nisi.</span>
        <button className="w-52 h-14 bg-[#7B8CE5] rounded-full mt-5 text-lg font-mono hover:bg-white hover:text-[#7B8CE5]">Discover More</button>  
    </div>
  )
}

export default page6