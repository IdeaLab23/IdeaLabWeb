import Image from "next/image"
import Page2Comp from "./Page2Comp"

const Page2 = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus as laudantium officia ab inventore fugeius omnis est."
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
          <Page2Comp img="/auto.png" title="Automation" text={text}/>
          <Page2Comp img="/pre.png" title="Precision" text={text}/>
          <Page2Comp img="/accu.png" title="Accuracy" text={text}/>
        </div>
      </div>
      <hr className="mx-auto mt-16 w-[75%]"/>
    </div>
  )
}

export default Page2