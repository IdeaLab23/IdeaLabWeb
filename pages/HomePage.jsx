import Image from "next/image"
import Navbar from "@/pages/Navbar"
const Page1 = () => {
  return (
    <>
    <div className="-z-10 absolute w-full h-[1120px] max-sm:w-[920px]">
      <Image
        src="/bg.jpg"
        alt="bg"
        layout="fill"
        objectFit="cover"
        />
    </div>
    <Navbar />
      <div className="flex place-content-center gap-20 mt-20">
          <div className="text-white w-[38rem]">
              <h3 className="text-slate-200 font-mono text-lg">AICTE IDEA Lab LNCT</h3>
              <h1 className="text-6xl font-bold mt-4 leading-[5rem]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC9FD] to-[#0DD0FF]">Changing Your Ideas</span> <br /> into innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0DD0FF] to-[#FFC9FD]">Projects.</span></h1>
              <p className="text-xl mt-8 mb-5 font-[Comfortaa] tracking-wide">Unlock your creative potential at IDEALab. We offer a nurturing space and essential tools to fuel your innovative ideas, empowering you to turn ideas into reality.</p>
              <button className="w-52 h-14 bg-[#7B8CE5] rounded-full text-lg font-mono hover:bg-white hover:text-[#7B8CE5]">Discover More</button>
          </div>
          <div className="mt-14">
              <Image
                src="/robo.png"
                alt="robo"
                width={470}
                height={500}
              />
          </div>
      </div>
      <hr className="mx-auto w-[75%]"/>
    </>
  )
}

export default Page1