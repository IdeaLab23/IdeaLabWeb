import Image from "next/image"
import Page3Comp1 from "./Page3Comp1"
import Page3Comp2 from "./Page3Comp2"

const Page3 = () => {
    const text = "Lorem ipsum sit amet ctetudbt adipisicing elit. Veritatis animi nisi vitae?"
  return (
    <div className="pt-24 pb-10 bg-black">
        <div className="z-0 absolute w-[400px] h-full rotate-180 right-0 top-[110rem]">
            <Image
                src="/Ellipse-6.png"
                alt="okrf"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="w-[45rem] ms-56">
            <h3 className="text-slate-200 font-mono text-lg">What we Offer</h3>
            <h1 className="text-[3rem] font-bold font-mono mt-4 text-white leading-[4rem]">Empowering Industries <br/> with Intelligent Automation</h1>
        </div>
        <div className="flex place-content-center items-center gap-14">
            <Image 
                src="/roboHand.jpg"
                alt="hand"
                width={600}
                className="w-[670px] h-[440px]"
                height={400}
            />
            <div>      
                <Page3Comp1 title="Machine Learning" text={text}/>
                <Page3Comp1 title="Sensor Integration" text={text}/>
                <Page3Comp1 title="Computer Vision" text={text}/>
            </div>
        </div>
        <div className="flex justify-center gap-6 mt-14 mb-20">
            <Page3Comp2 title="64K+" text="Success Projects" />
            <div className="w-[275px] h-[266px] flex flex-col justify-center bg-[#7B8CE5]">
                <p className="text-6xl font-mono text-white text-center ">54+</p>
                <p className="text-slate-200 text-xl text-center mt-4">Expert Team</p>
            </div>
            <Page3Comp2 title="36K+" text="Satidifed Clients" />
            <Page3Comp2 title="25+" text="Awards Winning" />
        </div>
    </div>
  )
}

export default Page3