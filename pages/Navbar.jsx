import Image from "next/image"
import Link from "next/link"
const Page1 = () => {
  return (
    <div>
        <div>
          <div>
            <div className="flex items-center">
              <div className="ms-16 pt-4">
                <Image 
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-white text-xl ms-10 mt-3" >AICTE IDEA Lab LNCT</h3>
              <div className="text-white font-mono text-xl flex gap-6 ms-auto me-40 ">
                <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">Home</p>
                <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">About Us</p>
                <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">Gallery</p>
                <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">Events</p>
                <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">Projects</p>
                <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">Contact Us</p>
              </div>
            </div>          
            
          </div>
        </div>
    </div>
  ) 
}

export default Page1