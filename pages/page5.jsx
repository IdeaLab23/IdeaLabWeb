import Image from "next/image"
import Page5Comp1 from "./Page5Comp1"

const Page5 = () => {
  const text = "In non vel fermentum aliquam sed amet lorem ultrices lacus Cras eget tincidunt lectus risus id ultrices."
  return (
    <div className="pt-48 bg-black">
      <div className="z-0 absolute w-[400px] h-full rotate-180 right-0">
        <Image 
          src="/Ellipse-6.png"
          alt="tgf"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <span className="text-slate-200 font-mono ms-48 text-lg">Why Choose Us</span>
      <div className="flex justify-evenly">
        <div className="text-white">
          <span className="text-[3rem] font-bold font-mono text-white leading-[4rem]">The Top Reasons to <br/> Partner with Us</span>
            <Page5Comp1 title="Expertise in AI and Robotics" text={text} />
            <Page5Comp1 title="Robotics System Integration" text={text} />
            <Page5Comp1 title="Cutting-Edge Technologies" text={text} />
        </div>
      <Image 
        src="/man_inside.jpg"
        alt="Can't Load"
        width={500}
        height={150}
      />
      </div>
  </div>
  )
}

export default Page5