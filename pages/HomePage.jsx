import Image from "next/image"
import Navbar from "@/pages/Navbar"
const Page1 = () => {
  return (
    <>
    <div className="-z-10 absolute w-full h-[1120px] max-sm:w-[1000px] max-sm:h-[2800px] ">
      <Image
        src="/bg.jpg"
        alt="bg"
        layout="fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        objectFit="cover"
      />
    </div>
    <Navbar />
      <div className="flex ms-56 mt-20 max-sm:mt-32 max-sm:ms-28 max-sm:block">
        <div className="text-white w-[38rem] max-sm:w-[50rem] max-sm:text-center ">
          <h3 className="text-slate-200 font-mono text-lg max-sm:text-4xl">AICTE IDEA Lab LNCT</h3>
          <h1 className="text-6xl font-bold mt-4 leading-[5rem] max-sm:text-[6.9rem] max-sm:mt-8 max-sm:leading-[7rem] "><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC9FD] to-[#0DD0FF]">Changing Your Ideas</span> <br /> into innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0DD0FF] to-[#FFC9FD]">Projects.</span></h1>
          <p className="text-xl mt-8 mb-5 font-[Comfortaa] tracking-wide max-sm:text-5xl max-sm:leading-normal max-sm:mt-10 max-sm:mb-9">Unlock your creative potential at IDEALab. We offer a nurturing space and essential tools to fuel your innovative ideas, empowering you to turn ideas into reality.</p>
          <button className="w-52 h-14 bg-[#7B8CE5] rounded-full text-lg font-mono hover:bg-white hover:text-[#7B8CE5] max-sm:w-[26rem] max-sm:h-32 max-sm:text-4xl">Discover More</button>
        </div>
        <div className="mt-14 absolute left-[58rem] w-[490px] h-[560px] max-sm:w-[550px] max-sm:h-[670px] max-sm:mt-20 max-sm:left-60 ">
          <Image
              src="/robo.png"
              alt="robo"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
        </div>
      </div>
      <hr className="mx-auto w-[75%] mt-28 max-sm:mt-[47rem] max-sm:w-[200%] max-sm:ms-20 "/>
    </>
  )
}

export default Page1