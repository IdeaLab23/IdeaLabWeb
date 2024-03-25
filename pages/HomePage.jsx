"use client"
import Image from "next/legacy/image"
import Navbar from "@/pages/Navbar"
import React from "react"
const Page1 = () => {
  const [play, setPlay] = React.useState(false)
  return (
    <>
    <div className="-z-10 absolute xl:w-full xl:h-[1120px] w-[100vw] h-[300rem] ">
      <Image
        src="/bg.jpg"
        alt="bg"
        layout="fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <Navbar />
      <div className="flex xl:ms-56 xl:mt-20 mt-24 ms-6 ">
        <div className="text-white xl:w-[38rem] w-[10rem]  ">
          <h3 className="text-slate-200 font-mono xl:text-lg text-xl">AICTE IDEA Lab LNCT, Bhopal</h3>
          <h1 className="xl:text-6xl font-bold xl:mt-4 xl:leading-[5rem] text-[4rem] mt-8 leading-[7rem] "><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC9FD] to-[#0DD0FF]">Changing Your Ideas</span> <br /> into innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0DD0FF] to-[#FFC9FD]">Projects.</span></h1>
          <p className="text-xl mt-8 mb-5 font-[Comfortaa] tracking-wide max-sm:text-5xl max-sm:leading-normal max-sm:mt-10 max-sm:mb-9">Unlock your creative potential at IDEALab. We offer a nurturing space and essential tools to fuel your innovative ideas, empowering you to turn ideas into reality.</p>
          <button className="xl:w-52 xl:h-14 bg-[#7B8CE5] rounded-full xl:text-lg font-mono hover:bg-white hover:text-[#7B8CE5] w-[20rem] h-24 text-4xl  ">Discover More</button>
        </div>
        <div className="xl:mt-14 absolute xl:left-[54rem] xl:w-[490px] xl:h-[560px] w-[20rem] h-[670px] mt-[125rem] left-[4px]  right-0">
          <Image
            src="/robo.png"
            alt="robo"
            layout="fill"
            // objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
          />
        </div>
        {/* <button className="text-[3.5rem] absolute top-[19rem] right-[16.5rem] " onClick={() => setPlay(!play)}>▶️</button> */}
        <button className={`text-[3.5rem] absolute top-[1rem] left-[49rem] z-10 ${play ? "block" : "hidden"}`} onClick={() => setPlay(!play)} >❌</button>
        <iframe className={`absolute left-10 top-3 ${play ? "block" : "hidden"}`} width="1000" height="770" src={`${play ? "https://www.youtube.com/embed/k0no4k1sgk8?si=PTJJYh8DcYuAI8UW&modestbranding=1" : ""}`} title="AICTE IdeaLab Tour" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <hr className="mx-auto w-[75%] mt-28 max-sm:mt-[47rem] max-sm:w-[90%] max-sm:ms-1 "/>
    </>
  )
}

export default Page1