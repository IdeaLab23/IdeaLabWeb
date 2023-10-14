import Image from "next/image"
import Link from "next/link"
const Page1 = () => {
  return (
    <div>
      <div className="flex items-center static">
        <div className="ms-16 pt-4">
          <Image 
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <h3 className="text-white text-xl ms-6 mt-3" >AICTE IDEA Lab LNCT</h3>
        <div className="text-white font-mono text-lg flex gap-6 ms-auto me-24">
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="/">Home</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="#aboutUs">About Us</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="#facilities">Our Facilities</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="/">Gallery</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="/">Events</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="/">Projects</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="#contact">Contact Us</Link>
          </p>
        </div>
      </div>          
    </div>
  ) 
}

export default Page1