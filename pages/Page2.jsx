import Image from "next/image"
import Page2Comp from "./Page2Comp"

const Page2 = () => {
  const text1 = "Idea Development: IDEALab nurtures your ideas, guiding them from start to finish. With expert support, cutting-edge resources, and a collaborative environment, your visionary innovations become reality."
  const text2 = "Evaluation is core to IDEALab's ethos. We recognize that transforming ideas into successful innovations is a critical, iterative process. Our expert team is dedicated to guiding and assisting you every step of the way."
  const text3 = "At IDEALab, we believe that innovation thrives when it meets the real world. Our community fosters projects that don't just stay on paper or screens; they leap into action, shaping the future. "
  return (
    <div className="bg-black">
      <div className="z-0 absolute w-[400px] h-full">
        <Image 
          src="/Ellipse-6.png"
          alt="rfe"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mt-40">
        <div className="w-[40rem] ms-56">
          <h3 className="text-slate-200 font-mono text-lg">Get to Know IDEALab</h3>
          <h1 className="text-[3.4rem] font-bold font-mono mt-4 text-white leading-[4rem]">Innovating the Future with your Ideas</h1>
        </div>
        <div className="flex place-content-center gap-24 mt-20">
          <Page2Comp img="/auto.png" title="Idea Development" text={text1}/>
          <Page2Comp img="/pre.png" title="Evaluation" text={text2}/>
          <Page2Comp img="/accu.png" title="Application" text={text3}/>
        </div>
      </div>
      <hr className="mx-auto mt-16 w-[75%]"/>
    </div>
  )
}

export default Page2