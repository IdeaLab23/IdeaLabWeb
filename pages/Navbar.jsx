"use client"
import React from "react"
import Image from "next/legacy/image"
import Link from "next/link"
const Page1 = () => {
  const [isOpen, setIsOpen] =  React.useState(false)
  return (
    <div>
      <div className="flex items-center pt-12 max-sm:w-[100vw] max-sm:pt-20 max-sm:flex ">
        <div className="ms-16 absolute w-24 h-24 max-sm:w-[4rem] max-sm:h-[7rem] max-sm:top-10 max-sm:-left-6">
          <Image 
            src="/logo.png"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="ms-52 absolute w-48 h-[4.6rem] max-sm:w-[8rem] max-sm:h-[3rem] max-sm:top-16 max-sm:left-4">
          <Image
            src="/LNCT-Logo.png"
            alt="lnct"
            layout="fill"
            objectFit=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <div className="block ms-[22rem] xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center mt-12 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-10 w-10 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-10 w-10 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className={"text-white font-mono text-lg flex gap-6 ms-auto me-24 max-sm:hidden"}>
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
            <Link href="/Gallery">Gallery</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="/Events">Events</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="/Team">Team</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="#contact">Contact Us</Link>
          </p>
          <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto">
            <Link href="/login">Admin</Link>
          </p>
        </div>
      </div>          
      <div className={`hidden absolute bg-[#151721] max-sm:w-full max-sm:text-white max-sm:font-mono max-sm:text-xl max-sm:mt-10 max-sm:ps-10 max-sm:${isOpen ? "block" : "hidden"}`}>
        <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto max-sm:py-6">
          <Link href="/">Home</Link>
        </p>
        <hr className="w-[87%]"/>
        <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto max-sm:py-6">
          <Link href="#aboutUs">About Us</Link>
        </p>
        <hr className="w-[87%]"/>
        <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto max-sm:py-6">
          <Link href="#facilities">Our Facilities</Link>
        </p>
        <hr className="w-[87%]"/>
        <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto max-sm:py-6">
          <Link href="/Gallery">Gallery</Link>
        </p>
        <hr className="w-[87%]"/>
        <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto max-sm:py-6">
          <Link href="/Events">Events</Link>
        </p>
        <hr className="w-[87%]"/>
        <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto max-sm:py-6">
          <Link href="/Team">Team</Link>
        </p>
        <hr className="w-[87%]"/>
        <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto max-sm:py-6">
          <Link href="#contact">Contact Us</Link>
        </p>
        <hr className="w-[87%]"/>
        <p className="hover:text-[#7686DB] hover:cursor-pointer hover:underline-offset-auto max-sm:py-6">
          <Link href="/login">Admin</Link>
        </p>
        <hr className="w-[87%]"/>
      </div>
    </div>
  ) 
}

export default Page1