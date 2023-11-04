import Services_comp from "./services_comp"
import Image from "next/image"
const Page4 = (props) => {
const data=
  [
    "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus.",
    ""
  ]
  return (
    <div id="facilities" className="bg-black pt-14">
      <div className="z-0 absolute right-0 top-[250rem] rotate-180 w-[300px] h-full">
        <Image 
          src="/Ellipse-6.png"
          alt="tgf"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-slate-200 font-mono ms-56 text-lg">Our Facilities</h3>
      <div className="flex">
          <h1 className="text-[3rem] font-bold font-mono text-white leading-[4rem] ms-56">Our World Class Facilities<br/>and Resources</h1>
          <button className="w-52 h-14 bg-[#7B8CE5] rounded-full text-white ms-64 text-lg font-mono hover:bg-white hover:text-[#7B8CE5]">Discover More</button>  
      </div>
      <div className="flex justify-center gap-7 my-14 mr-13">
          <Services_comp title="Automation"  description={data[0]} img_path="/auto.png"/>
          <Services_comp title="Construction" description={data[0]} img_path="/pre.png"/>
          <Services_comp title="Manufacturing" description={data[0]}img_path="/manu.png"/>
      </div>
      <div className="flex justify-center gap-7 mr-13">
        <Services_comp title="Public Safety " description={data[0]} img_path="/safety.png"/>
        <Services_comp title="Power Utilities" description={data[0]} img_path="/drill.png"/>
        <Services_comp title="Management" description={data[0]} img_path="/pre.png"/>
      </div> 
    </div>
  )
}

export default Page4