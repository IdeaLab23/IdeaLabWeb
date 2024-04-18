"use client"
import Image from "next/legacy/image"
import Navbar from "@/pages/Navbar"
import React from "react"
const Page1 = () => {
  const [play, setPlay] = React.useState(false)
  return (
    <>
    <div className="-z-10 absolute xl:w-full xl:h-[1120px] w-[100vw] h-[140rem] ">
      <Image
        src="/bg.jpg"
        alt="bg"
        layout="fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <Navbar />
      <div className="flex xl:ms-56 xl:mt-20 mt-24 mx-9">
        <div className="text-white xl:w-[38rem]">
          <h3 className="text-slate-200 font-mono xl:text-lg text-2xl">AICTE IDEA Lab LNCT, Bhopal</h3>
          <h1 className="xl:text-6xl font-bold xl:mt-4 xl:leading-[5rem] text-[3.5rem] mt-8 leading-[3.5rem] max-sm:text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC9FD] to-[#0DD0FF]">Changing Your Ideas</span> <br /> into innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0DD0FF] to-[#FFC9FD]">Projects.</span></h1>
          <p className="text-xl mt-8 mb-5 font-[Comfortaa] tracking-wide max-sm:text-2xl max-sm:leading-normal max-sm:text-center max-sm:mt-10 max-sm:mb-9">Unlock your creative potential at IDEALab. We offer a nurturing space and essential tools to fuel your innovative ideas, empowering you to turn ideas into reality.</p>
          <button className="xl:w-52 xl:h-14 bg-[#7B8CE5] rounded-full xl:text-lg font-mono hover:bg-white hover:text-[#7B8CE5] w-[15rem] h-16 max-sm:ms-14 text-2xl">Discover More</button>
        </div>
        <div className="xl:mt-14 absolute xl:left-[54rem] xl:w-[490px] xl:h-[560px] w-[22rem] h-[670px] mt-[53rem]">
          <Image
            src="/robo.png"
            alt="robo"
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
          />
        </div>

        <button className="text-[3.5rem] absolute top-[25rem] right-[11rem]   max-sm:hidden" onClick={() => setPlay(!play)}>▶️</button>
        <button className={`text-[3.5rem] absolute top-[1rem] left-[49rem] z-10 ${play ? "block" : "hidden"}`} onClick={() => setPlay(!play)} >❌</button>
        <iframe className={`absolute left-10 top-3 ${play ? "block" : "hidden"}`} width="1000" height="770" src={`${play ? "https://www.youtube.com/embed/cDKH_DkUNzs?si=bcLOLGL_35c4gWu4"  : ""}`} title="AICTE IdeaLab Tour" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      </div>
      <hr className="mx-auto w-[75%] mt-28 max-sm:mt-[47rem] max-sm:w-[90%] "/>
    </>
  )
}

export default Page1