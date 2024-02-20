import Image from "next/legacy/image"
import AboutComp from "./AboutComp"

const Page2 = () => {
  const text1 = "Idea Development: IDEALab nurtures your ideas, guiding them from start to finish. With expert support, cutting-edge resources, and a collaborative environment, your visionary innovations become reality."
  const text2 = "Evaluation is core to IDEALab's ethos. We recognize that transforming ideas into successful innovations is a critical, iterative process. Our expert team is dedicated to guiding and assisting you every step of the way."
  const text3 = "At IDEALab, we believe that innovation thrives when it meets the real world. Our community fosters projects that don't just stay on paper or screens; they leap into action, shaping the future. "
  return (
    <div id="aboutUs" className="bg-black">
      <div className="z-0 absolute top-[55rem] w-[400px] h-full max-sm:top-[270rem] max-sm:w-[500px] max-sm:h-[1000px] ">
        <Image 
          src="/Ellipse-6.png"
          alt="rfe"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-40 max-sm:text-center">
        <h3 className="text-slate-200 font-mono ms-56 text-lg max-sm:text-5xl max-sm:w-[35rem] ">Get to Know IDEA Lab</h3>
        <div className="flex max-sm:block ">
            <h1 className="text-[3.4rem] w-[40rem] font-bold font-mono text-white leading-[4rem] ms-56 max-sm:text-[5rem] max-sm:leading-[5.5rem] max-sm:my-9 max-sm:w-[50rem] max-sm:ms-28 ">Innovating the Future with your Ideas</h1>
            <button className="w-52 h-14 bg-[#7B8CE5] rounded-full text-white ms-64 text-lg font-mono hover:bg-white hover:text-[#7B8CE5] max-sm:w-[23rem] max-sm:h-28 max-sm:text-4xl max-sm:ms-80 ">Discover More</button>  
        </div>
        <div className="flex place-content-center gap-24 mt-20 max-sm:block max-sm:ms-72 ">
          <AboutComp img="/auto.png" title="Idea Development" text={text1}/>
          <AboutComp img="/pre.png" title="Evaluation" text={text2}/>
          <AboutComp img="/accu.png" title="Application" text={text3}/>
        </div>
      </div>
      <hr className="mx-auto mt-16 w-[75%] max-sm:w-[200%] max-sm:ms-20"/>
    </div>
  )
}

export default Page2