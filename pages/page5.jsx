import Image from "next/image"

const Page5 = () => {
  return (
    <div className="mt-48 ml-40">
      <span className="text-slate-200 font-mono text-lg   ">Why Choose Us</span>
      <div className="flex  justify-evenly">
        <div className="">
          <span className=" text-[3rem] font-bold font-mono  text-white  leading-[4  rem]  ">The Top Reasons to <br/> Partner with Us</span>
           <ol  className="list-disc">
            <li className="before:content-[' ✔ '] "><h3 className="p-5 font-bold text-2xl">Expertise in AI and Robotics</h3><p className="ml-5">In non vel fermentum aliquam sed amet lorem ultrices lacus. <br/>Cras eget tincidunt lectus risus id ultrices.</p></li>
            <li className="font-bold"><h3 className="p-5 font-bold text-2xl">Robotics System Integration</h3><p className="ml-5">In non vel fermentum aliquam sed amet lorem ultrices lacus.  <br/>Cras eget tincidunt lectus risus id ultrices.</p></li>
            <li className="font-bold"><h3 className="p-5 font-bold text-2xl ">Cutting-Edge Technologies</h3><p className="ml-5">In non vel fermentum aliquam sed amet lorem ultrices lacus. <br/>Cras eget tincidunt lectus risus id ultrices.</p></li>
                </ol>

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