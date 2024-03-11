import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className='text-white' id='team'>
        <div className="flex flex-col text-7xl font-[Montserrat] pt-20 leading-normal justify-center items-center">Key People & Contributors
        <div className="flex flex-col justify-center ">
              <Image className='w-[22rem] h-[33rem] '
                  src="/me.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Dr. Vinay Kumar Sahu</h2>
              <h3 className="text-2xl">Cheif Mentor</h3>
            </div> 
          <div className="w-full flex justify-evenly items-center">
            <div className="flex flex-col justify-center ">
              <Image className='w-[22rem] h-[33rem] '
                  src="/me.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Dr. Anand Singh </h2>
              <h3 className="text-2xl">Co-ordinator</h3>
            </div>  
            <div className="flex flex-col justify-center ">
              <Image className='w-[22rem] h-[33rem] '
                  src="/me.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Mr. Siju George</h2>
              <h3 className="text-2xl">Co-ordinator</h3>
            </div> 
            <div className="flex flex-col justify-center">
              <Image className='w-[22rem] h-[33rem]  '
                  src="/me.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Another Sir</h2>
              <h3 className="text-2xl">Co-ordinator</h3>
            </div>  
          </div>
          <div className="w-full flex justify-evenly items-center">
            <div className="flex flex-col justify-center ">
              <Image className='w-[22rem] h-[33rem] '
                  src="/me.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Utkarsh Bajpai</h2>
              <h3 className="text-2xl">Full Stack Developer</h3>
            </div>  
            <div className="flex flex-col justify-center">
              <Image className='w-[22rem] h-[33rem]  '
                  src="/me.png"    
                  width={200}
                  height={100}
                  alt="me"
              />
              <h2 className="text-2xl font-bold">Siddhant Jain</h2>
              <h3 className="text-2xl">Full Stack Developer</h3>
            </div>  
          </div>
        
        </div>
    </div>
  )
}

export default Team