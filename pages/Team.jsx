import Image from 'next/image'
import React from 'react'
import '../app/globals.css'

const Team = () => {
  return (
    <div className='text-white bg-black sm:max-sm:w[80%]'>
        <div className="flex flex-col text-7xl font-[Montserrat] pt-20 leading-normal justify-center items-center max-sm:text-5xl max-sm:text-center max-sm:leading-[4rem] ">Key People & Contributors
          <div className="w-full mt-5 flex justify-evenly items-center max-sm:flex-col max-sm:gap-10 ">  
            <div className="flex flex-col justify-center items-center ">
              <Image className='w-[15rem] h-[15rem] '
                  src="/jai.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Shri. Jai Narain Chouksey</h2>
              <h3 className="text-2xl">Chairman</h3>
            </div> 
            <div className="flex flex-col justify-center items-center">
              <Image className='w-[15rem] h-[15rem]  '
                  src="/poonam.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Smt. Poonam Chouksey</h2>
              <h3 className="text-2xl">Vice Chairperson</h3>
            </div>  
            <div className="flex flex-col justify-center items-center ">
              <Image className='w-[15rem] h-[15rem] '
                  src="/anupam.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Dr. Anupam Chouksey</h2>
              <h3 className="text-2xl">Secretary</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-10 ">
            <Image className='w-[15rem] h-[15rem] '
                src="/ashok rai.png"    
                width={200}
                height={100}
                alt="me"
            />
            <h2 className="text-2xl font-bold">Dr. Ashok Kumar Rai</h2>
            <h3 className="text-2xl">Director Administration</h3>
          </div> 
          <div className="flex flex-col justify-center items-center mb-10">
              <Image className='w-[15rem] h-[15rem] '
                  src="/vinay.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Dr. Vinay Kumar Sahu</h2>
              <h3 className="text-2xl">Chief Mentor</h3>
          </div> 
          <div className="w-full flex justify-evenly items-center max-sm:flex-col max-sm:gap-10 pb-10 ">
            <div className="flex flex-col justify-center items-center">
              <Image className='w-[15rem] h-[15rem]  '
                  src="/anand.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Dr. Anand Singh</h2>
              <h3 className="text-2xl">Coordinator</h3>
            </div>  
            <div className="flex flex-col justify-center items-center">
              <Image className='w-[15rem] h-[15rem]  '
                  src="/shravan.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Dr. Shravan Kumar Sable</h2>
              <h3 className="text-2xl">Co-coordinator</h3>
            </div> 
            <div className="flex flex-col justify-center items-center">
              <Image className='w-[15rem] h-[15rem]'
                  src="/siju.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Prof. Siju George</h2>
              <h3 className="text-2xl">Tech Guru</h3>
            </div>  
          </div>
        
        </div>
    </div>
  )
}

export default Team