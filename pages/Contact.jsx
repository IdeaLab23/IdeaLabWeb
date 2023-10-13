import Image from "next/image"

const Contact = () => {
  return (
    <div className="pt-48 pb-32 text-white bg-black">
      <div className="z-0 absolute top-[324.3rem] w-full h-[300px]">
        <Image 
          src="/Ellipse-BG.png"
          alt="rfe"
          layout="fill"
          objectFit="cover"
        />
      </div>
        <h3 className='text-7xl font-[Montserrat] w-[52rem] leading-normal p-5'>We can't wait to hear your ideas! Contact us.</h3>
        
        <button className="w-52 h-14 bg-[#7B8CE5] rounded-full mt-5 text-lg font-mono hover:bg-white hover:text-[#7B8CE5]">Discover More</button>  
    </div>
  )
}

export default Contact