import Facilities_comp from "./facilities_comp"
import Image from "next/legacy/image"
const Page4 = () => {
const data=
  [
    "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus.",
    ""
  ]
  return (
    <div id="facilities" className="bg-black pt-14 max-sm:w-fill  ">
      <div className="z-0 xl:absolute right-0 top-[250rem] rotate-180 w-[300px] h-full max-sm:top-[1050rem] max-sm:left-[500px] max-sm:w-[50px] max-sm:h-[10px] max-sm:hidden ">
        <Image 
          src="/Ellipse-6.png"
          alt="tgf"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-slate-200 font-mono ms-56 text-lg max-sm:ms-[2rem] max-sm:text-xl ">Our Facilities</h3>
      <div className="flex max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:w-[22rem] ">
        <h1 className="text-[3rem] font-bold font-mono text-white leading-[4rem] ms-56 max-sm:text-3xl max-sm:leading-[3rem] max-sm:my-10 max-sm:ms-3 ">Our World Class Facilities<br/>and Resources</h1>
        <button className="xl:w-52 xl:h-14 bg-[#7B8CE5] rounded-full text-white xl:ms-64 text-lg font-mono hover:bg-white hover:text-[#7B8CE5] max-sm:w-[20rem]  max-sm:text-3xl max-sm:h-[5rem] max-sm:ms-9 ">Discover More</button>  
      </div>
      <div className="flex justify-center gap-7 my-14 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:ms-2 ">
        <Facilities_comp title="Automation"  description={data[0]} img_path="/auto.png"/>
        <Facilities_comp title="Construction" description={data[0]} img_path="/pre.png"/>
        <Facilities_comp title="Manufacturing" description={data[0]} img_path="/manu.png"/>
      </div>
      <div className="flex justify-center gap-7 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:ms-2 ">
        <Facilities_comp title="Public Safety " description={data[0]} img_path="/safety.png"/>
        <Facilities_comp title="Power Utilities" description={data[0]} img_path="/drill.png"/>
        <Facilities_comp title="Management" description={data[0]} img_path="/pre.png"/>
      </div> 
    </div>
  )
}

export default Page4